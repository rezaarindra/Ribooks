import React, {useState} from 'react';
import {ScrollView, Box} from 'native-base';
import {
  Logo,
  CustomInput,
  CustomButton,
} from '../../components/Authentification';

import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const Navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Register = () => {
    console.warn('Registered');
  };
  const SignIn = () => {
    Navigation.navigate('SignIn');
  };

  return (
    <ScrollView bgColor="#00ADB5">
      <Logo titlePage="Register Form" />
      <CustomInput
        customInput={true}
        nameIcon="mail"
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        customInput={true}
        nameIcon="person"
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        customInput={false}
        nameIcon="lock-closed"
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      <Box marginTop={55}></Box>
      <CustomButton
        customButton={true}
        onPressButton={Register}
        variant="solid"
        width="50%"
        textButton="Register"
      />
      <Box marginTop={3}></Box>
      <CustomButton
        customButton={false}
        onPressText={SignIn}
        variant="solid"
        width="50%"
        text1="You Dont Have Account ?"
        text2=" Sign In Here"
      />
    </ScrollView>
  );
};

export default SignUpScreen;
