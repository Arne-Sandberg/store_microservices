import React, { Component } from 'react';
import logo from '../static/images/surfboard_1.png';
import '../static/css/App.css';
import ProductList from './ProductList';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="title">Ericeira Surf Shop</p>
                </header>
                <ProductList/>
            </div>
        );
    }
}

export default App;