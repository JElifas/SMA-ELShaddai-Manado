import React from 'react';

import Map from '../../components/Map/Map';

import './Kontak.scss';

const Kontak = props => {
  return (
    <section className="Kontak">
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDn7u2vEL9X29UPEeKPvF-TyE79rj7WCFM`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <div className="Kontak_Description">
        <div className="Kontak_Content">
          <h2>Kontak Kami</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
          <div className="Kontak_Street">
            <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" /></svg>
            <span>Jl. Ahmad Yani No.12/7, Sario Tumpaan, Kec. Sario, Kota Manado, Sulawesi Utara</span>
          </div>
        </div>
        <div className="Kontak_Icon">
          <div className="Kontak_Phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" /></svg>
            <span>0431-860644</span>
          </div>
          <div className="Kontak_Email">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" /></svg>
            <span>kontak@mail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kontak;