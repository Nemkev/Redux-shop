import { reducer, initalState } from './index';
import * as t from '../actions/index';

describe('testReducers', () => {
  it('increment working', () => {
    const state = reducer(initalState, t.increment(1));

    expect(state).toEqual({
      ...initalState,
      count: initalState.count + 1,
    });
  });

  it('decrement working', () => {
    const state = reducer(initalState, t.decrement(1));

    expect(state).toEqual({
      ...initalState,
      count: initalState.count - 1,
    });
  });

  it('add item working', () => {
    const payload = { id: 34, name: 'Carrot', price: 3, counter: 7, totalProductPrice: 21 };

    const state = reducer(initalState, t.addProduct(payload));

    expect(state).toEqual({
      ...initalState,
      messages: [...initalState.messages, payload],
    });
  });

  it('remove item working', () => {
    const mockData = { id: 34, name: 'Carrot', price: 3, counter: 7, totalProductPrice: 21 };
    const payload = 34;
    const state = reducer(initalState, t.addProduct(mockData));
    const newState = reducer(state, t.deleteProduct(payload));
    expect(newState).toEqual({
      ...initalState,
      messages: [...initalState.messages],
    });
  });
});
