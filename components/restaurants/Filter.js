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
  RadioGroup,
} from '@chakra-ui/core';
import { FaFilter, FaEuroSign } from 'react-icons/fa';

export default function Filter({ setFilter, filter }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleCheck = (e) => {
    e.persist();
    // console.log(e.target.value);
    setFilter((prevState) => ({ ...prevState, distance: e.target.value }));
  };

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
            <Flex justifyContent="space-between">
              <Flex direction="column">
                <Text fontSize="xl">- de 0.5 km</Text>

                <Text fontSize="xl">- de 1.0 km</Text>

                <Text fontSize="xl">- de 1.5 km</Text>

                <Text fontSize="xl">- de 2.0 km</Text>

                <Text fontSize="xl">- de 3.0 km</Text>
              </Flex>
              <RadioGroup onChange={handleCheck} defaultValue={filter.distance}>
                <Radio size="lg" name="hdsqj" value="0.5"></Radio>
                <Radio size="lg" name="distance" value="2000"></Radio>
                <Radio size="lg" name="distance" value="3000"></Radio>
                <Radio size="lg" name="distance" value="4000"></Radio>
                <Radio size="lg" name="distance" value="5000"></Radio>
              </RadioGroup>
            </Flex>
            {/* <Heading mt="20px">Prix</Heading>
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
            </Flex> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
