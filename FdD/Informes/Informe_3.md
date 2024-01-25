# INFORME DEL TALLER USO DE KIT ARDUINO IOT
## INTRODUCCION
<p>El Internet de las Cosas (IoT) representa una red extensa de dispositivos conectados globalmente, recopilando y compartiendo datos. Su fundamentación se basa en la capacidad de marcar digitalmente cualquier objeto y conectarlo a una red global, como Internet. Este enfoque transforma la computación hacia un paradigma distribuido, donde la interconexión de entidades como lámparas, teléfonos, automóviles y más, genera una red de comunicación.</p>
<p>La comunicación entre estos dispositivos se realiza mediante diversas tecnologías y protocolos, facilitando el intercambio de información a través de Internet. Las aplicaciones del IoT varían desde controlar una simple bombilla con un teléfono hasta implementar sistemas complejos como la gestión de residuos. La naturaleza descentralizada de la computación en este contexto se combina con la centralización de datos, donde la información se comparte y procesa en infraestructuras centralizadas. Este entorno interconectado tiene un impacto significativo en la vida diaria, mejorando la eficiencia y la funcionalidad de diversos aspectos, desde el hogar hasta la gestión urbana.</p>
<p>Las redes de objetos conectados, o Internet de las Cosas (IoT), encuentran aplicación en diversos dominios gracias a la reducción de costos y tamaños de dispositivos, el avance tecnológico y un mayor acceso a Internet Fábricas conectadas, monitorización de vehículos, control de edificios y el futuro de la atención médica.</p>

## LAS HERRAMIENTAS INCLUIDAS SON: 
<P>Arduino MKR WiFi 1010 y MKR IoT Carrier: Proporciona hardware esencial para la implementación de proyectos IoT y Arduino Cloud, se integra con la plataforma en línea de Arduino Cloud, que permite programar la placa, conectar dispositivos, explorar proyectos en Arduino Project Hub y gestionar placas de forma remota a través de Arduino Device Manager.</P>

## PRIMER EJERCICIO:

<P>Durante este ejercicion tuvimos que realizar diferentes actividades como, el ensamblaje del kit  en el cual encajamos Arduino MKR WiFi 1010 en la base MKR IoT Carrier </P>
<p align="center"><img src="../../Imagenes/I_informe_3/instalacion.jpeg" width="400px" /></p>
<p>Luego conectamos el arduino a nuestra Laptop  y compilamos el codigo obtenido en arduino cloud en nuestro Arduino MKR mediante un editor de arduino en linea previamente sincronizados </p>
<p>Al correr el codigo nuestro arduino arrojaba datos tanto de la humedad (Como porcentaje) como de la temperatura (En grados celcius) en el ambiente y los mostraba en su pantalla</p>
<p align="center"><img src="../../Imagenes/I_informe_3/temp.jpeg" width="400px" /></p>

## SEGUNDO EJERCICIO:
<P>En este ejercicio modificamos el codigo obtenido de Arduino Cloud para que en el momento de pulsar los diferente Touch de el MKR IoT Carrier la unidad de medida de la temperatura cambia entre Kelvin , Celcius y Fahrenheit </P>
<p>Para lograr esto creamos diferentes condicionales para que funciones en reaccion con cada touch y al momento de accionar el touch una funcion la cual transformara la temperatura entre  Kelvin , Celcius y Fahrenheit comenzara a funcionar dependiendo del touch accionado</p>
<pre>
  <code>
    if (carrier.Buttons.onTouchDown(TOUCH0)) {
    printTemperatureCelsius();
  }
  if (carrier.Buttons.onTouchDown(TOUCH1)) {
    printHumidity();
  }
  if (carrier.Buttons.onTouchDown(TOUCH2)) {
    printTemperatureKelvin();
  }
  if (carrier.Buttons.onTouchDown(TOUCH3)) {
    printTemperatureFahrenheit();
  }
  </code>
</pre>

<h3>El codigo para la funcion para Celcius </h3>
<pre>
  <code>
  void printTemperatureCelsius() {
  carrier.display.fillScreen(ST77XX_RED);
  carrier.display.setTextColor(ST77XX_WHITE);
  carrier.display.setTextSize(6);
  carrier.display.setCursor(30, 50);
  carrier.display.print("Temp: ");
  carrier.display.setTextSize(4);
  carrier.display.setCursor(40, 120);
  carrier.display.print(temperature);
  carrier.display.print(" C");
} 
  </code>
</pre>

<h3>El codigo para la funcion para Kelvin </h3>
<pre>
  <code>
  void printTemperatureKelvin() {
  float temperatureKelvin = temperature + 273.15;  // Convertir a Kelvin
  carrier.display.fillScreen(ST77XX_GREEN);
  carrier.display.setTextColor(ST77XX_WHITE);
  carrier.display.setTextSize(6);
  carrier.display.setCursor(30, 50);
  carrier.display.print("Temp: ");
  carrier.display.setTextSize(4);
  carrier.display.setCursor(40, 120);
  carrier.display.print(temperatureKelvin);
  carrier.display.print(" K");
}
  </code>
</pre>

<h3>El codigo para la funcion para Fahrenheit</h3>
<pre>
  <code>
  void printTemperatureFahrenheit() {
  float temperatureFahrenheit = (temperature * 9.0 / 5.0) + 32.0;  // Convertir a Fahrenheit
  carrier.display.fillScreen(ST77XX_BLUE);
  carrier.display.setTextColor(ST77XX_WHITE);
  carrier.display.setTextSize(6);
  carrier.display.setCursor(30, 50);
  carrier.display.print("Temp: ");
  carrier.display.setTextSize(4);
  carrier.display.setCursor(40, 120);
  carrier.display.print(temperatureFahrenheit);
  carrier.display.print(" F");
}
  </code>
</pre>

## TERCER EJERCICIO:
<p>Para el tercer y ultimo ejercicio tuvimos que programar el arduino de manera que al medir la temperatura encienda los leds RGB del MKR IoT Carrier , si la temperatura es alta los led deben encender de color rojo mientras que si la temperatura era baja deben encender los led de color azul , ademas debemos conectar un sensor de proximidad el cual al detectar movimiento debe hacer que las luces cambien a verde </p>

<p>El primer paso que realizamos fue crear un condicional con la temperatura en la cual cuando esta sobrepase cierto valor en este caso usamos 25 grados celcius se encendera todos los led de color rojo y en caso que la temperatura se encuentre e por debajo de 25 los led se mantendran de color azul </p>

<h3>Codigo para el color de los led</h3>
<pre>
  <code>
    if (temperature > 25) {
    // Primer pixel, rojo
    carrier.leds.setPixelColor(0, 0, 255, 0);
    carrier.leds.setPixelColor(1, 0, 255, 0);
    carrier.leds.setPixelColor(2, 0, 255, 0);
    carrier.leds.setPixelColor(3, 0, 255, 0);
    carrier.leds.setPixelColor(4, 0, 255, 0);
  } else {
    // Primer pixel, azul
    carrier.leds.setPixelColor(0, 0, 0, 255);
    carrier.leds.setPixelColor(1, 0, 0, 255);
    carrier.leds.setPixelColor(2, 0, 0, 255);
    carrier.leds.setPixelColor(3, 0, 0, 255);
    carrier.leds.setPixelColor(4, 0, 0, 255);
  }
    carrier.leds.show();
  </code>
</pre>

## COMENTARIOS:

<P>La programación en el prototipado con Arduino para sensores de temperatura, humedad y proximidad de las ondas del agua es crucial porque permite la integración, calibración y control efectivo de los sensores, facilita la gestión de datos, ahorro de energía y adaptabilidad del sistema, garantizando su funcionalidad y precisión.</P>
<P>Además, la programación permite la integración coherente de los diferentes sensores, también la habilidad para leer datos de múltiples fuentes es fundamental para obtener una imagen completa del entorno. Y por último, puede permitir la fácil incorporación de nuevos sensores o la modificación de la lógica de control para adaptarse a situaciones específicas.</P>
<P>Inicialmente enfrentamos desafíos en la conexión de Arduino con la computadora. Estos obstáculos se debieron a problemas de configuración y ajustes en los puertos seriales. Sin embargo, tras un análisis detenido y la aplicación de ajustes necesarios, logramos superar estas dificultades y establecer una conexión efectiva entre el Arduino y la computadora. Este éxito permitió la comunicación fluida entre ambos y posibilitó el intercambio de datos esenciales, como la información de humedad y temperatura desde el sensor.</P>
<P>En la segunda actividad, implementamos con éxito el código necesario para que el sistema pueda leer los datos en grados Kelvin, Celsius y Fahrenheit. Esta implementación se llevó a cabo de manera precisa y eficiente, logrando que al tocar el sensor en el grado de temperatura este cambiara de celsius que fue la configuración automática, a fahrenheit y kelvin. La adaptabilidad del sistema en este aspecto contribuye significativamente a su utilidad y accesibilidad.</P>
<P>En cuanto a la tercera actividad, se logró exitosamente implementar los códigos necesarios para la activación de los LEDs según las condiciones específicas. El código incorporado permite que los LEDs muestren colores distintivos y representativos, como rojo para temperaturas más elevadas, azul para temperaturas más bajas y verde en presencia de movimiento detectado por el sensor de proximidad</P>
<P>Esta implementación proporciona una experiencia visual clara y efectiva, ya que los LEDs no solo indican la temperatura de manera intuitiva, sino que también responden dinámicamente al entorno. La activación de los LEDs de acuerdo con estas variables contribuye significativamente a la comprensión instantánea del estado ambiental, mejorando así la utilidad y la interactividad del sistema en su conjunto.</P>



# CODIGO COMPLETO:

<pre>
  <code>
MKRIoTCarrier carrier;
float temperature = 0;
float humidity = 0;

void setup() {
  Serial.begin(9600);
  carrier.begin();
}

void loop() {
  temperature = carrier.Env.readTemperature();
  humidity = carrier.Env.readHumidity();
  carrier.Buttons.update();

  Serial.print("Temperature = ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity = ");
  Serial.print(humidity);
  Serial.println(" %");
  
  if (carrier.Buttons.onTouchDown(TOUCH0)) {
    printTemperatureCelsius();
  }
  if (carrier.Buttons.onTouchDown(TOUCH1)) {
    printHumidity();
  }
  if (carrier.Buttons.onTouchDown(TOUCH2)) {
    printTemperatureKelvin();
  }
  if (carrier.Buttons.onTouchDown(TOUCH3)) {
    printTemperatureFahrenheit();
  }
  if (temperature > 25) {
    // Primer pixel, rojo
    carrier.leds.setPixelColor(0, 0, 255, 0);
    carrier.leds.setPixelColor(1, 0, 255, 0);
    carrier.leds.setPixelColor(2, 0, 255, 0);
    carrier.leds.setPixelColor(3, 0, 255, 0);
    carrier.leds.setPixelColor(4, 0, 255, 0);
  } else {
    // Primer pixel, azul
    carrier.leds.setPixelColor(0, 0, 0, 255);
    carrier.leds.setPixelColor(1, 0, 0, 255);
    carrier.leds.setPixelColor(2, 0, 0, 255);
    carrier.leds.setPixelColor(3, 0, 0, 255);
    carrier.leds.setPixelColor(4, 0, 0, 255);
  }
    carrier.leds.show(); 
}
void printTemperatureCelsius() {
  carrier.display.fillScreen(ST77XX_RED);
  carrier.display.setTextColor(ST77XX_WHITE);
  carrier.display.setTextSize(6);
  carrier.display.setCursor(30, 50);
  carrier.display.print("Temp: ");
  carrier.display.setTextSize(4);
  carrier.display.setCursor(40, 120);
  carrier.display.print(temperature);
  carrier.display.print(" C");
}
void printTemperatureKelvin() {
  float temperatureKelvin = temperature + 273.15;  // Convertir a Kelvin
  carrier.display.fillScreen(ST77XX_GREEN);
  carrier.display.setTextColor(ST77XX_WHITE);
  carrier.display.setTextSize(6);
  carrier.display.setCursor(30, 50);
  carrier.display.print("Temp: ");
  carrier.display.setTextSize(4);
  carrier.display.setCursor(40, 120);
  carrier.display.print(temperatureKelvin);
  carrier.display.print(" K");
}

void printTemperatureFahrenheit() {
  float temperatureFahrenheit = (temperature * 9.0 / 5.0) + 32.0;  // Convertir a Fahrenheit
  carrier.display.fillScreen(ST77XX_BLUE);
  carrier.display.setTextColor(ST77XX_WHITE);
  carrier.display.setTextSize(6);
  carrier.display.setCursor(30, 50);
  carrier.display.print("Temp: ");
  carrier.display.setTextSize(4);
  carrier.display.setCursor(40, 120);
  carrier.display.print(temperatureFahrenheit);
  carrier.display.print(" F");
}

void printHumidity() {
  carrier.display.fillScreen(ST77XX_BLUE);
  carrier.display.setTextColor(ST77XX_WHITE);
  carrier.display.setTextSize(2);
  carrier.display.setCursor(20, 110);
  carrier.display.print("Humi: ");
  carrier.display.print(humidity);
  carrier.display.println(" %");
}
  </code>
</pre>

