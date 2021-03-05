import React, { Component } from 'react'
import { signupUser } from '../components/utils.js';

export default class SignupPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signupUser(
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
            <div><h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:<input value={this.state.value} onChange={this.handleEmailChange}/></label>
                    <label>Password:<input value={this.state.value} onChange={this.handlePasswordChange}/></label>
                    <button>Sign Up</button>
                </form>
                <h3>Sign up Page</h3>
            </div>
        )
    }
}