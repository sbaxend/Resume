import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import UserPage from '../UserPage/UserPage';
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
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
