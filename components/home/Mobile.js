import React from 'react';
import { Flex, Link, Image, Box, SimpleGrid, Heading, Button } from '@chakra-ui/core';
import { FaRegHandshake } from 'react-icons/fa';

export default function Mobile() {
  return (
    <Box>
      <Flex p="30px" justify="center">
        <Image src={require('../../images/apple.png')}></Image>
        <Image src={require('../../images/google.png')}></Image>
      </Flex>
      <SimpleGrid columns={2}>
        <Box
          className="coffe"
          height="400px"
          bgRepeat="no-repeat"
          bgImage="url('/images/coffe.jpg')"
          bg="blue.500"
        ></Box>
        <Box color="white" bg="gray.700">
          <Flex justify="center">
            <FaRegHandshake fontSize="120px"></FaRegHandshake>
          </Flex>
          <Heading m="10px" size="xl">
            Boulangers, restaurateurs !
          </Heading>
          <Heading size="xl">Rejoignez Dood, première plateforme </Heading>
          <Heading size="xl">de click&collect. </Heading>
          <Button m="20px" size="lg" borderRadius="5px" color="black">
            Join
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
