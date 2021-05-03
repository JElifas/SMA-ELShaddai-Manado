import * as actionTypes from '../actions/actionTypes';

const initialState = {
  berita: [],
  loading: false,
  error: false
}

const fetchBeritaStart = (state) => {
  return {
    ...state,
    loading: true,
  }
}

const fetchBeritaSuccess = (state, action) => {
  return {
    ...state,
    berita: action.dataBerita,
    loading: false,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BERITA_START: return fetchBeritaStart(state);
    case actionTypes.FETCH_BERITA_SUCCESS: return fetchBeritaSuccess(state, action);
    
    default:
      return state;
  }
}

export default reducer;