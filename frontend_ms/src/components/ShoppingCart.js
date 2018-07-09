import React, { Component } from 'react';
import '../static/css/App.css';
import ShoppingCartList from './ShoppingCartList'
import Header from './Header';

class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        var cart = JSON.parse(localStorage.getItem("cart"));

        if (!cart){
            this.state = {
                cart_size: 0,
                cart: {}
            }
        } else {
            this.state = {
                cart_size: Object.keys(cart).length | 0,
                cart: cart
            };
        }
    }

    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <ShoppingCartList cart={this.state.cart}/>
            </div>
        );
    }
}

export default ShoppingCart;
