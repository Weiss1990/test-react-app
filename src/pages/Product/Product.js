import React from 'react';
import ProductsService from '../../services/ProductsService';
import {connect} from 'react-redux';
import {addProductToCart} from "../../actions/cartActions";

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        this.initProductDetails();
    }

    async initProductDetails() {
        if (this.props.location.productDetails) {
            this.getProductDetailsFromLocation();
        } else {
            await this.getProductDetailsFromServer();
        }
    }

    getProductDetailsFromLocation() {
        this.setState({
            product: {
                id: +this.props.match.params.productId,
                category: this.props.match.params.category,
                productName: this.props.location.productDetails.productName,
                price: this.props.location.productDetails.price
            }
        });
    }

    async getProductDetailsFromServer() {
        const data = await ProductsService.getProductById(this.props.match.params.productId);
        this.setState({
            product: data
        });
    }

    addProductToCart() {
        this.props.addProductToCart(this.state.product);
    }

    render() {
        return (
            <div className="product-description-wrapper">
                <h2>{this.state.product.productName}</h2>
                <p>Price of product is: {this.state.product.price}</p>
                <button onClick={() => {
                    this.addProductToCart()
                }}>Add to Cart</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addProductToCart
}

export default connect(null, mapDispatchToProps)(Product);