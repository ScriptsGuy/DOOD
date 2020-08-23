import React from 'react';
import { Box, Heading, Icon, Input, Flex, InputGroup, InputRightElement } from '@chakra-ui/core';

export default function Hero() {
  return (
    <Box
      className="hero"
      color="white"
      bg="gray.100"
      bgImage="url('/images/main.jpg')"
      bgRepeat="no-repeat"
      height={[
        '300px', // base
        '450px', // 480px upwards
        '450px', // 768px upwards
        '500px', // 992px upwards
      ]}
      width="100%"
    >
      <Flex
        p={[
          '50px', // base
          '80px', // 480px upwards
          '100px', // 768px upwards
          '150px', // 992px upwards
        ]}
        align="left"
        direction="column"
      >
        <Heading
          fontSize={[
            '40px', // base
            '60px', // 480px upwards
            '70px', // 768px upwards
            '80px', // 992px upw
          ]}
        >
          COMMANDEZ.{' '}
        </Heading>
        <Heading
          fontSize={[
            '40px', // base
            '60px', // 480px upwards
            '70px', // 768px upwards
            '80px', // 992px upwards
          ]}
        >
          RETIRE SANS ATTENDRE.{' '}
        </Heading>

        {/* <InputGroup
          size="lg"
          color="black"
          width={[
            '100%', // base
            '70%', // 480px upwards
            '70%', // 768px upwards
            '50%', // 992px upwards
          ]}
        >
          <Input size="lg" placeholder="Saisissez une adresse ou le nom d’un restaurant" />

        </InputGroup> */}
      </Flex>
    </Box>
  );
}
