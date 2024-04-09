import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { MyButton } from '../components/MyButton';
// import { styles } from './styles';
import ReduxTeste from '../components/reduxTeste';
import MapView, { Marker } from 'react-native-maps';

export function HomeScreen() {
  const navigation = useNavigation();
  // Coordenadas da rua desejada
  const latitude = -23.5505; // Latitude da rua
  const longitude = -46.6333; // Longitude da rua
  const delta = 0.01; // Valor do zoom, você pode ajustar conforme necessário

  return (
    // <View style={styles.container}>
    //   {/* <Text style={styles.title}>
    //     Essa tela só pode ser vista por usuários autenticados
    //   </Text>
    //   <ReduxTeste/>
    //   <MyButton
    //     title="Ir para Configurações"
    //     onPress={() => navigation.navigate('Settings')}
    //   /> */}
    //   <MapView style={{}} />
    //   <Text>
    //     by <Text style={styles.coffText}>Alan Martins</Text>
    //   </Text>
    // </View>
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: delta,
          longitudeDelta: delta,
        }}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
