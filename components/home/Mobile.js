import React from 'react';
import { Flex, Link, Image, Box, SimpleGrid, Heading, Button } from '@chakra-ui/core';
import { FaRegHandshake } from 'react-icons/fa';

export default function Mobile() {
  return (
    <Box overflow="hidden" maxH={['600px', '']}>
      <SimpleGrid columns={['1', '2', '2', '2']}>
        <Box mt="100px">
          <Heading p="20px" size="xl" color="gray.500">
            COMMANDEZ AUSSI AVEC L’APPLI MOBILE.
          </Heading>
          <Flex justify="center">
            <Image src="./images/apple.png"></Image>
            <Image src="./images/google.png"></Image>
          </Flex>
        </Box>
        <Box p="30px">
          <Image src="./images/phone.png"></Image>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
