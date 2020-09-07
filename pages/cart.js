import React from 'react';
import { Box, Heading, Grid, Text, Divider, Flex, Button, Textarea, Input } from '@chakra-ui/core';
import { connect } from 'react-redux';

import Quantity from '../components/cart/Quantity';
import { ClearError } from '../redux/actions/authAction';
import { removePlate, removeFormule } from '../redux/actions/cartAction';
import { addOrder } from '../redux/actions/orderAction';

function cart(props) {
  const [order, setOrder] = React.useState({
    adress: null,
    comment: null,
    phone: null,
    restaurant_id: null,
    items: null,
    amount: null,
  });

  let items;
  let reshapedFormules;
  let reshapedPlates;

  const handleInputChange = (e) => {
    e.persist();
    setOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {};

  React.useEffect(() => {
    props.ClearError();
    reshapedPlates = props.cart.plates.map((plate) => {
      return { item: plate.name, price: plate.price, quantity: plate.qnt };
    });
    reshapedFormules = props.cart.formules.map((formule) => {
      return { item: formule.plates.join(' + '), price: formule.price, quantity: formule.qnt };
    });
    items = [...reshapedFormules, ...reshapedPlates];
    // console.log(reshapedPlates);
    // console.log(reshapedFormules);
    // console.log(props.cart);
    // console.log(items);
    setOrder((prev) => ({
      ...prev,
      amount: props.cart.totalPrice,
      restaurant_id: props.cart.restId,
      items,
    }));
  }, [props.cart]);
  //   console.log(order);

  return (
    <Box position="relative" className="cart" mt="92.43px" p={['10px', '30px', '30px', '30px']}>
      <Grid gridTemplateColumns={['1fr ', '1fr ', '1.5fr 1fr', '1.5fr 1fr']}>
        <Box m="2" p="20px" bg="white">
          <Heading mb="6" size="xl">
            Commande
          </Heading>
          <Box p="4" borderRadius="5px" border="1px solid gray" mb="20px">
            <Heading textAlign="center" size="lg">
              Formules
            </Heading>
            {props.cart.formules.map((formule) => {
              return (
                <Box>
                  <Heading color="gray.600" size="md">
                    {formule.formuleName}
                  </Heading>
                  {/* <Text color="gray.500">{formule.description}</Text> */}
                  <Text color="gray.500">{formule.plates.join(' + ')}</Text>
                  <Flex mt="2" justifyContent="space-between">
                    <Quantity formule={formule}></Quantity>
                    <Text mt="20px" color="gray.600" fontWeight="black">
                      {formule.price}$
                    </Text>
                  </Flex>
                  <Flex mb="3" justifyContent="flex-end">
                    <Button
                      onClick={() => props.removeFormule(formule)}
                      variantColor="red"
                      variant="link"
                    >
                      remove
                    </Button>
                  </Flex>
                  <Divider></Divider>
                </Box>
              );
            })}
          </Box>
          <Box p="4" borderRadius="5px" border="1px solid gray">
            <Heading size="lg" textAlign="center">
              Plates
            </Heading>
            {props.cart.plates.map((plate) => {
              return (
                <Box>
                  <Heading color="gray.600" size="md">
                    {plate.name}
                  </Heading>
                  <Text color="gray.500">{plate.description}</Text>
                  <Flex mt="2" justifyContent="space-between">
                    <Quantity plate={plate}></Quantity>
                    <Text mt="20px" color="gray.600" fontWeight="black">
                      {plate.price}$
                    </Text>
                  </Flex>
                  <Flex mb="3" justifyContent="flex-end">
                    <Button
                      onClick={() => props.removePlate(plate)}
                      variantColor="red"
                      variant="link"
                    >
                      remove
                    </Button>
                  </Flex>
                  <Divider></Divider>
                </Box>
              );
            })}
          </Box>
          <Flex mt="30px" justifyContent="space-between">
            <Text fontSize="lg" fontWeight="black">
              Total
            </Text>
            <Text fontSize="lg" fontWeight="black">
              {props.cart.totalPrice}$
            </Text>
          </Flex>
        </Box>
        <Box position="relative">
          <Box position="sticky" top="80px" height="650px" m="2" p="30px" bg="white">
            <Heading mb="6" size="xl">
              Votre rendez-vous
            </Heading>
            <Text fontSize="lg">{props.cart.restName}</Text>
            <Text color="gray.500" fontSize="lg">
              {props.cart.post !== null && props.cart.post.adress}
            </Text>
            <Box mt="8">
              <Text mb="8px">Votre adresse</Text>
              <Input
                name="adress"
                onChange={handleInputChange}
                placeholder="écrivez votre adresse ici "
                size="sm"
              />
            </Box>
            <Box mt="8">
              <Text mb="8px">Phone Number</Text>
              <Input
                name="phone"
                onChange={handleInputChange}
                placeholder="écrivez votre numero ici "
                size="sm"
              />
            </Box>
            <Box mt="8">
              <Text mb="8px">Commentair</Text>
              <Textarea
                name="comment"
                onChange={handleInputChange}
                placeholder="Write a comment "
                size="sm"
              />
            </Box>
            <Flex p="10px" mt="30px" justifyContent="space-between">
              <Text fontSize="lg" fontWeight="black">
                Total
              </Text>
              <Text fontSize="lg" fontWeight="black">
                {props.cart.totalPrice}$
              </Text>
            </Flex>
            <Box display="flex" justifyContent="flex-end" mt="8">
              <Button
                isLoading={props.order.loading}
                isDisabled={!order.phone || !order.adress || !order.comment}
                variantColor="teal"
                onClick={() => props.addOrder(order)}
              >
                Complete Order
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart, order: state.order };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ClearError: () => dispatch(ClearError()),
    removePlate: (plate) => dispatch(removePlate(plate)),
    removeFormule: (formule) => dispatch(removeFormule(formule)),
    addOrder: (order) => dispatch(addOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);
