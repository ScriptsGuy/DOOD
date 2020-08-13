import React from 'react';
import { Box, Flex, Heading, InputGroup, InputRightElement, Input, Icon } from '@chakra-ui/core';

export default function Footer() {
  return (
    <Box color="gray.500" bg="gray.200">
      <Flex justifyContent="space-between">
        <Box alignContent="center" textAlign="center" p="30px" flexGrow="2">
          <Heading size="lg">Feel Dood</Heading>
          <Heading size="sm">Recevez les bons plans et restez informé(e) des nouveautés</Heading>
          <Flex justifyContent="center" align="center">
            <InputGroup mt="20px" size="lg" color="black" width="50%">
              <Input size="lg" placeholder="Adresse email" />
              <InputRightElement children={<Icon name="search-2" color="gray.500" />} />
            </InputGroup>
          </Flex>
        </Box>
        <Box p="30px" flexGrow="1">
          section2
        </Box>
        <Box flexGrow="1">section3</Box>
        <Box flexGrow="1">section4</Box>
        <Box flexGrow="1">section5</Box>
      </Flex>
      <Box bg="white" p="10px">
        social links
      </Box>
    </Box>
  );
}
