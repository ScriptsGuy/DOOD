import React from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/core';

export default function ModalFormule({ formule }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formuleState, setFormuleState] = React.useState({
    formuleName: '',
    description: '',
    price: '',
    unit_price: '',
    qnt: 1,
    plates: [],
  });

  return (
    <Box
      onClick={onOpen}
      // onClick={() =>
      //   handleSelect(plato.name, selected[plato.name], plato.unit_price, 1, plato.description)
      // }
      // color={selected[plato.name] ? 'white' : 'gray.600'}
      // bg={selected[plato.name] ? 'gray.700' : 'white'}
      borderWidth="1px"
      rounded="lg"
      p="6"
    >
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt="8" color="gray.500">
            {formule.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              {formule.formule_categories.map((cat) => (
                <>
                  <Heading mb="2" mt="2" size="xl">
                    {cat.name}
                  </Heading>
                  <CheckboxGroup>
                    {cat.plats.map((plate) => (
                      <Checkbox
                        // isChecked={formuleState.plates.includes(plato.name)}
                        //   onChange={(e) => handleFormuleChange(e, plate)}
                        name={plate.name}
                        value={plate.name}
                      >
                        {plate.name}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                </>
              ))}
            </Stack>
            {/* {JSON.stringify(formuleState)} */}
          </ModalBody>

          <ModalFooter>
            <Button
              //   isDisabled={formuleState.plates[0] === undefined}
              variantColor="blue"
              mr={3}
              //   onClick={() => {
              //     handleFormuleSubmit(formuleState, post);
              //     onClose();
              //   }}
            >
              Add Formule
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Heading> {formule.name} </Heading>
      <Text fontSize="2xl">{formule.description}</Text>
      <Heading size="lg">{formule.price} €</Heading>
    </Box>
  );
}
