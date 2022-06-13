import {Button, Center, HStack, Text} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomButton = ({
  onPressButton,
  onPressText,
  variant,
  width,
  textButton,
  text1,
  text2,
  customButton,
}) => {
  return (
    <Center>
      {customButton ? (
        <Button
          bgColor="#fff"
          rounded={25}
          onPress={onPressButton}
          variant={variant}
          width={width}>
          <Text fontSize={16} fontWeight="bold">
            {textButton}
          </Text>
        </Button>
      ) : (
        <HStack alignItems="center">
          <Text color="#fff" fontSize={14}>
            {text1}
          </Text>
          <Text
            color="#fff"
            fontSize={15}
            fontWeight="bold"
            onPress={onPressText}>
            {text2}
          </Text>
        </HStack>
      )}
    </Center>
  );
};

export default CustomButton;
