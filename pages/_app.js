import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';

import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { useStore } from '../redux/store';

import '../styles/globals.css';
import '../styles/nprogress.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar');
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store);
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={<Component {...pageProps} />} persistor={persistor}>
          <CSSReset></CSSReset>
          <TopProgressBar />

          <Navbar></Navbar>
          <Component {...pageProps} />
          <Footer></Footer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
