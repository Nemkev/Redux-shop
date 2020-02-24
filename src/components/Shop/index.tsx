import React from 'react';

import { Overlap, OrderZone, CreateProductForm, Counter, ProductList, ListItem, Input } from './shop.style';

export const Shop = () => {
  return (
    <Overlap>
      <OrderZone>
        <CreateProductForm>
          <Input type="text" placeholder="Product name" />
          <Input type="text" placeholder="Product price" />
          <Counter>
            <i>-</i>
            <p>1</p>
            <i>+</i>
          </Counter>
          <button>Select type</button>
          <button type="submit">Add to list</button>
        </CreateProductForm>
        <ProductList>
          <ListItem>
            <h3>Buy apples</h3>
            <Counter>
              <i>-</i>
              <p>1</p>
              <i>+</i>
            </Counter>
            <p>Total: 10$</p>
          </ListItem>
          <ListItem>
            <h3>Buy apples</h3>
            <Counter>
              <i>-</i>
              <p>1</p>
              <i>+</i>
            </Counter>
            <p>Total: 10$</p>
          </ListItem>
        </ProductList>
      </OrderZone>
      <h1>Shops</h1>
    </Overlap>
  );
};
