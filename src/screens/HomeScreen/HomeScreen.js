import React from 'react';
import {ScrollView, Text, Box, Center, Button, VStack} from 'native-base';
import {ImageBackground} from 'react-native';

import bgImage from '../../../assets/images/HeaderHome.png';

import ButtonTengah from '../../components/Authentification/index';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const Navigation = useNavigation();

  const onBookListPressed = () => {
    Navigation.navigate('SignUp');
  };
  const onFavoriteBookPressed = () => {
    Navigation.navigate('SignUp');
  };
  const onBookCategoryPressed = () => {
    Navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={bgImage}
      style={{
        flex: 1,
        width: '100%',
        height: '30%',
        alignItems: 'center',
      }}>
      <Box my="15%">
        <Center>
          <Text fontFamily="Poppins-Bold" fontSize={18} color="white">
            Welcome To Ribooks
          </Text>
          <Text fontFamily="Poppins-Medium" fontSize={16} color="white">
            Kumpulan Buku Thifted Berkualitas!
          </Text>
        </Center>
      </Box>
      <Box
        bg={'white'}
        width="84%"
        height="12%"
        rounded={15}
        shadow="9"
        display="flex"
        flexDirection="row"
        justifyContent="space-between">
        <Button
          onPress={onBookListPressed}
          bg={'black'}
          p="2"
          my="2"
          borderRadius="md"
          width="32%"
          height="80%">
          <VStack alignItems="center">
            <Box alignItems="center">
              <Ionicons
                name="person"
                size={40}
                color="#00ADB5"
                style={{marginRight: 10}}
              />
              <Text
                fontFamily="Poppins-Light"
                fontSize={13}
                color="#ffffff"
                mt={1}>
                Book List
              </Text>
            </Box>
          </VStack>
        </Button>
        <Button
          onPress={onBookListPressed}
          bg={'black'}
          p="2"
          my="2"
          borderRadius="md"
          width="32%"
          height="80%">
          <VStack>
            <Box>
              <Center>
                <Ionicons
                  name="person"
                  size={30}
                  color="#00ADB5"
                  style={{marginRight: 10}}
                />
                <Text
                  fontFamily="Poppins-Light"
                  fontSize={13}
                  color="#ffffff"
                  mt={1}>
                  Favorite Book
                </Text>
              </Center>
            </Box>
          </VStack>
        </Button>
        <Button
          onPress={onBookListPressed}
          bg={'black'}
          p="2"
          my="2"
          borderRadius="md"
          width="32%"
          height="80%">
          <VStack>
            <Box>
              <Center>
                <Ionicons
                  name="person"
                  size={30}
                  color="#00ADB5"
                  style={{marginRight: 10}}
                />
                <Text
                  fontFamily="Poppins-Light"
                  fontSize={13}
                  color="#ffffff"
                  mt={1}>
                  Book Category
                </Text>
              </Center>
            </Box>
          </VStack>
        </Button>
      </Box>
    </ImageBackground>
  );
};

export default HomeScreen;
