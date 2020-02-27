import React, { useReducer } from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { addProduct, deleteProduct, increment, decrement, incrementCurrentProductCounter } from '../../actions/index';
import {
  Overlap,
  OrderZone,
  CreateProductForm,
  Counter,
  ProductList,
  ListItem,
  Input,
  CounterValue,
  Plus,
  Minus,
  AddButton,
} from './shop.style';
import { IState } from '../../types/index';
// import { withRouter } from 'react-router-dom';

// interface ProductData {
//   id: number;
//   name: string;
//   price: number;
// }
// interface Props {
//   messages: { id: number; name: string }[];
//   name: string;
// }

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

interface ShopProps extends IState {
  addProduct: (value: any) => any;
  deleteProduct: (value: any) => any;
  decrement: (value: any) => any;
  increment: (value: any) => any;
  incrementCurrentProductCounter: (value: any) => any;
}

type State = {
  name: string;
  price: number;
};

type Action = { name: string } | { price: number };

const Shop: React.FC<ShopProps> = props => {
  const [{ name, price }, setState] = useReducer((s: State, a: Action) => ({ ...s, ...a }), { name: '', price: 0 });
  const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
    setState({ [name]: value } as any);
  };

  return (
    <Overlap>
      <OrderZone>
        <CreateProductForm>
          <Input type="text" placeholder="Product name" name="name" value={name} onChange={handleChange} />
          <Input type="text" placeholder="Product price" name="price" value={price} onChange={handleChange} />
          <Counter>
            <Minus
              onClick={e => {
                e.preventDefault();
                props.decrement(1);
              }}
            >
              -
            </Minus>
            <CounterValue>{props.count}</CounterValue>
            <Plus
              onClick={e => {
                e.preventDefault();
                props.increment(1);
              }}
            >
              +
            </Plus>
          </Counter>
          {/* <AddButton>Add to list</AddButton> */}
          <AddButton
            onClick={e => {
              e.preventDefault();
              props.addProduct({ id: props.messages.length + 1, name, price });
            }}
          >
            Add to list
          </AddButton>
        </CreateProductForm>
        <ProductList>
          {props.messages.map(
            (el: { id: number; name: string; price: number; counter: number; totalProductPrice: number }) => (
              <ListItem key={el.id}>
                <h3>Buy {el.name}</h3>
                <Counter>
                  <Minus
                    onClick={e => {
                      e.preventDefault();
                      // props.decrement(1);
                    }}
                  >
                    -
                  </Minus>
                  <CounterValue>{el.counter}</CounterValue>
                  <Plus
                    onClick={e => {
                      e.preventDefault();
                      // props.increment(1);
                      props.incrementCurrentProductCounter(el.id);
                    }}
                  >
                    +
                  </Plus>
                </Counter>
                <p>Price: {el.totalProductPrice}</p>
              </ListItem>
            ),
          )}
        </ProductList>
      </OrderZone>
      <p>Total price: {props.totalPrice}</p>
    </Overlap>
  );
};

const mapStateToProps = (state: IState) => {
  return state;
};
const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
  addProduct: (data: { id: number; name: string; price: number; counter: number; totalProductPrice: number }) =>
    dispatch(addProduct(data)),
  deleteProduct: (id: number) => dispatch(deleteProduct(id)),
  decrement: (count: number) => dispatch(decrement(count)),
  increment: (count: number) => dispatch(increment(count)),
  incrementCurrentProductCounter: (id: number) => dispatch(incrementCurrentProductCounter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
