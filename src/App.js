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

const App = props => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/Pendaftaran" exact render={(props) => <Pendaftaran {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
