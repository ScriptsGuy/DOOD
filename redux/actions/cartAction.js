import * as t from '../types';

export const addPlate = (plate, post) => async (dispatch, getState) => {
  let restId = getState().cart.restId;
  if (restId !== post.id) {
    dispatch({ type: t.CLEAR_CART });
    dispatch({ type: t.ADD_PLATE, payload: { post, plate } });
  } else {
    dispatch({ type: t.ADD_PLATE, payload: { post, plate } });
  }
  console.log(plate, post);
};

export const removePlate = (plate) => async (dispatch, getState) => {
  console.log(plate);
  dispatch({ type: t.REMOVE_PLATE, payload: plate });
};

///////////////////////////////////////////////

export const addFormule = (formule, post) => async (dispatch, getState) => {
  console.log(formule, post);
  let restId = getState().cart.restId;

  if (restId !== post.id) {
    dispatch({ type: t.CLEAR_CART });
    dispatch({ type: t.ADD_FORMULE, payload: { post, formule } });
  } else {
    dispatch({ type: t.ADD_FORMULE, payload: { post, formule } });
  }
};

export const removeFormule = (formule) => async (dispatch, getState) => {
  console.log(formule);
  dispatch({ type: t.REMOVE_FORMULE, payload: formule });
};

/////////////////////////////////////////////////

export const qntUp = (formule, plate) => async (dispatch, getState) => {
  console.log('plateeeeee', plate);
  console.log('formulllee', formule);
  if (plate) {
    dispatch({ type: t.PLATE_QNT_UP, payload: plate });
  } else {
    dispatch({ type: t.FORMULE_QNT_UP, payload: formule });
  }
};
export const qntDown = (formule, plate) => async (dispatch, getState) => {
  console.log('plateeeeeee', plate);
  console.log('formuleeee', formule);
  if (plate) {
    dispatch({ type: t.PLATE_QNT_DOWN, payload: plate });
  } else {
    dispatch({ type: t.FORMULE_QNT_DOWN, payload: formule });
  }
};
