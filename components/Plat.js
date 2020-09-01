import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Flex,
  Icon,
  Text,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
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
} from '@chakra-ui/core';
import { connect } from 'react-redux';
import { addPlate, addFormule, removePlate } from '../redux/actions/cartAction';

function Plat({ removePlate, addPlate, addFormule, post, cart }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formuleState, setFormuleState] = React.useState({
    formuleName: '',
    description: '',
    price: '',
    unit_price: '',
    qnt: 1,
    plates: [],
  });

  const handleFormuleChange = (e, plate) => {
    e.persist();
    let list;
    if (e.target.checked) {
      list = formuleState.plates;
      setFormuleState((prevState) => ({
        ...prevState,
        formuleName: plate.name,
        description: plate.description,
        price: plate.price,
        unit_price: plate.price,
        plates: [...list, e.target.value],
      }));
    } else {
      list = formuleState.plates.filter((value) => value !== e.target.value);
      setFormuleState((prevState) => ({
        ...prevState,
        formuleName: plate.name,
        description: plate.description,
        price: plate.unit_price,
        unit_price: plate.unit_price,
        plates: [...list],
      }));
    }
  };

  const handleFormuleSubmit = async (formule, post) => {
    await addFormule(formule, post);
    onClose();
  };

  //   const [formuleSelected, setFormuleS] = React.useState({});
  const [selected, setSelected] = React.useState({
    FormuleBurger: false,
    FormuleRolls: false,
    SupplémentFromageFondu: false,
  });

  React.useEffect(() => {
    post.formules.map((formule) => {
      formule.formule_categories.map((plate) => {
        setSelected((prevState) => ({ ...prevState, [plate.name]: false }));
      });
    });
    post.plat_categoriers.map((plate) => {
      plate.plats.map((plato) => {
        setSelected((prevState) => ({ ...prevState, [plato.name]: false }));
      });
    });
    cart.plates.map((plate) => {
      setSelected((prevState) => ({ ...prevState, [plate.name]: true }));
    });
  }, []);

  console.log('selecteddddd', selected);
  const handleSelect = (name, bol, price, qnt, description) => {
    let plate = { name, description, price, qnt, unit_price: price };
    if (bol) {
      removePlate(plate);
      setSelected((prevState) => ({ ...prevState, [name]: false }));
    } else {
      addPlate(plate, post);
      toast({
        title: 'Plate added ',
        description: 'Go to your cart to complete the order',
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
      setSelected((prevState) => ({ ...prevState, [name]: true }));
    }
  };

  return (
    <Box>
      <Tabs bg="white">
        <TabList overflowX="auto" color="gray.500" p="2px">
          {post.formules.map((formule) => (
            <Tab p="10px" fontSize="24px">
              {formule.name}
            </Tab>
          ))}
          {post.plat_categoriers.map((cat) => {
            return (
              <Tab p="10px" fontSize="24px">
                {cat.name}
              </Tab>
            );
          })}
          {/* <Tab p="10px" fontSize="24px">
            Gourmandises Sucrées
          </Tab>
          <Tab p="10px" fontSize="24px">
            Boissons Fraîches
          </Tab> */}
        </TabList>

        <TabPanels color="gray.600">
          {post.formules && (
            <TabPanel bg="gray.50">
              {post.formules.map((formule) => {
                return (
                  <Box p="30px">
                    <Heading>{formule.name}</Heading>
                    <SimpleGrid mt="6" mb="50px" columns={[1, 1, 2, 3]} spacing={12}>
                      {formule.formule_categories.map((plate) => (
                        <Box
                          cursor="pointer"
                          onClick={onOpen}
                          color={selected[plate.name] ? 'white' : 'gray.600'}
                          bg={selected[plate.name] ? 'gray.700' : 'white'}
                          borderWidth="1px"
                          rounded="lg"
                          p="6"
                        >
                          <Heading> {plate.name} </Heading>
                          <Text fontSize="2xl">{plate.description}</Text>
                          <Heading size="lg">{plate.price} €</Heading>

                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>{formule.name}</ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <Stack>
                                  {plate.plats.map((plato) => (
                                    <Checkbox
                                      isChecked={formuleState.plates.includes(plato.name)}
                                      onChange={(e) => handleFormuleChange(e, plate)}
                                      name={plato.name}
                                      value={plato.name}
                                    >
                                      {plato.name}
                                    </Checkbox>
                                  ))}
                                  <Checkbox
                                    isChecked={formuleState.plates.includes('coca')}
                                    onChange={(e) => handleFormuleChange(e, plate)}
                                    name="coca"
                                    value="coca"
                                  >
                                    coca
                                  </Checkbox>
                                  <Checkbox
                                    isChecked={formuleState.plates.includes('bread')}
                                    onChange={(e) => handleFormuleChange(e, plate)}
                                    name="bread"
                                    value="bread"
                                  >
                                    bread
                                  </Checkbox>
                                  <Checkbox
                                    isChecked={formuleState.plates.includes('juse')}
                                    onChange={(e) => handleFormuleChange(e, plate)}
                                    name="juse"
                                    value="juse"
                                  >
                                    juse
                                  </Checkbox>
                                </Stack>
                                {/* {JSON.stringify(formuleState)} */}
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  isDisabled={formuleState.plates[0] === undefined}
                                  variantColor="blue"
                                  mr={3}
                                  onClick={() => handleFormuleSubmit(formuleState, post)}
                                >
                                  Add Formule
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>
                );
              })}
            </TabPanel>
          )}
          {post.plat_categoriers && (
            <TabPanel bg="gray.50">
              {post.plat_categoriers.map((plate) => {
                return (
                  <Box p="30px">
                    <Heading>{plate.name}</Heading>
                    <SimpleGrid mt="6" mb="50px" columns={[1, 1, 2, 3]} spacing={12}>
                      {plate.plats.map((plato) => (
                        <Box
                          onClick={() =>
                            handleSelect(
                              plato.name,
                              selected[plato.name],
                              plato.unit_price,
                              1,
                              plato.description
                            )
                          }
                          color={selected[plato.name] ? 'white' : 'gray.600'}
                          bg={selected[plato.name] ? 'gray.700' : 'white'}
                          borderWidth="1px"
                          rounded="lg"
                          p="6"
                        >
                          <Heading> {plato.name} </Heading>
                          <Text fontSize="2xl">{plato.description}</Text>
                          <Heading size="lg">{plato.unit_price} €</Heading>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>
                );
              })}
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(Plat);
