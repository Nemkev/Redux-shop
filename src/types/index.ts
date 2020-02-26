export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  ADD_PRODUCT_TO_CARD = 'ADD_PRODUCT_TO_CARD',
  REMOVE_PRODUCT_FROM_CARD = 'REMOVE_PRODUCT_FROM_CARD',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  TOTAL_PRICE = 'TOTAL_PRICE',
  INCREMENT_CURRENT_PRODUCT_COUNTER = 'INCREMENT_CURRENT_PRODUCT_COUNTER',
}

export interface IAddLine {
  type: ActionTypes.ADD_PRODUCT;
  payload: { id: number; name: string; price: number; counter: number; totalProductPrice: number };
}

export interface IDeleteLine {
  type: ActionTypes.DELETE_PRODUCT;
  payload: number;
}

export interface IAddProductToCard {
  type: ActionTypes.ADD_PRODUCT_TO_CARD;
  payload: number;
}

export interface IIncrement {
  type: ActionTypes.INCREMENT;
  payload: number;
}

export interface IDecrement {
  type: ActionTypes.DECREMENT;
  payload: number;
}

export interface IIncrementCurrentProductCounter {
  type: ActionTypes.INCREMENT_CURRENT_PRODUCT_COUNTER;
  payload: number;
}

export interface IRemoveProductFromCard {
  type: ActionTypes.REMOVE_PRODUCT_FROM_CARD;
  payload: number;
}

export interface ITotalPrice {
  type: ActionTypes.TOTAL_PRICE;
  payload: number;
}

export type Actions = IAddLine | IDeleteLine | IIncrement | IDecrement | ITotalPrice | IIncrementCurrentProductCounter;

export interface IState {
  readonly count: number;
  readonly messages: { id: number; name: string; price: number; counter: number; totalProductPrice: number }[];
  readonly totalPrice: number;
}
