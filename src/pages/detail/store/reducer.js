import { fromJS  } from 'immutable';
import { types } from '../store';

const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_DETAIL_DATA:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default: 
      return state;
  }
};