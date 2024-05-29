import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Linking, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import BelenImage from './Belen.jpg'
import Amistad from './amistad.jpg'
import Fondo from './fondo3.jpg'
import PLAZA from './PLAZA.jpeg'
import Map from './maps.jpg'

const predefinedLocations = [
  { name: 'Plaza Belén', coords: { latitude: -9.5295, longitude: -77.5281 } },
  { name: 'Parque de la Amistad Internacional', coords: { latitude: -9.5261, longitude: -77.5310 } },
  { name: 'Plaza de Armas de Huaraz', coords: { latitude: -9.5292, longitude: -77.5279 } },
];

const haversineDistance = (coords1, coords2) => {
  const toRad = x => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(coords2.latitude - coords1.latitude);
  const dLong = toRad(coords2.longitude - coords1.longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coords1.latitude)) *
    Math.cos(toRad(coords2.latitude)) *
    Math.sin(dLong / 2) *
    Math.sin(dLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

const getCurrentPosition = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('No se tiene permiso para la ubicacion');
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
};

const findClosestLocation = (currentCoords, locations) => {
  let minDistance = Infinity;
  let closestLocation = null;

  locations.forEach(location => {
    const distance = haversineDistance(currentCoords, location.coords);
    if (distance < minDistance) {
      minDistance = distance;
      closestLocation = location;
    }
  });

  return closestLocation;
};

const SettingsScreen = ({ navigation }) => {
  const [closestLocation, setClosestLocation] = useState(null);

  useEffect(() => {
    const fetchPositionAndFindClosest = async () => {
      const currentCoords = await getCurrentPosition();
      if (currentCoords) {
        const closest = findClosestLocation(currentCoords, predefinedLocations);
        setClosestLocation(closest);
      }
    };

    fetchPositionAndFindClosest();
  }, []);

  const handleLocationPress = () => {
    if (closestLocation) {
      const { latitude, longitude } = closestLocation.coords;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
      Linking.openURL(url);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground source={Fondo} resizeMode={'stretch'} style={styles.imagen}>
          <View style={styles.Container2}>
            <Text style={styles.headerText}>Precauciones</Text>
          </View>
          {closestLocation && (
            <>
              <View style={styles.googleMapsContainer}>
                <Text style={styles.closestLocationText}>La ubicación más cercana para evacuar en caso de emergencia es: {closestLocation.name}</Text>
              </View>
              <TouchableOpacity style={styles.googleMapsContainer} onPress={handleLocationPress}>
  <Image
    style={styles.googleMapsImage}
    source={Map}
  />
  <Text style={styles.googleMapsText}>Ruta de evacuación en Google Maps</Text>
</TouchableOpacity>

            </>
          )}
          <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>Mapa de Zonas seguras en caso de Inundaciones</Text>
          </View>
          <Image
            style={styles.mapa}
            source={{
              uri: 'https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/23025837/Mapa-de-zonas-seguras-y-rutas-de-evacuacio%CC%81n-HUARAZ-INDEPENDECIA.png',
            }}
          />
          <Text style={styles.cita}>El mapa de peligro fue elaborado por expertos de las universidades de Zurich y Texas. Imagen: Proyecto Glaciares.</Text>
          <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>Zonas Seguras en Caso de Inundación (SIGRID)</Text>
          </View>
          
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.locationText}>Plaza Belén</Text>
            </View>
            <Image
              style={styles.locationImage}
              source={BelenImage}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.locationText}>Parque de la Amistad Internacional</Text>
            </View>
            <Image
              style={styles.locationImage}
              source={Amistad}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.locationText}>Plaza de Armas de Huaraz</Text>
            </View>
            <Image
              style={styles.locationImage}
              source={PLAZA}
            />
          </View>
          
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',

  },
  imagen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  subHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 20,
    marginVertical: 20,
    alignItems: 'center',
    width: '90%',
  },
  subHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mapa: {
    width: width * 0.95,
    height: height * 0.35,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  cita: {
  fontSize: 14,
  textAlign: 'center',
  fontStyle: 'italic',
  marginTop: 5,
  },
  closestLocationText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF0000',
  },
  googleMapsImage: {
    width: 49,
    height: 40,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderRadius: 10,
    backgroundColor: '#ffff',
    marginBottom: 10, 
    elevation: 3,
  },
  textContainer: {
    flex: 1, 
    paddingHorizontal: 10, 
  },
  locationText: {
    fontSize: 20,
    color: '#333', 
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  locationImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  googleMapsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  Container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 40,
  },
  googleMapsImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  googleMapsText: {
    fontSize: 18,
    color: '#000080',
  },

});

export default SettingsScreen;
