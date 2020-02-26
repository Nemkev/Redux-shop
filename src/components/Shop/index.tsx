import React, { useReducer } from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { addProduct, deleteProduct } from '../../actions/index';
import {
  Overlap,
  OrderZone,
  CreateProductForm,
  Counter,
  ProductList,
  ListItem,
  Input,
  CounterValue,
} from './shop.style';
import { IState } from '../../types/index';
import { withRouter } from 'react-router-dom';

interface ProductData {
  id: number;
  name: string;
  price: number;
}
interface Props {
  messages: { id: number; name: string }[];
  name: string;
}

// interface Product {
//   name: string;
//   price: number;
//   total: number;
//   id: string;
// }

// interface State {
//   name: string;
//   price: number;
// }

// interface StateProps {
//   count: number;
//   messages: [];
// }

// interface Dispatch {}

const Shop = (props: IState) => {
  const [{ name, price }, setState] = useReducer((s: any, a: any) => ({ ...s, ...a }), { name: '', price: 0 });
  const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      [name]: value,
    });
  };
  return (
    <Overlap>
      <OrderZone>
        <CreateProductForm>
          <Input type="text" placeholder="Product name" name="name" value={name} onChange={handleChange} />
          <Input type="text" placeholder="Product price" name="price" value={price} onChange={handleChange} />
          <Counter>
            <i>-</i>
            <CounterValue>1</CounterValue>
            <i>+</i>
          </Counter>
          <button>Select type</button>
          {/* <button
            onClick={e => {
              e.preventDefault();
              props.addProduct({ id: props.messages.length + 1, name, price });
            }}
          >
            Add to list
          </button> */}
        </CreateProductForm>
        <ProductList>
          {props.messages.map((el: { id: number; name: string; price: number }) => (
            <ListItem key={el.id}>
              <h3>Buy {el.name}</h3>
              <p>Price: {el.price}</p>
            </ListItem>
          ))}
        </ProductList>
      </OrderZone>
      <h1>Shops</h1>
    </Overlap>
  );
};

const mapStateToProps = (state: IState) => {
  return state;
};
const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
  addProduct: (data: { id: number; name: string; price: number }) => dispatch(addProduct(data)),
  deleteProduct: (id: number) => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
