import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchImageGallery = () => {
  return dispatch => {
    dispatch(fetchImageStart());
    axios.get('/gallery')
      .then(res => {
        dispatch(fetchImageSuccess(res.data));
      }).catch(err => {
        console.log(err);
      });
  }
}

const fetchImageStart = () => {
  return {
    type: actionTypes.FETCH_IMAGE_GALLERY_START,
  }
}

const fetchImageSuccess = (imageData) => {
  return {
    type: actionTypes.FETCH_IMAGE_GALLERY_SUCCESS,
    image: imageData.response
  }
}