import React, { useContext, useState } from 'react';
import { Image, Switch } from 'react-native';
import { MyButton } from '../../components/button/MyButton';
import { MyTextInput } from '../../components/textInput/MyTextInput';
import { useAuth } from '../../contexts/Auth';
//import logo from '../../assets/logo.png';
import { Container } from './styles';
import { ThemeContext, ThemeType } from '../../theme/Theme';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const { toggleTheme, theme } = useContext(ThemeContext);

  const darkModeIsEnabled = theme === ThemeType.dark;

  return (
    <Container>
      <Switch value={darkModeIsEnabled} onValueChange={toggleTheme} />
      {/* <Image
        resizeMode="contain"
        source={logo}
        style={{width: 200, height: 200}}
      /> */}
      <MyTextInput
        placeholder="e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <MyButton onPress={() => signIn(email, password)} title="Entrar no App" />
    </Container>
  );
}
