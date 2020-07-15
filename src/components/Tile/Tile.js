import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import './Tile.css'

class Tile extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="tile">
                <h3>{this.props.product.productName}</h3>
                <p>Price: {this.props.product.price}</p>
                <button>
                    <Link to={
                        {
                            pathname: this.props.link,
                            productDetails: this.props.product
                        }
                    }>
                        View
                    </Link>
                </button>
            </div>
        )
    }
}

Tile.propTypes = {
    product: PropTypes.object,
    link: PropTypes.string
}

export default Tile;