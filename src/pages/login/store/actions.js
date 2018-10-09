import axios from 'axios';
import { types } from '../store';

const changeLogin = (login) => ({
  type: types.CHANGE_LOGIN,
  login
});

const changeLogout = () => ({
  type: types.CHANGE_LOGOUT
});

export const Login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json', {
      params: {
        account,
        password
      }
    }).then((res) => {
      const data = res.data.data;

      if (data) {
        dispatch(changeLogin(data))
      } else {
        alert("登录失败");
      }
    });
  }
};

export const Logout = () => {
  return (dispatch) => {
    dispatch(changeLogout());
  }
};