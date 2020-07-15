import React from "react";
import connect from "react-redux/es/connect/connect";
import {removeProductFromCart} from "../../actions/cartActions";
import PropTypes from "prop-types";

class CartSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0
        }
    }

    componentDidMount() {
        if (this.props.addedProducts.length > 0) {
            this.countTotalPrice();
        }
    }

    removeProductFromCart(id) {

        const index = this.props.addedProducts.findIndex((product) => {
            return product.id == id;
        });

        const a = this.props.addedProducts.slice(0, index);
        const b = this.props.addedProducts.slice(index + 1);

        const result = a.concat(b);

        this.props.removeProductFromCart(result);
        setTimeout(() => {
            this.countTotalPrice();
        });

    }

    countTotalPrice() {

        if (this.props.addedProducts.length > 0) {
            const totalPrice = this.props.addedProducts.map((product) => {
                return product.price
            }).reduce((prev, current) => {
                return prev + current;
            });

            this.setState({
                totalPrice
            })
        }
    }

    render() {
        return (<div>
                    {this.props.addedProducts.length > 0 ?
                        (<div>

                            {this.props.addedProducts.map((product, index) => {
                                    return (
                                        <div key={index}>
                                            <h3>{product.productName}</h3>
                                            <p>Price: {product.price}</p>
                                            <button onClick={() => {
                                                this.removeProductFromCart(+product.id);
                                            }}>remove</button>
                                        </div>

                                    )
                                }
                            )}
                            <div>
                                Total price is: {this.state.totalPrice}
                            </div>
                        </div>)
                        : (
                        <h3>There is no products in the cart!</h3>
                    )}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        addedProducts: state.cart.productsInCart
    }
}

const mapDispatchToProps = {
    removeProductFromCart
}

CartSummary.propTypes = {
    addedProducts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            category: PropTypes.number,
            productName: PropTypes.string,
            price: PropTypes.number
        })
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);