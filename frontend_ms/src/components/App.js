import React, { Component } from 'react';
import '../static/css/App.css';
import ProductList from './ProductList';
import Header from './Header';
import ShoppingCart from './ShoppingCart';
import { BrowserRouter, Route, Router, Link, Switch } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);

        var cart = JSON.parse(localStorage.getItem("cart"));

        if (!cart){
            this.state = {
                cart_size: 0
            }
        } else {
            this.state = {
                cart_size: Object.keys(cart).length | 0
            };
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="wrapper">
                    Shopping Cart: {this.state.cart_size}
                </div>

                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" component={ProductList} />
                            <Route path="/shopping_cart" component={ShoppingCart} />
                        </Switch>
                    </div>
                </BrowserRouter>

                <ShoppingCart/>
            </div>
        );
    }
}

export default App;