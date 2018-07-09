import React, { Component } from 'react';
import '../static/css/ProductListItem.css';
import Illustration from './Illustration';

class ShoppingCartListItem extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(product_id) {

        var cart = JSON.parse(localStorage.getItem("cart"));
        console.log('Cart iniziale: ')
        console.log(cart)
        if (!cart){
            cart = {}
        }
        // debugger;
        if (product_id in cart){
            cart[product_id] = parseInt(cart[product_id]) + 1
        } else {
            cart[product_id] = 1
        }
        // cart[product_id] = (cart[product_id] || 0) + 1;
        localStorage.setItem("cart", JSON.stringify(cart));

        console.log('Cart finale: ')
        console.log(cart)

    }

    render() {
        return (

            <div className="ProductListItem">
                <h4>{this.props.name}</h4>
                <p>{this.props.price}$</p>
                <div className="wrapper">
                    <Illustration className="Illustration"
                            name={this.props.title}
                            price={this.props.price}
                            />
                </div>
                <div className="wrapper">
                    <p>{this.props.description}</p>
                    <p>CODE: {this.props.code}</p>
                    <p>Available: {(this.props.quantity > 0) ? 'Yes' : 'No'}</p>
                    <p>Location: {this.props.location}</p>
                </div>
            </div>
        );
    }
}

export default ShoppingCartListItem;