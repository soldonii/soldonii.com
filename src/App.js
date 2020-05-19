import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import GlobalStyle from './components/Layout/GlobalStyle';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';

import history from './lib/history';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <Main title1='Profile' title2='Projects' />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
      </Switch>
    </Router>
  </Fragment>
);

export default App;
