import { fromJS  } from 'immutable';
import { types } from '../store';

const defaultState = fromJS({
  topicList: [],
  articList: [],
  recommendList: [],
  Writers: [],
  articPage: 0,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articList: fromJS(action.articList),
    recommendList: fromJS(action.recommendList),
    Writers: fromJS(action.Writers)
  });
};

const addArticleList = (state, action) => {
  return state.merge({
    articList: state.get('articList').concat(fromJS(action.List)),
    articPage: action.page
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA: 
      return changeHomeData(state, action);
    case types.ADD_ARTICLE_LIST: 
      return addArticleList(state, action);
    case types.SCROLL_BACK_TOP: 
      return state.set('showScroll', action.showScroll);
    default: 
      return state;
  }
};