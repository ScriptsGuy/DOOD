import * as t from '../types.js';

const initialState = {
  restName: null,
  restId: null,
  plates: [],
  formule: [],
  totalPrice: 0,
  cartItemNumber: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CLEAR_CART:
      return {
        restName: null,
        restId: null,
        plates: [],
        formule: [],
        totalPrice: 0,
        cartItemNumber: 0,
      };
    case t.ADD_PLATE:
      console.log('added', action.payload.postId);
      let oldPlates = state.plates;
      let positivePrice = state.totalPrice + action.payload.plate.price;
      let newPositiveCartNumber = state.cartItemNumber + 1;
      if (oldPlates[0]) {
        return {
          ...state,
          restId: action.payload.postId,
          restName: action.payload.postName,
          plates: [...oldPlates, action.payload.plate],
          totalPrice: positivePrice,
          cartItemNumber: newPositiveCartNumber,
        };
      } else {
        return {
          ...state,
          restName: action.payload.postName,
          restId: action.payload.postId,
          plates: [action.payload.plate],
          totalPrice: positivePrice,
          cartItemNumber: newPositiveCartNumber,
        };
      }
    case t.REMOVE_PLATE:
      console.log('removed', action.payload);
      let newPlates = state.plates.filter((res) => {
        return res.name !== action.payload.name;
      });
      let negativePrice = state.totalPrice === 0 ? 0 : state.totalPrice - action.payload.price;
      let newNegativeCartNumber = state.cartItemNumber === 0 ? 0 : state.cartItemNumber - 1;

      return {
        ...state,
        plates: [...newPlates],
        totalPrice: negativePrice,
        cartItemNumber: newNegativeCartNumber,
      };

    default:
      return state;
  }
};

export default cartReducer;
