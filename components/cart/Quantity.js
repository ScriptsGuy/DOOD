import React from 'react';
import { Box } from '@chakra-ui/core';

export default function Quantity() {
  const [count, setCount] = React.useState(0);

  return (
    <Box display="flex">
      <Box
        cursor="pointer"
        onClick={() => (count === 0 ? 0 : setCount(count - 1))}
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
        {count}
      </Box>
      <Box
        onClick={() => setCount(count + 1)}
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
