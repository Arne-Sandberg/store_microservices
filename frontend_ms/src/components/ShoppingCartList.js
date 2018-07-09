import React, { Component } from 'react';
import '../static/css/ProductList.css';
import ShoppingCartListItem from './ShoppingCartListItem';

class ShoppingCartList extends Component {

    errorMessage = "Ops! Something went wrong!"

    constructor(props) {
        super(props);
        this.state = {
            shopping_cart: [],
            errorMessage: "",
            cart_total: 0,
        }

        this.fetchProducts = this.fetchProducts.bind(this);
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts() {
        var cart_total = 0
        fetch('http://localhost:9001/store/')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                var s_cart = []
                for (var el in json.catalog){
                    if (el in this.props.cart){
                        s_cart.push(json.catalog[el])
                        cart_total += parseFloat(json.catalog[el].price)
                    }
                }
                this.setState({
                    shopping_cart: s_cart,
                    cart_total: cart_total,
                })
            })
            .catch((exception) => {
                console.log('parsing failed', exception)
                this.setState({errorMessage: this.errorMessage})
            })
    }

    render() {
        return (
            <div>
                <p>Total: {this.state.cart_total}</p>
                <ul className="ProductList">
                    {this.state.shopping_cart.map((product) =>
                            <ShoppingCartListItem
                                             name={product.name}
                                             price={product.price}
                                             description={product.description}
                                             code={product.code}
                                             quantity={product.quantity}
                                             location={product.location}
                                             product_id={product.id}/>

                    )};
                </ul>
                <div>{this.state.errorMessage}</div>
            </div>
        );
    }
}

export default ShoppingCartList;