export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  ADD_PRODUCT_TO_CARD = 'ADD_PRODUCT_TO_CARD',
  REMOVE_PRODUCT_FROM_CARD = 'REMOVE_PRODUCT_FROM_CARD',
}

export interface IAddLine {
  type: ActionTypes.ADD_PRODUCT;
  payload: { id: number; name: string; price: number };
}

export interface IDeleteLine {
  type: ActionTypes.DELETE_PRODUCT;
  payload: number;
}

export interface IAddProductToCard {
  type: ActionTypes.ADD_PRODUCT_TO_CARD;
  payload: number;
}

export interface IRemoveProductFromCard {
  type: ActionTypes.REMOVE_PRODUCT_FROM_CARD;
  payload: number;
}

export type Actions = IAddLine | IDeleteLine;

export interface IState {
  readonly count: number;
  readonly messages: { id: number; name: string; price: number }[];
  //   addProduct: { id: number; name: string; price: number };
}
