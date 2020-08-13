import '../styles/globals.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset></CSSReset>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default MyApp;
