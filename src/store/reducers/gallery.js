import * as actionTypes from '../actions/actionTypes';

const initialState = {
  image: [],
  loading: false
}

const fetchImageStart = (state) => {
  return {
    ...state,
    loading: true
  }
}

const fetchImageSuccess = (state, action) => {
  return {
    ...state,
    image: action.image,
    loading: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGE_GALLERY_START: return fetchImageStart(state);
    case actionTypes.FETCH_IMAGE_GALLERY_SUCCESS: return fetchImageSuccess(state, action);

    default:
      return state;
  }
}

export default reducer;