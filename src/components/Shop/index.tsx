import React from 'react';

import { Overlap, OrderZone, CreateProductForm, Counter, ProductList, ListItem, Input } from './shop.style';

export const Shop = () => {
  return (
    <Overlap>
      <OrderZone>
        <CreateProductForm>
          <Input type="text" placeholder="Product name" />
          <Input type="text" placeholder="Product price" />
          <Counter />
          <button>Select type</button>
          <button type="submit">Add to list</button>
        </CreateProductForm>
        <ProductList>
          <ListItem>11</ListItem>
          <ListItem>11</ListItem>
        </ProductList>
      </OrderZone>
      <h1>Shops</h1>
    </Overlap>
  );
};
