import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text
        style={{
          fontSize: 38,
          fontWeight: 'bold',
          marginBottom: 0, // Establece el margen inferior a 0
        }}>
        Precauciones
      </Text>
      <Text style={styles.texto}>Mapa de Zonas seguras en caso de Inundaciones</Text>
      <Image
        style={styles.mapa}
        source={{
          uri: 'https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/23025837/Mapa-de-zonas-seguras-y-rutas-de-evacuacio%CC%81n-HUARAZ-INDEPENDECIA.png',
        }}
      />
      <Text style={styles.cita}>El mapa de peligro fue elaborado por expertos de las universidades de Zurich y Texas. Imagen: Proyecto Glaciares.</Text>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mapa: {
    width: width * 0.95,
    height: height * 0.35,
    resizeMode: 'contain',
    marginTop:0,
  },
  cita:{
    


  },
  texto:{
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine:'underline',


  }
});

export default SettingsScreen;


