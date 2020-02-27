import { ActionTypes, IState, Actions } from '../types/index';

const initalState: IState = {
  count: 0,
  messages: [
    { id: 1, name: 'Potato', price: 15, counter: 0, totalProductPrice: 0 },
    { id: 2, name: 'Onions', price: 11, counter: 0, totalProductPrice: 0 },
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
      if (currentItem !== undefined) {
        currentItem.counter = currentItem.counter + 1;
        currentItem.totalProductPrice = currentItem.counter * currentItem.price;
        return {
          ...state,
          messages: [...state.messages],
        };
      }
    }
    case ActionTypes.TOTAL_PRICE: {
      let count = 0;
      const arrOfMessageSize = state.messages.length;
      for (let i = 0; i < arrOfMessageSize; i++) {
        count += state.messages[i].totalProductPrice;
      }
      return {
        ...state,
        totalPrice: count,
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
