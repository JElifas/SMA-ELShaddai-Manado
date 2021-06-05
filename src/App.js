import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
import './App.scss';

const Home = React.lazy(() => {
  return import('./containers/Home/Home');
});

const Pendaftaran = React.lazy(() => {
  return import('./containers/Pendaftaran/Pendaftaran');
});

const Berita = React.lazy(() => {
  return import('./containers/Berita/Berita');
});

const Kontak = React.lazy(() => {
  return import('./containers/Kontak/Kontak');
});

const Gallery = React.lazy(() => {
  return import('./containers/Gallery/Gallery');
});

const Guru = React.lazy(() => {
  return import('./containers/Guru/Guru');
});

const App = props => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/Pendaftaran" exact render={(props) => <Pendaftaran {...props} />} />
          <Route path="/Berita/:id" exact render={(props) => <Berita {...props} />} />
          <Route path="/Kontak" exact render={(props) => <Kontak {...props} />} />
          <Route path="/Gallery" exact render={(props) => <Gallery {...props} />} />
          <Route path="/Guru" exact render={(props) => <Guru {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
