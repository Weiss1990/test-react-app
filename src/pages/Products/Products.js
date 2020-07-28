import React from 'react';
import ProductsService from '../../services/ProductsService';
import {Link, withRouter} from 'react-router-dom';
import './Products.css';
import TilesContainer from "../../components/TilesContainer/TilesContainer";
import TableView from "../../components/TableView/TableView";
import connect from "react-redux/es/connect/connect";
import {selectCategory} from "../../actions/categoriesActions";
import {loadProducts} from "../../actions/productActions";
import Loader from "../../components/Loader/Loader";

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
        this.props.callLoadProductsAction(productsList);
    }

     componentDidMount() {
        setTimeout(() => {
            this.loadProductsList(this.props.selectedCategory.id).then();
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        setTimeout(() => {
            this.loadProductsList(this.props.selectedCategory.id).then();
        });
    }

    toggleDisplayMode(mode) {
        this.setState({
            displayTable: mode
        })
    }

    render() {
        return (
            <div>
                {this.props.selectedCategory.name ? (
                    <div>
                        <h1>{this.props.selectedCategory ? this.props.selectedCategory.name : ''}:</h1>
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
                            <TableView products={this.state.products} category={this.props.selectedCategory.name} />
                        ) : (
                            <TilesContainer products={this.state.products} category={this.props.selectedCategory.name} />
                        )}

                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.categories,
        selectedCategory: state.category.selectedCategory
    }
}

const mapDispatchToProps = {
    callLoadProductsAction: loadProducts
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));