import * as actions from './index';
import * as types from '../types/index';

describe('testActions', () => {
  it('increment action', () => {
    const payload = 1;
    const expectedAction = {
      type: types.ActionTypes.INCREMENT,
      payload,
    };
    expect(actions.increment(payload)).toEqual(expectedAction);
  });

  it('decrement action', () => {
    const payload = 1;
    const expectedAction = {
      type: types.ActionTypes.DECREMENT,
      payload,
    };
    expect(actions.decrement(payload)).toEqual(expectedAction);
  });

  it('add item action', () => {
    const payload = { id: 34, name: 'Carrot', price: 3, counter: 7, totalProductPrice: 21 };
    const expectedAction = {
      type: types.ActionTypes.ADD_PRODUCT,
      payload,
    };
    expect(actions.addProduct(payload)).toEqual(expectedAction);
  });

  it('delete item action', () => {
    const payload = 1;
    const expectedAction = {
      type: types.ActionTypes.DELETE_PRODUCT,
      payload,
    };
    expect(actions.deleteProduct(payload)).toEqual(expectedAction);
  });
});
