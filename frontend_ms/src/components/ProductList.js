import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
import '../static/css/ProductList.css';

class ProductList extends Component {

    errorMessage = "Ops! Something went wrong!"

    constructor(props) {
        super(props);
        this.state = {
            store_products: [],
            errorMessage: ""
        }

        this.fetchProducts = this.fetchProducts.bind(this);
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts() {
        fetch('http://localhost:9001/store/')
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((json) => {
                console.log(json)
                this.setState({
                    store_products: json.catalog
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
                <h1>Store</h1>
                <ul className="ProductList">
                    {this.state.store_products.map((product) =>
                        <ProductListItem key={product.code}
                                         name={product.name}
                                         price={product.price}
                                         description={product.description}
                                         code={product.code}
                                         quantity={product.quantity}
                                         location={product.location}
                                         product_id={product.id}/>
                    )}
                </ul>
                <div>{this.state.errorMessage}</div>
            </div>
        );
    }
}

export default ProductList;