import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchBerita = () => {
  return dispatch => {
    dispatch(fetchBeritaStart());
    axios.get('/berita')
      .then(res => {
        dispatch(fetchBeritaSuccess(res.data));
      }).catch(err => {
        console.log(err);
      })
  }
}

const fetchBeritaStart = () => {
  return {
    type: actionTypes.FETCH_BERITA_START
  }
}

const fetchBeritaSuccess = (resData) => {
  return {
    type: actionTypes.FETCH_BERITA_SUCCESS,
    dataBerita: resData.response
  }
}