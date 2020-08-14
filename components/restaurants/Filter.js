import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Tag,
  TagLabel,
  Flex,
  List,
  ListItem,
  Heading,
  Radio,
  Text,
} from '@chakra-ui/core';
import { FaFilter, FaEuroSign } from 'react-icons/fa';

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      {/* <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
        CONNEXION
      </Button> */}
      <Tag
        ref={btnRef}
        onClick={onOpen}
        p="3"
        m="10px"
        size="lg"
        rounded="full"
        variant="solid"
        color="gray.500"
        bg="gray.100"
      >
        <TagLabel fontSize="24px">
          <FaFilter></FaFilter>
        </TagLabel>
      </Tag>
      <Drawer size="sm" isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>

          <DrawerBody color="gray.500">
            <Heading>Distance</Heading>
            <Flex direction="column">
              <Flex justifyContent="space-between">
                <Text fontSize="xl">- de 0,5 km</Text>
                <Radio></Radio>
              </Flex>
              <Flex justifyContent="space-between">
                <Text fontSize="xl">- de 0,5 km</Text>
                <Radio></Radio>
              </Flex>
              <Flex justifyContent="space-between">
                <Text fontSize="xl">- de 0,5 km</Text>
                <Radio></Radio>
              </Flex>
              <Flex justifyContent="space-between">
                <Text fontSize="xl">- de 0,5 km</Text>
                <Radio></Radio>
              </Flex>
              <Flex justifyContent="space-between">
                <Text fontSize="xl">- de 0,5 km</Text>
                <Radio></Radio>
              </Flex>
            </Flex>
            <Heading mt="20px">Prix</Heading>
            <Flex direction="column">
              <Flex justifyContent="space-between">
                <FaEuroSign></FaEuroSign> <Radio></Radio>
              </Flex>
              <Flex justifyContent="space-between">
                <Box mt="15px" mb="15px" display="flex">
                  <FaEuroSign></FaEuroSign>
                  <FaEuroSign></FaEuroSign>
                </Box>
                <Radio></Radio>
              </Flex>
              <Flex justifyContent="space-between">
                <Box display="flex">
                  <FaEuroSign></FaEuroSign>
                  <FaEuroSign></FaEuroSign>
                  <FaEuroSign></FaEuroSign>
                </Box>
                <Radio></Radio>
              </Flex>
            </Flex>
            <Heading mt="20px">Paiement</Heading>
            <Flex direction="column">
              <Flex justifyContent="space-between">
                <Text fontSize="xl">Sur place</Text>
                <Radio></Radio>
              </Flex>
              <Flex justifyContent="space-between">
                <Text fontSize="xl">Carte TR Edenred</Text>
                <Radio></Radio>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
