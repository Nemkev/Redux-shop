import React from 'react';

interface Product {
  price: number;
  quantity: number;
  title: string;
}

export const Product = ({ price, quantity, title }: Product) => {
  <div>
    {title} - &#36;{price}
    {quantity ? ` x ${quantity}` : null}
  </div>;
};
