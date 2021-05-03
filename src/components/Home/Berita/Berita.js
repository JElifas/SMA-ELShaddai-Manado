import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../../UI/Spinner/Spinner';
import './Berita.scss';

const Berita = props => {
  let berita = <Spinner />
  if (props.dataBerita) {
    berita = props.dataBerita.slice(0, 4).map(b => {
      const month = new Date(b.createdAt).toLocaleString('default', { month: 'short' });
      const year = new Date(b.createdAt).getFullYear();
      const day = new Date(b.createdAt).getDate();

      return (
        <div className="Berita_Content" 
          key={b.id}
          onClick={() => props.click(b.id)} >
          <h3 className="Content_Title">{b.title}</h3>
          <p>{day} {month} {year}</p>
        </div>
      );
    });
  }

  return (
    <div className="Berita">
      <h1 className="Berita_Title">Berita</h1>
      <div className="Berita_Container">
        <h3 className="Berita_Subtitle">Terbaru</h3>
        {berita}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dataBerita: state.beritaReducer.berita,
    loading: state.beritaReducer.loading
  };
}

export default connect(mapStateToProps)(Berita);