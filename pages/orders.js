import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/core';
import { connect } from 'react-redux';
import Router, { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

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
          <Box m="6" textAlign="center">
            <Heading color="gray.500">orders page</Heading>
          </Box>

          <Table>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>Adress</Th>
                <Th>Method</Th>
                <Th>Order Status</Th>
                <Th>Created At</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders &&
                orders.map((order) => (
                  <>
                    <Tr>
                      <Td>{order.id}</Td>
                      <Td>{order.adress}</Td>
                      <Td>{order.method}</Td>
                      <Td>{order.order_status}</Td>
                      <Td>{dayjs(order.created_at).format('DD/mm/YYYY')}</Td>
                    </Tr>
                  </>
                ))}
            </Tbody>
          </Table>
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
