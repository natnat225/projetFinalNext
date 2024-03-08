'use client';

import 'next-google-fonts'
import '@fontsource-variable/orbitron';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from '../redux/store';
import Layout from '../app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Provider store={store}> */}
        <Component {...pageProps} />
      {/* </Provider> */}
    </>
    
  );
}

export default MyApp;



