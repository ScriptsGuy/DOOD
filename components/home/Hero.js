import React from 'react';
import { Box, Heading, Icon, Input, Flex, InputGroup, InputRightElement } from '@chakra-ui/core';

export default function Hero() {
  return (
    <Box
      className="hero"
      color="white"
      bg="gray.100"
      bgImage="url('/images/main.jpg')"
      bgPos="center"
      bgRepeat="no-repeat"
      height="500px"
    >
      <Flex p="150px" align="left" direction="column">
        <Heading fontSize="80px" size="2xl">
          COMMANDEZ.{' '}
        </Heading>
        <Heading fontSize="80px" size="2xl">
          RETIRE SANS ATTENDRE.{' '}
        </Heading>

        <InputGroup size="lg" color="black" width="50%">
          <Input size="lg" placeholder="Saisissez une adresse ou le nom d’un restaurant" />
          <InputRightElement children={<Icon name="search-2" color="gray.500" />} />
        </InputGroup>
      </Flex>
    </Box>
  );
}
