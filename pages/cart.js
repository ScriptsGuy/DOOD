import React from 'react';
import { Box, Heading, Grid, Text, Divider, Flex, Button, Textarea } from '@chakra-ui/core';
import { connect } from 'react-redux';

import Quantity from '../components/cart/Quantity';
import { ClearError } from '../redux/actions/authAction';

function cart(props) {
  React.useEffect(() => {
    props.ClearError();
  }, []);

  return (
    <Box mt="92.43px" p={['10px', '30px', '30px', '30px']}>
      <Grid gridTemplateColumns={['1fr ', '1fr ', '1fr 1.5fr', '1fr 1.5fr']}>
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
                  <Text color="gray.500">{formule.description}</Text>
                  <Text color="gray.500">{formule.plates.join(' + ')}</Text>
                  <Flex mt="2" justifyContent="space-between">
                    <Quantity formule={formule}></Quantity>
                    <Text mt="20px" color="gray.600" fontWeight="black">
                      {formule.price}$
                    </Text>
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
        <Box height="500px" m="2" p="30px" bg="white">
          <Heading mb="6" size="xl">
            Votre rendez-vous
          </Heading>
          <Text fontSize="lg">{props.cart.restName}</Text>
          <Text color="gray.500" fontSize="lg">
            {props.cart.post !== null && props.cart.post.adress}
          </Text>
          <Box mt="8">
            <Text mb="8px">Commentair</Text>
            <Textarea placeholder="Write a comment " size="sm" />
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
            <Button variantColor="teal">Complete Order</Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
const mapDispatchToProps = (dispatch) => {
  return { ClearError: () => dispatch(ClearError()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);
