// Core
import React from 'react';
import {Provider} from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import './app.scss';

// Instruments
import { store } from "./store/store";

// Components
import Layout from "./layout/layout";

export const App = () => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Layout />
      </Provider>
    </CookiesProvider>
  )
};
