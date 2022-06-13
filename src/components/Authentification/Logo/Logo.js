import React from 'react';
import {Box, Center, Image, Text} from 'native-base';

const Logo = ({titlePage}) => {
  return (
    <Center marginTop={20}>
      <Image
        source={require('../../../../assets/images/Logo.png')}
        width={113}
        height={113}
        alt="logo"
      />
      <Text fontSize={32} color="#fff">
        Ribooks
      </Text>
      <Text fontSize={20} color="#fff">
        The Thrift Of Books
      </Text>
      <Text fontSize={14} marginTop={3} marginBottom={7} color="#fff">
        {titlePage}
      </Text>
    </Center>
  );
};

export default Logo;
