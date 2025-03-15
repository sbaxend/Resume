import React, { useState } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import ClickToStart from '../ClickToStart/ClickToStart';  // Import ClickToStart
import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ClickToStart />
          </Route>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/info" component={InfoPage} />
          <Route
            exact
            path="/home"
            render={() => (user.id ? <Redirect to="/LandingPage" /> : <LandingPage />)}
          />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
