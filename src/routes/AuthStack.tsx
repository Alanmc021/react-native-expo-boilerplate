import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SignInScreen } from '../pages/SignInScreen/SignInScreen';
import { SignInScreen } from '../pages/authentication/SignInScreen'
import { useTheme } from 'styled-components';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.onBackground,
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
