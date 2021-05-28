import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const reset = () => {
  return dispatch => {
    dispatch(resetError());
  }
}

const resetError = () => {
  return {
    type: actionTypes.RESET_ERROR_PENDAFTARAN
  }
}

export const modalTogglerHandler = () => {
  return dispatch => {
    dispatch(modalToggler());
  }
}

const modalToggler = () => {
  return {
    type: actionTypes.MODAL_TOGGLER_HANDLER
  }
}

export const daftarBaru = (data) => {
  return dispatch => {
    dispatch(daftarBaruStart());
    axios.post('/pendaftaran', data)
      .then(res => {
        dispatch(daftarBaruSuccess(res.data));
      }).catch(err => {
        dispatch(daftarBaruFail(err.response.data));
      })
  }
}

const daftarBaruStart = () => {
  return {
    type: actionTypes.DAFTAR_BARU_START
  }
}

const daftarBaruSuccess = (resData) => {
  return {
    type: actionTypes.DAFTAR_BARU_SUCCESS,
    dataBerita: resData.response
  }
}

const daftarBaruFail = (error) => {
  return {
    type: actionTypes.DAFTAR_BARU_FAIL,
    error: error
  }
}