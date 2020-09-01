import React from 'react';
import { Box } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { qntUp, qntDown } from '../../redux/actions/cartAction';

function Quantity({ formule, plate, qntDown, qntUp }) {
  return (
    <Box display="flex">
      <Box
        as="button"
        disabled={(formule && formule.qnt === 1) || (plate && plate.qnt === 1)}
        cursor="pointer"
        onClick={() => qntDown(formule, plate)}
        mt="3"
        textAlign="center"
        bg="gray.200"
        borderRadius="50%"
        width="40px"
        height="40px"
        fontSize="25px"
      >
        -
      </Box>
      <Box
        m="2"
        textAlign="center"
        bg="gray.600"
        color="white"
        borderRadius="50%"
        width="50px"
        height="50px"
        fontSize="32px"
      >
        {(formule && formule.qnt) || (plate && plate.qnt)}
      </Box>
      <Box
        onClick={() => qntUp(formule, plate)}
        mt="3"
        cursor="pointer"
        textAlign="center"
        bg="gray.200"
        borderRadius="50%"
        width="40px"
        height="40px"
        fontSize="25px"
      >
        +
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    qntUp: (formule, plate) => dispatch(qntUp(formule, plate)),
    qntDown: (formule, plate) => dispatch(qntDown(formule, plate)),
  };
};

export default connect(null, mapDispatchToProps)(Quantity);
