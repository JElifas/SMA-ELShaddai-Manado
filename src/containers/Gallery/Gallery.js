import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import * as actions from '../../store/actions/index';

import ListGallery from '../../components/ListGallery/ListGallery';
import Spinner from '../../components/UI/Spinner/Spinner';
import ModalImage from '../../components/UI/ModalImage/ModalImage';
import SingleImage from '../../components/ListGallery/SingleImage/SingleImage';

const Gallery = props => {
  const [modalToggler, setModalToggler] = useState(false);
  const [singleImage, setSingleImage] = useState([]);
  const { onFetchImage } = props;

  useEffect(() => {
    onFetchImage();
  }, [onFetchImage]);

  const modalTogglerHandler = () => {
    setModalToggler(!modalToggler);
  }

  const onImageSelectedHandler = id => {
    const data = props.image.filter(data => data.id === id);
    setModalToggler(!modalToggler);
    setSingleImage(data);
  }

  let listGallery = <Spinner />;
  if (!props.loading) {
    listGallery = <ListGallery previewImg={props.image} modalImage={onImageSelectedHandler} />;
  }

  return (
    <React.Fragment>
      <ModalImage show={modalToggler} clicked={modalTogglerHandler} >
        <SingleImage image={singleImage} />
      </ModalImage>
      {listGallery}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    image: state.galleryReducer.image,
    loading: state.galleryReducer.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchImage: () => dispatch(actions.fetchImageGallery())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery, axios);