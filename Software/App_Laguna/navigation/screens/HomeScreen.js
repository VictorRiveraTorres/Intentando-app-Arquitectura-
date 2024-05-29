import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions , Image, ScrollView } from 'react-native';
import Nevado1 from './nevado1.jpg'
import Nevado2 from './nevado2.jpg'
import Fondo from './fondo3.jpg'

const { width, height } = Dimensions.get('window')
export default function HomeScreen({ navigation }) {
    return (
<View style={{ flex: 1 }}>
  <ScrollView>
  <ImageBackground source={Fondo} resizeMode={'stretch'} style={styles.imagen}>
  <View style={styles.textContainer}>
  <Text style={styles.titulo}>
    Resiliencia climática hacia un futuro sostenible
  </Text>
  
  </View>
  <Image
        style={styles.lago}
        source={Nevado1}
      />
   <View style={styles.textContaine_n}>
  <Text style={styles.texto_n}>
  El Perú es uno de los 10 países mas vulnerables ante eventos de cambio climático. Ademas, se ha determinado que el 99% del  cambio climático antropogénico  ha ocasionado el retroceso del glaciar Palcaraju y por ende un incremento del riesgo de inundaciones en la ciudad de Huaraz (Swissinfo.ch, 2021).
Se resalta que a pesar del alto riesgo de un posible desbordamiento de la laguna (que podría ser superior a lo ocurrido en 1941) existen pocos esfuerzos de prevención (García, 2019).
  </Text>
  
  </View>  
  <View style={styles.textContainer}>
  <Text style={styles.titulo}>
    Objetivos del Producto
  </Text>
  
  </View>
  <View style={styles.container}>
      <View style={styles.textContaine_s}>
        <Text style={styles.texto_n}>
        Medir el nivel del agua humedad y temperatura de la laguna Palcacocha y alertar a la población de Huaraz de posibles inundaciones.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.imagen_2}
          source={Nevado2}
        />
      </View>
    </View>

  
  </ImageBackground>

  </ScrollView>
</View>

    );
}

const styles = StyleSheet.create({
  imagen: {
    flex:1,
    justifyContent: 'center',
    opacity: 1.2,
    
  },
  
  imagen_2: {
    width: 150, 
    height: 150, 
    resizeMode: 'cover',
    borderRadius: 8, 
  },
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16,
  },
  imageContainer: {
    marginLeft: 16, 
  },
  textContainer: {
    backgroundColor: '#b0c0d9',
    padding: 20,
    borderRadius: 20,
    margin: 20, 
    alignSelf: 'center', 
    marginTop:50,  
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  lago: {
    width: width * 0.75,
    height: height * 0.3,
    resizeMode: 'contain',
    marginHorizontal:50,
    marginTop:0,
    borderRadius: 20,
  },
  texto_n: {
    fontSize: 15,
    
    textAlign: 'center',
  },
  textContaine_n: {
    backgroundColor: '#6571ac',
    padding: 20,
    borderRadius: 20, // Opcional: agrega bordes redondeados al cuadro blanco
    margin: 20, // Opcional: ajusta el margen alrededor del cuadro blanco
    alignSelf: 'center', // Opcional: alinea el cuadro blanco al centro
    
  },
  textContaine_s: {
    flex: 1,
    backgroundColor: '#6165c2',
    borderRadius: 20,
    padding: 10,
  },
  
});