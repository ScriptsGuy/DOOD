import * as t from '../types.js';

const initialState = {
  post: null,
  restName: null,
  restId: null,
  plates: [],
  formules: [],
  totalPrice: 0,
  cartItemNumber: 0,
};

let index;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CLEAR_CART:
      return {
        post: null,
        restName: null,
        restId: null,
        plates: [],
        formules: [],
        totalPrice: 0,
        cartItemNumber: 0,
      };

    ///////////////////////////////////////////////
    case t.FORMULE_QNT_UP:
      console.log('formule qnt up', action.payload);

      let newQntUpFormules = state.formules.filter((res, i) => {
        if (res.formuleName === action.payload.formuleName) {
          index = i;
          console.log(index);
        }
        return res.formuleName !== action.payload.formuleName;
      });
      console.log(newQntUpFormules);
      let newUpFormuleObject = {
        ...action.payload,
        qnt: action.payload.qnt + 1,
        price: action.payload.price + action.payload.unit_price,
      };

      console.log(newUpFormuleObject);
      newQntUpFormules.splice(index, 0, newUpFormuleObject);
      return {
        ...state,
        formules: [...newQntUpFormules],
        totalPrice: state.totalPrice + action.payload.unit_price,
      };
    case t.FORMULE_QNT_DOWN:
      console.log('formule qnt down', action.payload);

      let newQntDownFormules = state.formules.filter((res, i) => {
        if (res.formuleName === action.payload.formuleName) {
          index = i;
          console.log(index);
        }
        return res.formuleName !== action.payload.formuleName;
      });
      console.log(newQntDownFormules);
      let newDownFormuleObject = {
        ...action.payload,
        qnt: action.payload.qnt - 1,
        price: action.payload.price - action.payload.unit_price,
      };
      console.log(newDownFormuleObject);
      newQntDownFormules.splice(index, 0, newDownFormuleObject);

      return {
        ...state,
        formules: [...newQntDownFormules],
        totalPrice: state.totalPrice - action.payload.unit_price,
      };
    case t.PLATE_QNT_UP:
      console.log('plate qnt up', action.payload);
      let newQntUpPlates = state.plates.filter((res, i) => {
        if (res.name === action.payload.name) {
          index = i;
        }
        return res.name !== action.payload.name;
      });
      console.log(newQntUpPlates);
      let newUpPlateObject = {
        ...action.payload,
        qnt: action.payload.qnt + 1,
        price: action.payload.price + action.payload.unit_price,
      };
      console.log(newUpPlateObject);
      console.log(newQntUpPlates);
      newQntUpPlates.splice(index, 0, newUpPlateObject);
      console.log(newQntUpPlates);
      return {
        ...state,
        plates: [...newQntUpPlates],
        totalPrice: state.totalPrice + action.payload.unit_price,
      };
    case t.PLATE_QNT_DOWN:
      console.log('plate qnt down', action.payload);
      console.log('plate qnt up', action.payload);
      let newQntDownPlates = state.plates.filter((res, i) => {
        if (res.name === action.payload.name) {
          index = i;
        }
        return res.name !== action.payload.name;
      });
      console.log(newQntDownPlates);
      let newDownPlateObject = {
        ...action.payload,
        qnt: action.payload.qnt - 1,
        price: action.payload.price - action.payload.unit_price,
      };
      console.log(newDownPlateObject);
      newQntDownPlates.splice(index, 0, newDownPlateObject);

      return {
        ...state,
        plates: [...newQntDownPlates],
        totalPrice: state.totalPrice - action.payload.unit_price,
      };
    ////////////////////////////////////////////////
    case t.ADD_PLATE:
      console.log('added', action.payload.post.id);
      let oldPlates = state.plates;
      let positivePrice = state.totalPrice + action.payload.plate.price;
      let newPositiveCartNumber = state.cartItemNumber + 1;
      if (oldPlates[0]) {
        return {
          ...state,
          post: action.payload.post,
          restId: action.payload.post.id,
          restName: action.payload.post.name,
          plates: [...oldPlates, action.payload.plate],
          totalPrice: positivePrice,
          cartItemNumber: newPositiveCartNumber,
        };
      } else {
        return {
          ...state,
          post: action.payload.post,

          restName: action.payload.post.name,
          restId: action.payload.post.id,
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
    case t.ADD_FORMULE:
      console.log('formule added', action.payload);
      let oldFormules = state.formules;
      let formulePositivePrice = state.totalPrice + action.payload.formule.price;
      let newFormulePositiveCartNumber = state.cartItemNumber + 1;
      if (oldFormules[0]) {
        return {
          ...state,
          post: action.payload.post,
          restId: action.payload.post.id,
          restName: action.payload.post.name,
          formules: [...oldFormules, action.payload.formule],
          totalPrice: formulePositivePrice,
          cartItemNumber: newFormulePositiveCartNumber,
        };
      } else {
        return {
          ...state,
          post: action.payload.post,
          restName: action.payload.post.name,
          restId: action.payload.post.id,
          formules: [action.payload.formule],
          totalPrice: formulePositivePrice,
          cartItemNumber: newFormulePositiveCartNumber,
        };
      }
    case t.REMOVE_FORMULE:
      console.log('formule removed', action.payload);
      let newFormules = state.formules.filter((res) => {
        return res.formuleName !== action.payload.formuleName;
      });
      console.log(newFormules);
      let negativeFormulePrice =
        state.totalPrice === 0 ? 0 : state.totalPrice - action.payload.price;
      let newNegativeFormuleCartNumber = state.cartItemNumber === 0 ? 0 : state.cartItemNumber - 1;

      return {
        ...state,
        formules: [...newFormules],
        totalPrice: negativeFormulePrice,
        cartItemNumber: newNegativeFormuleCartNumber,
      };

    default:
      return state;
  }
};

export default cartReducer;
