import { fromJS  } from 'immutable';
import { types } from './index.js';

const defaultState = fromJS({
  focused: false,
  recommendHover: false,
  lists: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH_FOCUS:
      return state.set('focused', true);
    case types.SEARCH_BLUR:
      return state.set('focused', false);
    case types.RECOMMEND_ENTER:
      return state.set('recommendHover', true);
    case types.RECOMMEND_LEAVE:
      return state.set('recommendHover', false);
    case types.GET_LISTS_DATA:
      return state.merge({
        lists: action.lists,
        totalPage: action.totalPage
      });
    case types.CHANGE_PAGE:
      return state.set('page', action.page);
    default: 
      return state;
  }
};