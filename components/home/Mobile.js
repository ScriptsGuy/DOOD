import React from 'react';
import { Flex, Link, Image, Box, SimpleGrid } from '@chakra-ui/core';

export default function Mobile() {
  return (
    <Box>
      <Flex p="10px" justify="center">
        <Image src={require('../../images/apple.png')}></Image>
        <Image src={require('../../images/google.png')}></Image>
      </Flex>
      <SimpleGrid columns={2}>
        <Box bg="blue.500">dsfsdfsd</Box>
        <Box bg="red.500">sdfsdfs</Box>
      </SimpleGrid>
    </Box>
  );
}
