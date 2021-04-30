import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
import './App.scss';

const Home = React.lazy(() => {
  return import('./containers/Home/Home');
});

const App = props => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
