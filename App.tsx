import React from 'react';
import { Header } from './src/assets/Header/index';
import { Provider } from 'react-redux';
import { Footer } from './src/assets/Footer/index';
import { Routers } from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';

import { Wrapper } from './app.style';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Wrapper>
          <Routers />
        </Wrapper>
        <Footer />
      </Router>
    </Provider>
  );
};
