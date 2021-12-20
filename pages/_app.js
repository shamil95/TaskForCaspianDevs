import { useState } from 'react';
import { Provider } from 'react-redux';
import Container from '../Components/Container/Container';
import store from "../redux/store";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Container>
        <Component  {...pageProps} />
      </Container>
    </Provider>
  )
}

export default MyApp
