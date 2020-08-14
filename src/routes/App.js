import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Global from '../containers/Global';
import Country from '../containers/Country';
import TakeCare from '../containers/TakeCare';
import Error404 from '../containers/Error404';
import Wrapper from '../components/Wrapper';

const App = () => (
  <HashRouter basename='/'>
    <Wrapper>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/global' component={Global} />
        <Route exact path='/country/:id' component={Country} />
        <Route exact path='/take-care' component={TakeCare} />
        <Route component={Error404} />
      </Switch>
    </Wrapper>
  </HashRouter>
);

export default App;
