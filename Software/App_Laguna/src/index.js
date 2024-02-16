import { View, Text, StyleSheet , ImageBackground, Dimensions,Image } from 'react-native';
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

  const imagen ={uri :'https://img.freepik.com/vector-gratis/marco-fondo-azul-fluido_53876-99019.jpg'}  
  return (
    <View style={styles.container}>
      <ImageBackground source={imagen} resizeMode={'stretch'} style={styles.imagen}>
      <Text style={styles.header}>DATOS</Text>
      {todoData.map((item, index) => (
        <View style={styles.contenedor} key={index}>
          <Text style={styles.text}>{item.id}: {item.value}</Text>
        </View>
      ))}
      <View style={{ alignItems: 'center' }}>
      <Image source={{ uri:'https://img1.picmix.com/output/stamp/thumb/3/7/2/5/585273_ddcc1.gif' }} style={{ width: 300, height: 200 }} />
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
 
  },
  imagen: {
    flex:1,
    justifyContent: 'center',
    
  },
  contenedor:{
    backgroundColor:'white',
    padding: 20,
    borderRadius: 10, // Opcional: agrega bordes redondeados al cuadro blanco
    margin: 10, // Opcional: ajusta el margen alrededor del cuadro blanco
    alignSelf: 'center',

  },
});

export default FetchData;