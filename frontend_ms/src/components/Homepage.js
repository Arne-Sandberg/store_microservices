import React, { Component } from 'react';
import {logout} from './Authentication';
import axios from 'axios';

class Homepage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: []
        };
    }

    getInitialState() {
        return {'user':[]};
    }

    componentDidMount() {
        this.loadUserData();
    }

    contextTypes() {
        router: React.PropTypes.object.isRequired;
    }

    logoutHandler() {
        logout();
        // this.context.router.replace('/login/');
        // document.history.push('/login');
    }

    loadUserData() {

        axios.get('http://localhost:8003/profile/' + localStorage.user_id, {
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
        })
        .then(function (response) {
            this.setState({ user: response });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h1>You are now logged in, {this.state.user.username}</h1>
                <button onClick={this.logoutHandler}>Log out</button>
            </div>
        )
    }
}

export default Homepage;
