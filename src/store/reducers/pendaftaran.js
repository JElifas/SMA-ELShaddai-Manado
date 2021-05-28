import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: [],
  modalToggler: false
}

const daftarBaruStart = (state) => {
  return {
    ...state,
    loading: true,
    error: []
  }
}

const daftarBaruSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    modalToggler: true
  }
}

const daftarBaruFail = (state, action) => {
  const errorMsg = [];
  errorMsg.push(action.error.message.map(err => err.msg));

  return {
    ...state,
    loading: false,
    error: errorMsg
  }
}

const reset = (state) => {
  return {
    ...state,
    error: []
  }
}

const modalToggler = (state) => {
  return {
    ...state,
    modalToggler: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DAFTAR_BARU_START: return daftarBaruStart(state);
    case actionTypes.DAFTAR_BARU_SUCCESS: return daftarBaruSuccess(state, action);
    case actionTypes.DAFTAR_BARU_FAIL: return daftarBaruFail(state, action);

    case actionTypes.RESET_ERROR_PENDAFTARAN: return reset(state);
    case actionTypes.MODAL_TOGGLER_HANDLER: return modalToggler(state);

    default:
      return state;
  }
}

export default reducer;