import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import * as actions from '../../store/actions/index';

import ListImage from '../../components/ListImage/ListImage';
import Spinner from '../../components/UI/Spinner/Spinner';
import ModalImage from '../../components/UI/ModalImage/ModalImage';
import SingleImage from '../../components/ListImage/SingleImage/SingleImage';

const Guru = props => {
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

  let listImage = <Spinner />;
  if (!props.loading) {
    listImage = <ListImage previewImg={props.image} modalImage={onImageSelectedHandler} url_type='guru/' />;
  }

  return (
    <React.Fragment>
      <ModalImage show={modalToggler} clicked={modalTogglerHandler} >
        <SingleImage image={singleImage} url_type='guru/' />
      </ModalImage>
      {listImage}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    image: state.guruReducer.image,
    loading: state.guruReducer.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchImage: () => dispatch(actions.fetchImageGuru())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guru, axios);