import * as React from 'react';
import { View, Text } from 'react-native';
import FetchData from '../../src/index';
export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1,  justifyContent: 'center' }}>
            <FetchData/>

        
        </View>
    );
}