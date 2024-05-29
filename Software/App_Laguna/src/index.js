import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { db } from '../config';
import { ref, onValue } from 'firebase/database';
import * as Notifications from 'expo-notifications';
import Fondo from '../navigation/screens/fondo3.jpg'

const FetchData = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const fetchDataAndCheckDistance = async () => {
      const starCountRef = ref(db, 'Datos/');
      onValue(starCountRef, async (dataSnapshot) => {
        const data = dataSnapshot.val();

        if (data) {
          const newPosts = [
            { id: 'Distancia', value: data.Distancia },
            { id: 'Humedad', value: data.Humedad },
            { id: 'Temperatura', value: data.Temperatura },
          ];

          setTodoData(newPosts);

          const distanciaValue = parseFloat(data.Distancia);
          if (!isNaN(distanciaValue) && distanciaValue < 30) {
            const expoPushToken = await registerForPushNotificationsAsync();
            sendNotification(expoPushToken);
          }
        }
      });
    };

    fetchDataAndCheckDistance();
  }, []);






  
  const sendNotification = async (expoPushToken) => {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Emergencia por Inundación',
      body: 'Laguna Palcacocha se ha desbordado, por favor evacue hacia una zona segura.',
    };

    await Notifications.scheduleNotificationAsync({
      content: message,
      trigger: null,
    });
  };

  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    const { data } = await Notifications.getExpoPushTokenAsync();
    return data;
  };




  const backgroundImage = { uri: 'https://img.freepik.com/vector-gratis/marco-fondo-azul-fluido_53876-99019.jpg' };

  return (
    <View style={styles.container}>
      <ImageBackground source={Fondo} resizeMode='cover' style={styles.imageBackground}>
        <Text style={styles.header}>DATOS</Text>
        {todoData.map((item, index) => (
          <View style={styles.dataContainer} key={index}>
            <Text style={styles.text}>{item.id}: {item.value}</Text>
          </View>
        ))}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
  dataContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default FetchData;
