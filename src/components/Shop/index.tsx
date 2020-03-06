import React, { useReducer } from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import {
  addProduct,
  deleteProduct,
  increment,
  decrement,
  incrementCurrentProductCounter,
  changeTotalPrice,
  decrementCurrentProductCounter,
  loadData,
} from '../../actions/index';
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
  TotalPrice,
  TypeProductBar,
  SelectType,
  ProductFishButton,
  ProductSweetButton,
  ProductFruitButton,
  ProductVegetableButton,
} from './shop.style';
import { IState } from '../../types/index';
interface ShopProps extends IState {
  addProduct: (value: any) => any;
  deleteProduct: (value: any) => any;
  decrement: (value: any) => any;
  increment: (value: any) => any;
  decrementCurrentProductCounter: (value: any) => any;
  incrementCurrentProductCounter: (value: any) => any;
  changeTotalPrice: () => any;
  loadData: () => any;
}

type State = {
  name: string;
  price: number;
  counter: number;
  totalProductPrice: number;
  showType: boolean;
};

type Action = { name: string } | { price: number } | { showType: boolean };

const Shop: React.FC<ShopProps> = props => {
  const [{ name, price, counter, totalProductPrice, showType }, setState] = useReducer(
    (s: State, a: Action) => ({ ...s, ...a }),
    { name: '', price: 0, counter: 0, totalProductPrice: 0, showType: false },
  );
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
          <SelectType
            onClick={e => {
              e.preventDefault();
              showType === true ? setState({ showType: false }) : setState({ showType: true });
            }}
          >
            Select type
          </SelectType>
          <button
            onClick={e => {
              e.preventDefault();
              props.loadData();
            }}
          >
            PUSH ME
          </button>
          <TypeProductBar showType={showType}>
            <button>Fruit</button>
            <button>Vegetable</button>
            <button>Fish</button>
            <button>Sweet</button>
          </TypeProductBar>
          <AddButton
            onClick={e => {
              e.preventDefault();
              props.addProduct({
                id: props.messages.length + 1,
                name,
                price,
                counter: props.count,
                totalProductPrice: counter * price,
              });
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
                      props.decrementCurrentProductCounter(el.id);
                      props.changeTotalPrice();
                    }}
                  >
                    -
                  </Minus>
                  <CounterValue>{el.counter}</CounterValue>
                  <Plus
                    onClick={e => {
                      e.preventDefault();
                      props.incrementCurrentProductCounter(el.id);
                      props.changeTotalPrice();
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
      <TotalPrice>Total price: {props.totalPrice}</TotalPrice>
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
  decrementCurrentProductCounter: (id: number) => dispatch(decrementCurrentProductCounter(id)),
  changeTotalPrice: () => dispatch(changeTotalPrice()),
  loadData: () => dispatch(loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
