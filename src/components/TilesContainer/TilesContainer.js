import React from "react";
import PropTypes from 'prop-types';
import './TilesContainer.css';
import Tile from "../Tile/Tile";

class TilesContainer extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="tiles-container">
                {this.props.products.map((product, index) => {
                    return (<Tile product={product} link={`/product/${this.props.category}/${product.productName}`} key={index} />)
                })}
            </div>
        )
    }
}

TilesContainer.propTypes = {
    category: PropTypes.string,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            productName: PropTypes.string,
            price: PropTypes.number,
            category: PropTypes.number
        })
    )
}

export default TilesContainer;