import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './views/landingPage/LandingPage';
import NotFound from './views/notFoundView/NotFoundView';
import LogoutPage from './views/logout/Logout';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <>
          <Switch>
            <Route exact path='/' component={LandingPage} />
              <Route exact path='/logout' component={LogoutPage} />
            <Route component={NotFound} />
          </Switch>
        </>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
