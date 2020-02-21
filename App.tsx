import React from 'react';
import { Header } from './src/assets/Header/index';
import { Footer } from './src/assets/Footer/index';
import { Routers } from './Router';
import { BrowserRouter as Router } from 'react-router-dom';

import { Wrapper } from './app.style';

export const App = () => {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Routers />
      </Wrapper>
      <Footer />
    </Router>
  );
};
