import { ActionTypes, IAddLine, IDeleteLine } from '../types/index';

export const addProduct = (payload: { id: number; name: string; price: number }): IAddLine => ({
  type: ActionTypes.ADD_PRODUCT,
  payload,
});

export const deleteProduct = (payload: number): IDeleteLine => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload,
});

// export const addProductToCard = (payload: number)
