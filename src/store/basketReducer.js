const defaultState = {
    basketModal: false,
    buysList: [],
  };
  
  const BASKET = 'BASKET';
  const BUYLIST = 'BUYLIST';
  const DECREMENT = 'DECREMENT';
  const ENCREMENT = 'ENCREMENT';
  const CLEAR = 'CLEAR';
  const CHANGE = 'CHANGE';
  
  export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
      case BASKET:
        return { ...state, basketModal: action.payload };
      case BUYLIST:
        return {
          ...state,
          buysList: [...state.buysList, { ...action.payload, quantity: 1 }],
        };
      case CLEAR: {
        return {
          ...state,
          buysList: action.payload,
        };
      }
      case CHANGE:
        return {
          ...state,
          buysList: state.buysList.map((elem) => {
            if (elem.id === action.payload.id) {
              return { ...elem, quantity: elem.quantity + 1 };
            }
            return elem;
          }),
        };
      case DECREMENT:
        return {
          ...state,
          buysList: state.buysList.map((elem) => {
            if (elem.id === action.payload) {
              return { ...elem, quantity: elem.quantity + 1 };
            }
            return elem;
          }),
        };
      case ENCREMENT:
        return {
          ...state,
          buysList: state.buysList.map((elem) => {
            if (elem.id === action.payload) {
              return { ...elem, quantity: (elem.quantity = 0 ? 0 : elem.quantity - 1) };
            }
            return elem;
          }),
        };
      default:
        return state;
    }
  };
  
  export function decrementQuantity(payload) {
    return {
      type: DECREMENT,
      payload,
    };
  }
  export function encrementQuantity(payload) {
    return {
      type: ENCREMENT,
      payload,
    };
  }
  