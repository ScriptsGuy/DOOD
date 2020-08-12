import React from 'react';
import { Box, Heading, Input, Flex } from '@chakra-ui/core';

export default function Hero() {
  return (
    <Box
      color="white"
      bgImage="url('/images/hero.jpg')"
      bgPos="center"
      bgRepeat="no-repeat"
      height="600px"
    >
      <Flex p="150px" align="left" direction="column">
        <Heading fontSize="80px" size="2xl">
          COMMANDEZ.{' '}
        </Heading>
        <Heading fontSize="80px" size="2xl">
          RETIRE SANS ATTENDRE.{' '}
        </Heading>
        <Input
          color="black"
          width="50%"
          placeholder="Saisissez une adresse ou le nom d’un restaurant"
        ></Input>
      </Flex>
    </Box>
  );
}
