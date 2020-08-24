import Head from 'next/head';

// import styles from '../styles/Home.module.css';
import { Heading, Box, SimpleGrid } from '@chakra-ui/core';

import Hero from '../components/home/Hero';
import Rec from '../components/home/Rec';
import Commande from '../components/home/Commande';
import Ville from '../components/home/Ville';
import Mobile from '../components/home/Mobile';
import Description from '../components/home/Description';

export default function Home(props) {
  console.log(props);

  return (
    <Box>
      <Head>
        <title>Dood</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css"
        />
      </Head>
      <Box mt="85px">
        <Hero></Hero>
        <Box bg="gray.100" p={['20px', '30px', '40px', '50px']}>
          <Heading p="15px" size="xl" color="gray.500">
            Vos commerçants préférés sont sur Dood
          </Heading>
          <SimpleGrid spacing={10} justifyItems="center" columns={[1, 2, 3, 4]}>
            {props.posts.map((post) => {
              return (
                <Rec
                  key={post.id}
                  latitude={post.latitude}
                  longitude={post.longitude}
                  id={post.id}
                  name={post.name}
                  adress={post.adress}
                  image={`https://dood.devzone-dz.com/storage/${post.image}`}
                ></Rec>
              );
            })}
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    'https://dood.devzone-dz.com/api/restaurants?apiKey=azerty&limit=6&offset=0'
  );
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
