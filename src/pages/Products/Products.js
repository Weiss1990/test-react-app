import React from 'react';
import ProductsService from '../../services/ProductsService';
import {Link, withRouter} from 'react-router-dom';
import './Products.css';
import TilesContainer from "../../components/TilesContainer/TilesContainer";
import TableView from "../../components/TableView/TableView";

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            displayTable: false
        }
    }

    async loadProductsList(categoryId) {
        const productsList = await ProductsService.getProductsByCategory(categoryId);
        this.setState({'products': productsList});
    }

    async componentDidMount() {

        await this.loadProductsList(this.props.match.params.category);
    }

    async shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (this.props.match.params.category !== nextProps.match.params.category) {

            await this.loadProductsList(nextProps.match.params.category);
        }
    }

    toggleDisplayMode(mode) {
        this.setState({
            displayTable: mode
        })
    }

    render() {
        return (
            <div>
                <div className="view-toggler">
                    <button className={this.state.displayTable ? 'left' : 'active left'}
                            onClick={() => {this.toggleDisplayMode(false)}}>
                        Tiles
                    </button>
                    <button className={this.state.displayTable ? 'active right' : 'right'}
                            onClick={() => {this.toggleDisplayMode(true)}}>
                        Table
                    </button>
                </div>
                {this.state.displayTable ? (
                    <TableView products={this.state.products} />
                ) : (
                    <TilesContainer products={this.state.products} />
                )}

            </div>
        )
    }
}

export default withRouter(Products);