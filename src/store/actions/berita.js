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

export const fetchSingleBerita = (id) => {
  return dispatch => {
    dispatch(fetchSingleBeritaStart());
    axios.get('/berita/' + id)
      .then(res => {
        dispatch(fetchSingleBeritaSuccess(res.data));
      }).catch(() => {
        dispatch(fetchSingleBeritaFail());
      })
  }
}

const fetchSingleBeritaStart = () => {
  return {
    type: actionTypes.FETCH_SINGLE_BERITA_START
  }
}

const fetchSingleBeritaSuccess = (resData) => {
  return {
    type: actionTypes.FETCH_SINGLE_BERITA_SUCCESS,
    singleBerita: resData.response
  }
}

const fetchSingleBeritaFail = () => {
  return {
    type: actionTypes.FETCH_SINGLE_BERITA_FAIL
  }
}