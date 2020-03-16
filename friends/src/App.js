import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friendslist">Friends List</Link>
        </li>
      </ul>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>

        <Switch>
          <PrivateRoute exact path='/friendslist' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
