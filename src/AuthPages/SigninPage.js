import React, { Component } from 'react'
import { signinUser } from '../components/utils.js';

export default class SigninPage extends Component {
    state = {
        email: '',
        password: ''
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signinUser(
            this.state.email,
            this.state.password);

            this.props.handleUserChange(user);
            this.props.history.push('/FavListPage');
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div><h3>Sign In</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:<input value={this.state.value} onChange={this.handleEmailChange}/></label>
                    <label>Password:<input value={this.state.value} onChange={this.handlePasswordChange}/></label>
                    <button>Sign In</button>
                </form>
                <h3>Sign In Page</h3>
            </div>
        )
    }
}