import { fromJS  } from 'immutable';
import { types } from '../store';

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_LOGIN: 
      return state.set("login", action.login);
    case types.CHANGE_LOGOUT: 
      return state.set("login", false);
    default: 
      return state;
  }
};