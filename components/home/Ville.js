import React from 'react';
import { Stack, Tag, TagLabel, Flex, SimpleGrid } from '@chakra-ui/core';

export default function Ville() {
  return (
    <Flex direction={['column', 'column', 'row', 'row']} justifyContent="center" align="center">
      <Tag p="3" m="10px" size="lg" rounded="full" variant="solid" variantColor="gray">
        <TagLabel fontSize="30px">Lyon</TagLabel>
      </Tag>

      <Tag p="3" m="10px" size="lg" rounded="full" variant="solid" variantColor="gray">
        <TagLabel fontSize="30px">Lille</TagLabel>
      </Tag>

      <Tag p="3" m="10px" size="lg" rounded="full" variant="solid" variantColor="gray">
        <TagLabel fontSize="30px">Grenoble</TagLabel>
      </Tag>

      <Tag p="3" m="10px" size="lg" rounded="full" variant="solid" variantColor="gray">
        <TagLabel fontSize="30px">Saint-Etient</TagLabel>
      </Tag>

      <Tag p="3" m="10px" size="lg" rounded="full" variant="solid" variantColor="gray">
        <TagLabel fontSize="30px">Paris</TagLabel>
      </Tag>
    </Flex>
  );
}
