import React from 'react';
import { Box, Heading, SimpleGrid, Text, Stack, Button } from '@chakra-ui/core';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';

function Profile({ auth, getOrders }) {
  React.useEffect(() => {
    if (!auth.data && !auth.loading) {
      Router.replace('/');
    } else {
    }
  }, []);

  return (
    <Box
      bg="white"
      mt="150px"
      mr={['10px', '10px', '50px', '50px']}
      ml={['10px', '10px', '50px', '50px']}
      mb="100px"
      p="20px"
    >
      <Head>
        <title>profile</title>
      </Head>
      {auth.data && !auth.loading && (
        <>
          <Box m="6" textAlign="center">
            <Heading color="gray.500">profile</Heading>
          </Box>
          <Heading size="lg">name : {auth.data.user.name}</Heading>
          <Heading size="lg">email : {auth.data.user.email}</Heading>
          <Heading size="lg">adress : {auth.data.user.adress}</Heading>
          <Heading size="lg">phone : {auth.data.user.phone}</Heading>
          <Heading size="lg">province : {auth.data.user.province}</Heading>
          <Box display="flex" mt="10" justifyContent="flex-end">
            <Button float="right" variantColor="blue">
              éditer
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    auth: state.auth,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getOrders: () => dispatch(getOrders()),
//   };
// };

export default connect(mapStateToProps)(Profile);
