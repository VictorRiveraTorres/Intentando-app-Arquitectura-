import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db } from '../config';
import { ref, onValue } from 'firebase/database';
import * as Notifications from 'expo-notifications';

const FetchData = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const fetchDataAndCheckDistance = async () => {
      const starCountRef = ref(db, 'Datos/');
      onValue(starCountRef, async (dataSnapshot) => {
        const data = dataSnapshot.val();

        // Check if there is data before processing
        if (data) {
          const newPosts = [
            {
              id: 'Distancia',
              value: data.Distancia,
            },
            {
              id: 'Humedad',
              value: data.Humedad,
            },
            {
              id: 'Temperatura',
              value: data.Temperatura,
            },
            // ... other data if available
          ];

          console.log(newPosts);
          setTodoData(newPosts);

          // Verificar si la distancia está por debajo de 8 y enviar notificación
          const distanciaValue = parseFloat(data.Distancia);
          if (!isNaN(distanciaValue) && distanciaValue < 30) {
            // Obtener dinámicamente el Expo Push Token
            const expoPushToken = await registerForPushNotificationsAsync();
            
            // Enviar notificación con el token obtenido
            sendNotification(expoPushToken);
          }
        }
      });
    };

    fetchDataAndCheckDistance();
  }, []);

  // Función para enviar notificación
  const sendNotification = async (expoPushToken) => {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Emergencia por Inundación',
      body: 'Laguna Palcacocha se ha desbordado,por favor evacue hacia una zona segura.',
    };

    await Notifications.scheduleNotificationAsync({
      content: message,
      trigger: null, // Envía la notificación inmediatamente
    });
  };

  // Función para obtener dinámicamente el Expo Push Token
  const registerForPushNotificationsAsync = async () => {
    let token;

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
    token = data;
    console.log(token);

    return token;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DATOS</Text>
      {todoData.map((item, index) => (
        <View key={index}>
          <Text style={styles.text}>{item.id}: {item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FetchData;