import '../styles/globals.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset></CSSReset>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
