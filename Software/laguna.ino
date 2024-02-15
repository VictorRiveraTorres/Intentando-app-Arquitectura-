#include "DHTesp.h"
#include <ESP32Firebase.h>
#include <WiFi.h>
#define FIREBASE_HOST "fdd-2024-default-rtdb.firebaseio.com"
//#define FIREBASE_AUTH "1XXFUEkFhXkhEu9XJQDLfbvS2YIqxkfITCWPVMjn"
#define WIFI_SSID "Jose_Cueva"
#define WIFI_PASSWORD "12345678"
Firebase firebase(FIREBASE_HOST);
const char* ruta = "Datos";


int pinDHT =5 ;
int trig =2;
int eco = 4;
int buzzerPin =18;
int duration;
int distancia;
DHTesp dht;
void setup() {
  pinMode(trig , OUTPUT);
  pinMode(eco, INPUT);
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
  dht.setup(pinDHT,DHTesp::DHT22);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  //Firebase.begin(FIREBASE_HOST);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConexión a Wi-Fi exitosa");
  Serial.println("Dirección IP: " + WiFi.localIP().toString());

}

void loop() {
digitalWrite(trig,HIGH);
delay(1);
digitalWrite(trig,LOW);
duration =pulseIn(eco,HIGH);
//tem y humedad
TempAndHumidity data = dht.getTempAndHumidity();
//distancia
distancia=duration/58.2;
Serial.print(distancia);
Serial.println("cm");
Serial.println("Temperatura: " + String(data.temperature, 2) + "°C");
Serial.println("Humedad: " + String(data.humidity, 1) + "%");
Serial.println("---");
/*if (distancia < 8) {
    digitalWrite(buzzerPin, HIGH);  // Activar el buzzer
  } else {
    digitalWrite(buzzerPin, LOW);  // Desactivar el buzzer
  }*/

firebase.setFloat(String(ruta) +"/Temperatura", data.temperature ) ;
firebase.setFloat(String(ruta) +"/Humedad", data.humidity) ;
firebase.setFloat( String(ruta) +"/Distancia", distancia ) ;
}
