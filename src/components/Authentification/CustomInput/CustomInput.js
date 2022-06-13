import {View, Text} from 'react-native';
import {Stack, Input, Icon} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomInput = ({customInput, nameIcon, placeholder}) => {
  const [show, setShow] = React.useState(false);
  return (
    <Stack space={4} w="100%" alignItems="center" marginY={1}>
      {customInput ? (
        <Input
          bgColor="#fff"
          fontSize={16}
          w={{
            base: '80%',
            md: '25%',
          }}
          InputLeftElement={
            <Icon
              as={<Ionicons name={nameIcon} />}
              size={5}
              ml="2"
              color="black"
            />
          }
          placeholder={placeholder}
        />
      ) : (
        <Input
          bgColor="#fff"
          fontSize={16}
          w={{
            base: '80%',
            md: '25%',
          }}
          InputLeftElement={
            <Icon
              as={<Ionicons name={nameIcon} />}
              size={5}
              ml="2"
              color="black"
            />
          }
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Icon
              as={<Ionicons name={show ? 'eye' : 'eye-off'} />}
              size={5}
              mr="2"
              color="black"
              onPress={() => setShow(!show)}
            />
          }
          placeholder={placeholder}
        />
      )}
    </Stack>
  );
};

export default CustomInput;
