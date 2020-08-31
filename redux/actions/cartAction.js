import * as t from '../types';

export const addPlate = (plate, postName, postId) => async (dispatch, getState) => {
  let restId = getState().cart.restId;
  if (restId !== postId) {
    dispatch({ type: t.CLEAR_CART });
    dispatch({ type: t.ADD_PLATE, payload: { postId, postName, plate } });
  } else {
    dispatch({ type: t.ADD_PLATE, payload: { postId, postName, plate } });
  }
  console.log(plate, postName);
};
export const removePlate = (plate) => async (dispatch, getState) => {
  console.log(plate);
  dispatch({ type: t.REMOVE_PLATE, payload: plate });
};
