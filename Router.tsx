import React from 'react';
import { Shop } from './src/components/Shop/index';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Wrapper } from './app.style';

export const Routers = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Shop} />
        {/* <Redirect from="/" to="shop" /> */}
      </Switch>
    </Wrapper>
  );
};
