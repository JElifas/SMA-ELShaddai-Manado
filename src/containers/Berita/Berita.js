import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import Spinner from '../../components/UI/Spinner/Spinner';
import SingleBerita from '../../components/SingleBerita/SingleBerita';

const Berita = props => {
  const { id } = useParams();
  const { onFetchSingleBerita } = props;

  useEffect(() => {
    onFetchSingleBerita(id);
  }, [onFetchSingleBerita, id]);

  let dataBerita = <Spinner />;
  if(!props.loading) {
    dataBerita = <SingleBerita berita={props.data} editor={props.editorState} />
  }

  return dataBerita;
}

const mapStateToProps = state => {
  return {
    editorState: state.beritaReducer.editorState,
    data: state.beritaReducer.singleBerita,
    loading: state.beritaReducer.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchSingleBerita: (id) => dispatch(actions.fetchSingleBerita(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Berita);