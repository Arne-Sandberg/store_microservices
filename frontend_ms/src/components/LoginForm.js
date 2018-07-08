import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {login} from './Authentication';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        var username = this.state.username;
        var pass = this.state.password;

        login(username, pass, (loggedIn) => {
            if (loggedIn) {

            }
        });
    }

    render(){
        return (
            <div>
                <Link to='/home'>Home</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input type="text" placeholder="username" name="username" value={this.state.username}
                               onChange={this.handleInputChange} />
                    </label>
                    <label>Password
                        <input type="password" placeholder="password" name="password" value={this.state.password}
                               onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Login;
