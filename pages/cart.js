import React from 'react';
import { Box, Heading, Grid, Text, Divider, Flex } from '@chakra-ui/core';
import { connect } from 'react-redux';

import Quantity from '../components/cart/Quantity';

function cart(props) {
  return (
    <Box mt="92.43px" p={['10px', '30px', '30px', '30px']}>
      <Grid gridTemplateColumns={['1fr ', '1fr 1.5fr', '1fr 1.5fr', '1fr 1.5fr']}>
        <Box m="2" p="40px" bg="white">
          <Heading mb="6" size="xl">
            Commande
          </Heading>
          {props.cart.plates.map((plate) => {
            return (
              <Box>
                <Heading size="lg">{plate.name}</Heading>
                <Text color="gray.500">{plate.description}</Text>
                <Flex mt="2" justifyContent="space-between">
                  <Quantity></Quantity>
                  <Text mt="20px" color="gray.600" fontWeight="black">
                    {plate.price}$
                  </Text>
                </Flex>
                <Divider></Divider>
              </Box>
            );
          })}
          <Flex mt="30px" justifyContent="space-between">
            <Text fontSize="lg" fontWeight="black">
              Total
            </Text>
            <Text fontSize="lg" fontWeight="black">
              {props.cart.totalPrice}$
            </Text>
          </Flex>
        </Box>
        <Box m="2" p="30px" bg="white">
          <Heading mb="4" size="lg">
            Votre rendez-vous
          </Heading>
          <Text fontSize="lg">{props.cart.restName}</Text>
          <Text color="gray.500" fontSize="lg">
            132 COURS LAFAYETTE, 69003, LYON
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, null)(cart);
