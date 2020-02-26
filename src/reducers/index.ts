import { ActionTypes, IState, Actions } from '../types/index';

const initalState: IState = {
  count: 0,
  messages: [
    { id: 1, name: 'Potato', price: 15 },
    { id: 2, name: 'Onions', price: 11 },
  ],
};

export const reducer = (state: IState = initalState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      return { ...state, messages: [...state.messages, action.payload] };
    }
    case ActionTypes.DELETE_PRODUCT: {
      return {
        ...state,
        messages: state.messages.filter(el => el.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
