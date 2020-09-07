import axios from 'axios';
import router from 'next/router';

import * as t from '../types';

export const getOrders = () => async (dispatch, getState) => {
  const token = getState().auth.data.access_token;
  console.log(token);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + token,
  };

  const data = await axios
    .get('https://dood.devzone-dz.com/api/orders', { headers })
    .then((res) => {
      console.log(res);
      dispatch({ type: t.GET_ORDERS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
};

export const addOrder = (order) => async (dispatch, getState) => {
  console.log(order);
  dispatch({ type: t.ORDER_LOADING });
  const token = getState().auth.data.access_token;

  let newItems = JSON.stringify(order.items);

  console.log(newItems);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + token,
  };
  console.log(JSON.stringify(order));
  const data = await axios
    .post(`https://dood.devzone-dz.com/api/orders`, { ...order, items: newItems }, { headers })
    .then((res) => {
      console.log(res);
      dispatch({ type: t.ADD_ORDER });
      dispatch({ type: t.CLEAR_CART });
      router.push('/');
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
};
