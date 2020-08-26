import React from 'react';
import { Box, Heading, Grid, Text } from '@chakra-ui/core';
export default function cart() {
  return (
    <Box mt="92.43px" p="30px">
      <Grid gridTemplateColumns={'1fr 1.5fr'}>
        <Box m="2" p="30px" bg="white">
          <Heading size="lg">Commande</Heading>
        </Box>
        <Box m="2" p="30px" bg="white">
          <Heading mb="4" size="lg">
            Votre rendez-vous
          </Heading>
          <Text fontSize="lg">SAUMON ET CIE</Text>
          <Text color="gray.500" fontSize="lg">
            132 COURS LAFAYETTE, 69003, LYON
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}
