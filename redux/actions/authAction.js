import axios from 'axios';
import * as t from '../types';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const Login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: t.AUTH_LOADING });
  const data = await axios
    .post('https://dood.devzone-dz.com/api/login', { email, password }, { headers })
    .then((res) => {
      console.log(res);
      if (res.data.message) {
        dispatch({
          type: t.AUTH_ERROR,
          payload: res.data,
        });
      } else {
        dispatch({
          type: t.AUTH_LOGIN,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: t.AUTH_ERROR,
        payload: { message: 'Something went wrong!!!' },
      });
    });

  console.log(data);
};
export const Register = ({ name, phone, email, password, confirm_password }) => async (
  dispatch
) => {
  dispatch({ type: t.AUTH_LOADING });
  const data = await axios
    .post(
      'https://dood.devzone-dz.com/api/register',
      { name, phone, email, password, confirm_password },
      { headers }
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: t.AUTH_REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: t.AUTH_ERROR,
        payload: { message: 'Something went wrong!!!' },
      });
    });

  console.log(data);
};
export const Logout = () => async (dispatch) => {
  console.log('logginout!!!!');
  dispatch({ type: t.AUTH_LOGOUT });
};
export const ClearError = () => async (dispatch) => {
  console.log('CLEARING!!!!');
  dispatch({ type: t.AUTH_CLEAR_ERROR });
};
