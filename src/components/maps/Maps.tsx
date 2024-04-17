import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

export function Maps() {
  const latitude: number = -23.5505; // Latitude da rua
  const longitude: number = -46.6333; // Longitude da rua
  const delta: number = 0.01; // Valor do zoom, você pode ajustar conforme necessário
  const initialRegion: Region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: delta,
    longitudeDelta: delta,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
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
    height: '50%',
  },
});
