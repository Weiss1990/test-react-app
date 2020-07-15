import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                products in cart:
                {this.props.addedProducts.length > 0 ? (
                    <Link to='/cart-summary'>
                        {this.props.addedProducts.length}
                    </Link>
                ) : this.props.addedProducts.length}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addedProducts: state.cart.productsInCart
    }
}

export default connect(mapStateToProps)(Cart);