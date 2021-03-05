import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/search">Search</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/SigninPage">Sign In</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/SignupPage">Sign Up</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/FavListPage">Favorites List</NavLink></li>
                    <li><button onClick={this.props.handleLogout}>Sign Out</button></li>
                </ul>
            </div>
        )
    }
}