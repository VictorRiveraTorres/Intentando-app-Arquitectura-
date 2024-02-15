import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions , Image, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window')
const imagen ={uri :'https://img.freepik.com/vector-gratis/fondo-acuarela-abstracta-pintada-mano_23-2148995293.jpg'}
export default function HomeScreen({ navigation }) {
    return (
<View style={{ flex: 1 }}>
  <ScrollView>
  <ImageBackground source={imagen} resizeMode={'stretch'} style={styles.imagen}>
  <View style={styles.textContainer}>
  <Text style={styles.titulo}>
    Resiliencia climática hacia un futuro sostenible
  </Text>
  
  </View>
  <Image
        style={styles.lago}
        source={{
          uri: 'https://elcomercio.pe/resizer/yHd9dzkntOdk1Vs4JuUuEoqHWMo=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6PR7ABGD65F7DCWAMXQ2BH5OGY.jpg',
        }}
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
          source={{ uri: 'https://www.andeanglaciers.org/wp-content/uploads/2021/11/1800-1200_1NV_9618HD_1300.jpg' }}
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
    
  },
  imagen_2: {
    width: 150, // Ajusta el ancho de la imagen según tus necesidades
    height: 150, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: 'cover', // Puedes ajustar esto según tus preferencias
    borderRadius: 8, // Opcional: agrega bordes redondeados a la imagen
  },
  container: {
    flexDirection: 'row', // Alinea los elementos en fila (horizontal)
    alignItems: 'center', // Alinea los elementos verticalmente en el centro
    padding: 16,
  },
  imageContainer: {
    marginLeft: 16, // Márgenes para separar el texto de la imagen
  },
  textContainer: {
    backgroundColor: '#b0c0d9',
    padding: 20,
    borderRadius: 20, // Opcional: agrega bordes redondeados al cuadro blanco
    margin: 20, // Opcional: ajusta el margen alrededor del cuadro blanco
    alignSelf: 'center', // Opcional: alinea el cuadro blanco al centro
    
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  lago: {
    width: width * 0.75,
    height: height * 0.2,
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