import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import { Heading, Box, SimpleGrid } from '@chakra-ui/core';

import Hero from '../components/home/Hero';
import Rec from '../components/home/Rec';
import Commande from '../components/home/Commande';
import Ville from '../components/home/Ville';
import Mobile from '../components/home/Mobile';
import Description from '../components/home/Description';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Dood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mt="85px">
        <Hero></Hero>
        <Box bg="gray.100" p={['20px', '30px', '40px', '50px']}>
          <Heading p="15px" size="xl" color="gray.500">
            Vos commerçants préférés sont sur Dood
          </Heading>
          <SimpleGrid spacing={12} justifyItems="center" columns={[1, 2, 2, 3]}>
            <Rec image="https://api.dood.com/files/uploads/8082.jpg"></Rec>
            <Rec image="https://api.dood.com/files/uploads/5198.jpg"></Rec>
            <Rec image="https://api.dood.com/files/uploads/21701.jpg"></Rec>
            <Rec image="https://api.dood.com/files/uploads/11380.jpg"></Rec>
            <Rec image="https://api.dood.com/files/uploads/11983.jpg"></Rec>
            <Rec image="https://api.dood.com/files/uploads/13276.jpg"></Rec>
          </SimpleGrid>
        </Box>
        <Box bg="white" p={['20px', '30px', '40px', '50px']}>
          <Heading p="15px" size="xl" color="gray.500">
            Vos commerçants préférés sont sur Dood
          </Heading>
          <Commande></Commande>
        </Box>
        <Box textAlign="center" bg="gray.200" p={['20px', '30px', '40px', '50px']}>
          <Heading p="15px" size="xl" color="gray.500">
            Dood est dans les plus belles villes
          </Heading>
          <Ville></Ville>
        </Box>
        <Box bg="white" textAlign="center">
          <Mobile></Mobile>
        </Box>
        <Box>
          <Description></Description>
        </Box>
      </Box>
    </Box>
  );
}
