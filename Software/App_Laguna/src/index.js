import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db } from '../config';
import { ref, onValue } from 'firebase/database';

const FetchData = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, 'Datos/');
    onValue(starCountRef, (dataSnapshot) => {
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
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FetchData</Text>
      {todoData.map((item, index) => (
        <View key={index}>
          <Text style={styles.text}>{item.id}: {item.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default FetchData;

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
