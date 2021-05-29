import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import LandingPage from '../../components/Home/LandingPage/LandingPage';
import About from '../../components/Home/About/About';
import Berita from '../../components/Home/Berita/Berita';

const Home = props => {
  const { onFetchBerita } = props;

  useEffect(() => {
    onFetchBerita();
  }, [onFetchBerita]);

  const onClickBeritaHandler = (id) => {
    props.history.replace('/Berita/' + id);
  }

  return (
    <React.Fragment>
      <LandingPage />
      <About />
      <Berita click={onClickBeritaHandler} />
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    dataBerita: state.beritaReducer.berita,
    loading: state.beritaReducer.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchBerita: () => dispatch(actions.fetchBerita())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);