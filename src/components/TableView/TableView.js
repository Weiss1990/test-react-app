import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import "./TableView.css";

class TableView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table-view">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.props.products.map((product, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <Link to={
                                    {
                                        pathname: `/product/${product.category}/${product.id}`,
                                        productDetails: product
                                    }
                                }>
                                    {product.productName}
                                </Link>
                            </td>
                            <td>{product.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

TableView.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            category: PropTypes.number,
            productName: PropTypes.string,
            price: PropTypes.number
        })
    )
}

export default TableView;