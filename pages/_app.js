import dynamic from 'next/dynamic';

import '../styles/globals.css';
import '../styles/nprogress.css';

import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar');
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset></CSSReset>
      <TopProgressBar />

      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default MyApp;
