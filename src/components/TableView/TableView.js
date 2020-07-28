import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import "./TableView.css";

class TableView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
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
                                        pathname: `/product/${this.props.category}/${product.productName}`,
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
    category: PropTypes.string,
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