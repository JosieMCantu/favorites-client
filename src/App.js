import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SigninPage from './AuthPages/SigninPage.js';
import HomePage from './components/HomePage.js';
import Header from './components/Header.js';
import SignupPage from './AuthPages/SignupPage.js';
import FavListPage from './ListPage/FavListPage.js';
import FavSearchPage from './FavSearchPage/FavSearchPage.js';
import { putUserInLocalStorage, getUserFromLocalStorage } from './components/utils.js';
import PrivateRoute from './components/PrivateRoute.js'


export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  };

  handleUserChange = (user) => {
    this.setState({user});
    putUserInLocalStorage(user);
  }
  handleLogout = () => {
    this.handleUserChange();
  }

  render() {
    const {user} = this.state;
    return (
      <div>
        <Router>
          <Header handleLogout={this.handleLogout} user={this.state.user}/>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <FavSearchPage user = {this.state.user} {...routerProps} />}
            />
            <Route
              path="/SigninPage"
              exact
              render={(routerProps) => <SigninPage handleUserChange = {this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/SignupPage"
              exact
              render={(routerProps) => <SignupPage handleUserChange = {this.handleUserChange} {...routerProps} />}
            />
            <PrivateRoute
              path="/FavListPage"
              exact
              token={user && user.token}
              render={(routerProps) => <FavListPage user={this.state.user} {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
