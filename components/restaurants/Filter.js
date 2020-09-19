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
  Select,
} from '@chakra-ui/core';
import { FaFilter, FaEuroSign } from 'react-icons/fa';

export default function Filter({ setFilter, filter }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleCheck = (e) => {
    console.log(e.target);
    e.persist();
    // console.log(e.target.value);
    setFilter((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
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
            <Heading size="lg">City</Heading>
            <Select
              mt="4"
              mb="4"
              name="state"
              placeholder="Select option"
              defaultValue={filter.state}
              onChange={handleCheck}
            >
              <option value="Paris">Paris</option>
              <option value="Marseille">Marseille</option>
              <option value="Lyon">Lyon</option>
              <option value="Toulouse">Toulouse</option>
              <option value="Nice">Nice</option>
              <option value="Nantes">Nantes</option>
              <option value="Strasbourg">Strasbourg</option>
              <option value="Montpellier">Montpellier</option>
              <option value="Bordeaux">Bordeaux</option>
              <option value="Lille">Lille</option>
            </Select>
            <Heading size="lg">Distance</Heading>
            <Flex justifyContent="space-between">
              <Flex direction="column">
                <Text fontSize="xl">- de 0.5 km</Text>

                <Text fontSize="xl">- de 1.0 km</Text>

                <Text fontSize="xl">- de 1.5 km</Text>

                <Text fontSize="xl">- de 2.0 km</Text>

                <Text fontSize="xl">- de 3.0 km</Text>
              </Flex>
              <RadioGroup name="distance" onChange={handleCheck} defaultValue={filter.distance}>
                <Radio size="lg" value="0.5"></Radio>
                <Radio size="lg" value="2000"></Radio>
                <Radio size="lg" value="3000"></Radio>
                <Radio size="lg" value="4000"></Radio>
                <Radio size="lg" value="5000"></Radio>
              </RadioGroup>
            </Flex>
            <Heading size="lg" mt="10px">
              Prix
            </Heading>
            <Flex justifyContent="space-between">
              <Flex direction="column">
                <Box display="flex" mt="10px" mb="5px">
                  <FaEuroSign></FaEuroSign>
                </Box>
                <Box display="flex" mt="10px" mb="5px">
                  <FaEuroSign></FaEuroSign>
                  <FaEuroSign></FaEuroSign>
                </Box>
                <Box display="flex" mt="10px" mb="5px">
                  <FaEuroSign></FaEuroSign>
                  <FaEuroSign></FaEuroSign>
                  <FaEuroSign></FaEuroSign>
                </Box>
              </Flex>
              <RadioGroup name="prix" onChange={handleCheck} defaultValue={filter.prix}>
                <Radio size="lg" value="1"></Radio>
                <Radio size="lg" value="2"></Radio>
                <Radio size="lg" value="3"></Radio>
              </RadioGroup>
            </Flex>

            <Heading size="lg" mt="10px">
              Paiement
            </Heading>
            <Flex justifyContent="space-between">
              <Flex direction="column">
                <Text fontSize="xl">Sur place</Text>

                <Text fontSize="xl">Carte TR Edenred</Text>
              </Flex>
              <RadioGroup name="paiement" onChange={handleCheck} defaultValue={filter.paiement}>
                <Radio size="lg" value="Sur Place"></Radio>
                <Radio size="lg" value="Carte TR Edenred"></Radio>
              </RadioGroup>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
