import axios from 'axios';
import { types } from '../store';

const changeHomeData = (data) => ({
  type: types.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articList: data.articList,
  recommendList: data.recommendList,
  Writers: data.Writers
});

const addHomeList = (List, page) => ({
  type: types.ADD_ARTICLE_LIST,
  List,
  page
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((response) => {
      let data = response.data.data;
      const action = changeHomeData(data);
      dispatch(action);
    })
  };
};

export const getMoreLists = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json', {
      params: {
        page: page + 1
      }
    }).then((response) => {
      let data = response.data.data;
      const action = addHomeList(data, page + 1);
      
      dispatch(action);
    })
  }
};

export const toggleTopShow = (show) => ({
  type: types.SCROLL_BACK_TOP,
  showScroll: show
});