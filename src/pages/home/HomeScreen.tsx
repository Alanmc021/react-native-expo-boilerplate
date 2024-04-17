import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MyButton } from '../../components/button/MyButton';
import { Maps } from '../../components/maps/Maps';
import { styles } from './styles'

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Maps />
      <MyButton
        title="Ir para Configurações"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

