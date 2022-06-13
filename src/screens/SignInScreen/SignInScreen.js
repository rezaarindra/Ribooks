import {Box, ScrollView, Text} from 'native-base';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  CustomButton,
  CustomInput,
  Logo,
} from '../../components/Authentification/index';

const SignInScreen = () => {
  const Navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    Navigation.navigate('Home');
  };
  const forgotPassword = () => {
    console.warn('Forgot Password');
  };
  const SignUp = () => {
    Navigation.navigate('SignUp');
  };

  return (
    <ScrollView bgColor="#00ADB5">
      <Logo titlePage="Login Form" />
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
        onPressButton={Login}
        variant="solid"
        width="50%"
        textButton="Login"
      />

      <Text
        textAlign="center"
        color="white"
        onPress={forgotPassword}
        marginY={3}
        fontStyle="italic"
        fontSize={14}>
        Forgot Password
      </Text>

      <CustomButton
        customButton={false}
        onPressText={SignUp}
        variant="solid"
        width="50%"
        text1="You Dont Have Account ?"
        text2=" Sign Up Here"
      />
    </ScrollView>
  );
};

export default SignInScreen;
