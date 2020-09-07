import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/core';
import { connect } from 'react-redux';
import Router, { useRouter } from 'next/router';
import dayjs from 'dayjs';

import { getOrders } from '../redux/actions/orderAction';

function Orders({ orders, auth, getOrders }) {
  React.useEffect(() => {
    if (!auth.data && !auth.loading) {
      Router.replace('/');
    } else {
      console.log('order getttt');
      getOrders();
    }
  }, []);
  console.log(orders);
  return (
    <Box
      bg="white"
      mt="150px"
      mr={['20px', '50px', '50px', '50px']}
      ml={['20px', '50px', '50px', '50px']}
      mb="100px"
      p="20px"
    >
      {auth.data && !auth.loading && (
        <>
          <Heading>orders page</Heading>
          <SimpleGrid p="20px" bg="gray.50" mt="40px" columns={5} spacing={10}>
            <Heading size="md">id</Heading>
            <Heading size="md">Adress</Heading>
            <Heading size="md">Method</Heading>
            <Heading size="md">Order Status</Heading>
            <Heading size="md">Created At</Heading>
            {orders &&
              orders.map((order) => (
                <>
                  <p>{order.id}</p>
                  <p>{order.adress}</p>
                  <p>{order.method}</p>
                  <p>{order.order_status}</p>
                  <p>{dayjs(order.created_at).format('DD/mm/YYYY')}</p>
                </>
              ))}
          </SimpleGrid>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(getOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
