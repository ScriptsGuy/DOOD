import React from 'react';
import { Flex, Link, Image, Box, SimpleGrid, Heading, Button } from '@chakra-ui/core';
import { FaRegHandshake } from 'react-icons/fa';

export default function Mobile() {
  return (
    <Box overflow="hidden" maxH={['800px', '400px']}>
      <SimpleGrid columns={['1', '2', '2', '2']}>
        <Box mt="100px">
          <Heading p="20px" size="xl" color="gray.500">
            COMMANDEZ AUSSI AVEC L’APPLI MOBILE.
          </Heading>
          <Flex
            m="0 auto"
            w={['40%', '40%', '100%', '100%']}
            direction={['column', 'column', 'row', 'row']}
            justify="center"
          >
            <Image m="4" src="./images/apple.png" alt="apple"></Image>
            <Image m="4" src="./images/google.png" alt="google"></Image>
            <Image m="4" src="./images/huawei.png" alt="huawei"></Image>
          </Flex>
        </Box>
        <Box p="30px">
          <Image src="./images/phone.png" alt="mobile app"></Image>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
