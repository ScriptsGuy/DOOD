import axios from 'axios';
import * as t from '../types';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const Login = ({ email, password }) => async (dispatch) => {
  console.log(email);
  console.log(password);
  const data = await axios
    .post('https://dood.devzone-dz.com/api/login', { email, password }, headers)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
  //   dispatch({
  //     type: t.GET_LOGIN,
  //     payload: 'AUTH EXIST',
  //   });
};
