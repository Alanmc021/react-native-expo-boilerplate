import React from 'react';
import {View, Text} from 'react-native';
import {MyButton} from '../../components/button/MyButton';
import {useAuth} from '../../contexts/Auth';
// import {styles} from './styles';

export function SettingScreen() {
  const {signOut} = useAuth();

  return (
    <View style={{}}>
      <Text style={{}}>Configurações</Text>
      <MyButton
        style={{backgroundColor: 'red'}}
        onPress={signOut}
        title="Sair do App"
      />
    </View>
  );
}
