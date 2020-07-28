import React from 'react';
import CategoriesService from "../../services/CategoriesService";
import {
    NavLink,
    withRouter
} from 'react-router-dom';
import './Categories.css';
import {connect} from "react-redux";
import {loadCategoriesList, selectCategory} from "../../actions/categoriesActions";

class Categories extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            categories: []
        }

    }

    async componentDidMount() {
         await this.getCategoriesList();
    }

    async getCategoriesList() {
        const categories = await CategoriesService.getCategoriesList();
        this.setState({
            categories
        });
        this.props.callLoadCategoriesListAction(categories);

        const activeCategoryByURL = categories.find((category) => {
            return `/products/${category.name}` === this.props.location.pathname;
        });

        this.props.callSelectCategoryAction(activeCategoryByURL);
    }

    render() {
        return (
            <div className='categories'>
                <ul>
                    {this.state.categories.map((category, index) => {
                        return (
                            <li key={index} onClick={() => {this.props.callSelectCategoryAction(category)}}>
                                <NavLink activeClassName='active' to={
                                    {
                                        pathname: `/products/${category.name}`
                                    }
                                }>
                                    {category.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = {
    callLoadCategoriesListAction: loadCategoriesList,
    callSelectCategoryAction: selectCategory
}

export default connect(null, mapDispatchToProps)(withRouter(Categories));