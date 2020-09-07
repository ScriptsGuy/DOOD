import * as t from '../types.js';

const initialState = {
  orders: null,
  error: null,
  loading: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_ORDERS:
      console.log(action.payload);
      return {
        ...state,
        orders: action.payload,
      };
    case t.ADD_ORDER:
      console.log(action.payload);
      return {
        ...state,
        error: null,
        loading: null,
      };
    case t.ORDER_LOADING:
      console.log(action.payload);
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default orderReducer;
