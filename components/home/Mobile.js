import React from 'react';
import { Flex, Link, Image } from '@chakra-ui/core';

export default function Mobile() {
  return (
    <Flex justify="center">
      <Link>
        <Image src={require('../../public/images/apple.png')}></Image>
      </Link>
      <Link>
        <Image src="../../public/images/google.png"></Image>
      </Link>
    </Flex>
  );
}
