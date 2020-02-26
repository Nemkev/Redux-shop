import { ActionTypes, IState, Actions } from '../types/index';

const initalState: IState = {
  count: 0,
  messages: [
    { id: 1, name: 'Potato', price: 15, counter: 1, totalProductPrice: 0 },
    { id: 2, name: 'Onions', price: 11, counter: 1, totalProductPrice: 0 },
  ],
  totalPrice: 0,
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
    case ActionTypes.INCREMENT: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case ActionTypes.DECREMENT: {
      return {
        ...state,
        count: state.count - action.payload,
      };
    }
    case ActionTypes.TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload,
      };
    }
    case ActionTypes.INCREMENT_CURRENT_PRODUCT_COUNTER: {
      const currentItem = state.messages.find(el => el.id === action.payload);
      console.log(currentItem);
      if (currentItem !== undefined)
        return {
          ...state,
          messages: [...state.messages, currentItem],
        };
    }
    // case ActionTypes.INCREMENT_CURRENT_PRODUCT_COUNTER: {
    //   const currentItem = state.messages.find(el => el.id === action.payload);
    //   return {
    //     ...state,
    //     messages: currentItem!.counter = currentItem!.counter + 1,
    //   };
    // }
    default:
      return state;
  }
};
