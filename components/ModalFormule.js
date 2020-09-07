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
  Radio,
  RadioGroup,
  Divider,
  useToast,
} from '@chakra-ui/core';
import { connect } from 'react-redux';
import { addPlate, addFormule, removePlate, removeFormule } from '../redux/actions/cartAction';

function ModalFormule({ removeFormule, addFormule, formule, post, cart }) {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = React.useState({});

  const [formuleState, setFormuleState] = React.useState({
    formuleName: '',
    description: '',
    price: '',
    unit_price: '',
    qnt: 1,
    plates: [],
  });
  const [dishes, setDishes] = React.useState({});
  React.useEffect(() => {
    console.log(Object.values(dishes));
    console.log(formuleState);
    post.formules.map((formule) => {
      setSelected((prevState) => ({ ...prevState, [formule.name]: false }));
    });

    cart.formules.map((formule) => {
      setSelected((prevState) => ({ ...prevState, [formule.formuleName]: true }));
    });
    setFormuleState((prevState) => ({
      ...prevState,
      formuleName: formule.name,
      description: formule.description,
      price: formule.price,
      unit_price: formule.price,
      plates: [...Object.values(dishes)],
    }));
    // console.log('rernderddddddd');
    // console.log(selected);
  }, [dishes]);

  const handleFormuleChange = (e, formule) => {
    e.persist();
    setDishes((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleFormuleSubmit = async (formule, post) => {
    await addFormule(formule, post);
    toast({
      title: 'formule ajoutée',
      description: 'allez dans votre panier pour terminer la commande',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
    setSelected((prev) => ({ ...prev, [formule.formuleName]: true }));
    setDishes({});
  };

  console.log(formule.formule_categories.length);
  console.log(Object.values(dishes).length);

  return (
    <Box
      onClick={() => {
        if (selected[formule.name]) {
          removeFormule(formuleState);
          toast({
            title: 'Formule supprimée ',
            description: 'la formule a été supprimée de votre panier',
            status: 'warning',
            duration: 2000,
            isClosable: true,
          });
          setSelected((prev) => ({ ...prev, [formuleState.formuleName]: false }));
        } else {
          onOpen();
        }
      }}
      // onClick={() =>
      //   handleSelect(plato.name, selected[plato.name], plato.unit_price, 1, plato.description)
      // }
      color={selected[formule.name] ? 'white' : 'gray.600'}
      bg={selected[formule.name] ? 'gray.700' : 'white'}
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
          <ModalCloseButton
            onClick={() => {
              setDishes({});
              onClose();
            }}
          />
          <ModalBody>
            <Stack>
              {formule.formule_categories.map((cat, i) => (
                <>
                  <Heading color="gray.600" mb="2" mt="2" size="lg">
                    {cat.name}
                  </Heading>
                  <RadioGroup
                    bg="gray.50"
                    p="15px"
                    name={i}
                    onChange={(e) => handleFormuleChange(e, formule)}
                  >
                    {cat.plats.map((plate) => (
                      <Radio
                        // isChecked={formuleState.plates.includes(plato.name)}
                        size="lg"
                        name={plate.name}
                        value={plate.name}
                      >
                        {plate.name}
                      </Radio>
                    ))}
                  </RadioGroup>
                  <Divider></Divider>
                </>
              ))}
            </Stack>
            {/* {JSON.stringify(formuleState)} */}
          </ModalBody>

          <ModalFooter>
            <Button
              isDisabled={formule.formule_categories.length !== Object.values(dishes).length}
              variantColor="blue"
              mr={3}
              onClick={() => {
                handleFormuleSubmit(formuleState, post);
                onClose();
              }}
            >
              ajouter une formule
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

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlate: (plate, post) => dispatch(addPlate(plate, post)),
    addFormule: (formule, post) => dispatch(addFormule(formule, post)),
    removeFormule: (formule) => dispatch(removeFormule(formule)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalFormule);
