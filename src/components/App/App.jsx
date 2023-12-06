import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ClickToStart from '../ClickToStart/ClickToStart';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const history = useHistory()
  const [startingScreenClicked, setStartingScreenClicked] = useState(false);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  const handleStartingScreenClick = () => {
    setStartingScreenClicked(true);
    history.push('/home');
  };

  if (!startingScreenClicked) {
    return <ClickToStart onClick={handleStartingScreenClick} />;
  }

    
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/about" component={AboutPage} />
          <ProtectedRoute exact path="/user" component={UserPage} />
          <ProtectedRoute exact path="/info" component={InfoPage} />
          <Route 
            exact 
            path="/login" 
            render={() => user.id ? <Redirect to="/user" /> : <LoginPage />}
          />
          <Route 
            exact 
            path="/registration" 
            render={() => user.id ? <Redirect to="/user" /> : <RegisterPage />}
          />
          <Route 
            exact 
            path="/home" 
            render={() => user.id ? <Redirect to="/user" /> : <LandingPage />}
          />
          <Route render={() => <h1>404</h1>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
  
}

export default App;
