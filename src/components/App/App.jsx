import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import ClickToStart from '../ClickToStart/ClickToStart';
import MainResumePage from '../MainResumePage/MainResumePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ClickToStart} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/resume" component={MainResumePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/info" component={InfoPage} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
