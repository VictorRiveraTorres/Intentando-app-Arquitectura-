import * as React from 'react';
import { View, Text } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center',marginBottom:600 }}>
    Resiliencia climática hacia un futuro sostenible
  </Text>
</View>

    );
}