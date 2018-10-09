import axios from 'axios';
import { types } from '../store';

const changeDetail = (title, content) => ({
  type: types.GET_DETAIL_DATA,
  title,
  content
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json', {
      params: {
        id
      }
    }).then((res) => {
      let data = res.data.data;

      dispatch(changeDetail(data.title, data.content));
    });
  }
};