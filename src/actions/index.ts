import {
  ActionTypes,
  IAddLine,
  IDeleteLine,
  IIncrement,
  IDecrement,
  ITotalPrice,
  IIncrementCurrentProductCounter,
} from '../types/index';

export const addProduct = (payload: {
  id: number;
  name: string;
  price: number;
  counter: number;
  totalProductPrice: number;
}): IAddLine => ({
  type: ActionTypes.ADD_PRODUCT,
  payload,
});

export const deleteProduct = (payload: number): IDeleteLine => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload,
});

export const increment = (payload: number): IIncrement => ({
  type: ActionTypes.INCREMENT,
  payload,
});

export const decrement = (payload: number): IDecrement => ({
  type: ActionTypes.DECREMENT,
  payload,
});

export const changeTotalPrice = (payload: number): ITotalPrice => ({
  type: ActionTypes.TOTAL_PRICE,
  payload,
});

export const incrementCurrentProductCounter = (payload: number): IIncrementCurrentProductCounter => ({
  type: ActionTypes.INCREMENT_CURRENT_PRODUCT_COUNTER,
  payload,
});
