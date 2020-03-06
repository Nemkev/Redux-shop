import {
  ActionTypes,
  IAddLine,
  IDeleteLine,
  IIncrement,
  IDecrement,
  ITotalPrice,
  IIncrementCurrentProductCounter,
  IDecrementCurrentProductCounter,
  ILOAD_DATA,
  IPutData,
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

export const changeTotalPrice = (): ITotalPrice => ({
  type: ActionTypes.TOTAL_PRICE,
});

export const incrementCurrentProductCounter = (payload: number): IIncrementCurrentProductCounter => ({
  type: ActionTypes.INCREMENT_CURRENT_PRODUCT_COUNTER,
  payload,
});

export const decrementCurrentProductCounter = (payload: number): IDecrementCurrentProductCounter => ({
  type: ActionTypes.DECREMENT_CURRENT_PRODUCT_COUNTER,
  payload,
});

export const loadData = (): ILOAD_DATA => ({
  type: ActionTypes.LOAD_DATA,
});

export const putData = (payload: any): IPutData => ({
  type: ActionTypes.PUT_DATA,
  payload,
});
