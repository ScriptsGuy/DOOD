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
} from '@chakra-ui/core';
import { connect } from 'react-redux';
import { addPlate, addFormule, removePlate } from '../redux/actions/cartAction';

function ModalFormule({ removePlate, addPlate, addFormule, formule, post }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    console.log(dishes);
    setFormuleState((prevState) => ({
      ...prevState,
      formuleName: formule.name,
      description: formule.description,
      price: formule.price,
      unit_price: formule.price,
      plates: [...Object.values(dishes)],
    }));
  }, [dishes]);
  console.log(formuleState);

  const handleFormuleChange = (e, formule) => {
    e.persist();
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(formule);
    setDishes((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

    //// getting the info from the formule instaed of plates so we good to go

    /// we need to form array from the radio button value

    // let list;
    // if (e.target.checked) {
    //   list = formuleState.plates;
    //   setFormuleState((prevState) => ({
    //     ...prevState,
    //     formuleName: plate.name,
    //     description: plate.description,
    //     price: plate.price,
    //     unit_price: plate.price,
    //     plates: [...list, e.target.value],
    //   }));
    // } else {
    //   list = formuleState.plates.filter((value) => value !== e.target.value);
    //   setFormuleState((prevState) => ({
    //     ...prevState,
    //     formuleName: plate.name,
    //     description: plate.description,
    //     price: plate.unit_price,
    //     unit_price: plate.unit_price,
    //     plates: [...list],
    //   }));
    // }
  };
  console.log(dishes);

  const handleFormuleSubmit = async (formule, post) => {
    await addFormule(formule, post);
  };

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

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlate: (plate, post) => dispatch(addPlate(plate, post)),
    addFormule: (formule, post) => dispatch(addFormule(formule, post)),
    removePlate: (plate) => dispatch(removePlate(plate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalFormule);
