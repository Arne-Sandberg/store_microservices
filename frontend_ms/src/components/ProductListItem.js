import React, { Component } from 'react';
import '../static/css/ProductListItem.css';
// import Flag from './Flag';
// import Anthem from './Anthem';
import Illustration from './Illustration'

class ProductListItem extends Component {
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

export default ProductListItem;