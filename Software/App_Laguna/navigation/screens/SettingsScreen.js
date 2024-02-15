import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,ImageBackground,ScrollView } from 'react-native';
const imagen ={uri :'https://img.freepik.com/vector-gratis/marco-fondo-azul-fluido_53876-99019.jpg'}
const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView>
      <ImageBackground source={imagen} resizeMode={'stretch'} style={styles.imagen}>
        <View style={styles.contenedor}>
      <Text
        style={{
          fontSize: 38,
          fontWeight: 'bold',
        
        }}>
        Precauciones
      </Text>
      </View>
      <View style={styles.contenedor_sub}>
      <Text style={styles.texto}>Mapa de Zonas seguras en caso de Inundaciones</Text>
      </View>
      <Image
        style={styles.mapa}
        source={{
          uri: 'https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/23025837/Mapa-de-zonas-seguras-y-rutas-de-evacuacio%CC%81n-HUARAZ-INDEPENDECIA.png',
        }}
      />
      <Text style={styles.cita}>El mapa de peligro fue elaborado por expertos de las universidades de Zurich y Texas. Imagen: Proyecto Glaciares.</Text>
      <View style={styles.contenedor_sub}>
      <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign:'center'
        
        }}>
        Zonas Seguras en Caso de Inundación


      </Text>


      </View>


      <View style={styles.container}>
      <View style={styles.textContaine_s}>
        <Text style={styles.texto_n}>
        Plazuela de Belén
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.imagen_2}
          source={{ uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b0/12/b8/pileta-de-la-plaza.jpg?w=1200&h=-1&s=1' }}
        />
      </View>
    </View>
    


    <View style={styles.container}>
      <View style={styles.textContaine_s}>
        <Text style={styles.texto_n}>
       Parque de la Amistad Internacional
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.imagen_3}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Parquedlp.JPG/1200px-Parquedlp.JPG' }}
        />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.textContaine_s}>
        <Text style={styles.texto_n}>
       Plaza de Armas de Huaraz
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.imagen_3}
          source={{ uri: 'https://cdn.www.gob.pe/uploads/document/file/4112118/standard_catedral-de-huaraz.jpg.jpg' }}
        />
      </View>
    </View>


      </ImageBackground>
      </ScrollView>
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
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine:'underline',


  },
  imagen:{
    flex:1,


  },
  contenedor:{
    alignItems: 'center',
    backgroundColor:'white',
    marginTop:20,
    alignSelf: 'center',
    padding:15,
    borderRadius:20,
  },
  contenedor_sub:{
    alignItems: 'center',
    backgroundColor:'white',
    marginTop:20,
    alignSelf: 'center',
    padding:10,
    borderRadius:20,
  },container: {
    flexDirection: 'row', // Alinea los elementos en fila (horizontal)
    alignItems: 'center', // Alinea los elementos verticalmente en el centro
    padding: 16,
  },textContaine_s: {
    flex: 1,
    backgroundColor: '#0303b5',
    borderRadius: 20,
    padding: 10,
  },
  texto_n: {
    fontSize: 28,
    fontWeight:'bold',
    textAlign: 'center',
    color:'white'
  },
  imageContainer: {
    marginLeft: 16, // Márgenes para separar el texto de la imagen
  },
  imagen_2: {
    width: 200, // Ajusta el ancho de la imagen según tus necesidades
    height: 200, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: 'cover', // Puedes ajustar esto según tus preferencias
    borderRadius: 8, // Opcional: agrega bordes redondeados a la imagen
  },
  imagen_3: {
    width: 175, // Ajusta el ancho de la imagen según tus necesidades
    height: 200, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: 'cover', // Puedes ajustar esto según tus preferencias
    borderRadius: 8, // Opcional: agrega bordes redondeados a la imagen
  },

});

export default SettingsScreen;


