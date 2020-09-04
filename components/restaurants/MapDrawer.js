import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/core';
export default function MapDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <>
      <Button rounded="20px" bg="gray.700" color="white" onClick={onOpen} ref={btnRef}>
        Afficher l’itinéraire
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton></DrawerCloseButton>
          <DrawerHeader>{` drawer contents`}</DrawerHeader>
          <DrawerBody>body here</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
