import React, { Component } from 'react';
import logo from '../static/images/surfboard_1.png';
import '../static/css/App.css';

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="title">Ericeira Surf Shop</p>
            </header>
        )
    }
}

export default Header;