import axios from 'axios';
import { fromJS } from 'immutable';
import { types } from './index.js';

const getListsData = (data) => {
  return {
    type: types.GET_LISTS_DATA,
    lists: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
};

export const searchFocusAction = () => {
  return {
    type: types.SEARCH_FOCUS
  }
};

export const searchBlurAction = () => {
  return {
    type: types.SEARCH_BLUR
  }
};

export const recommendEnterAction = () => {
  return {
    type: types.RECOMMEND_ENTER
  }
};

export const recommendLeaveAction = () => {
  return {
    type: types.RECOMMEND_LEAVE
  }
};

export const getListAction = () => {
  return (dispatch) => {
    axios.get("/api/headerLists.json").then((response) => {
      const data = response.data;
      if (data.success) {
        let action = getListsData(data.lists);
        dispatch(action);
      }
    }).catch((e) => {
      console.log("network error");
    });
  }
}

export const changePage = (page) => {
  return {
    type: types.CHANGE_PAGE,
    page
  }
};