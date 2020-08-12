import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import { Heading } from '@chakra-ui/core';

import Hero from '../components/home/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>

      <Heading>here the journy start</Heading>
    </div>
  );
}
