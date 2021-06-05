import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchImageGuru = () => {
  return dispatch => {
    dispatch(fetchImageStart());
    axios.get('/guru')
      .then(res => {
        dispatch(fetchImageSuccess(res.data));
      }).catch(err => {
        console.log(err);
      });
  }
}

const fetchImageStart = () => {
  return {
    type: actionTypes.FETCH_IMAGE_GURU_START,
  }
}

const fetchImageSuccess = (imageData) => {
  return {
    type: actionTypes.FETCH_IMAGE_GURU_SUCCESS,
    image: imageData.response
  }
}