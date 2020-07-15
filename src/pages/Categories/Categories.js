import React from 'react';
import CategoriesService from "../../services/CategoriesService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,
    withRouter
} from 'react-router-dom';
import './Categories.css';

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
        })
    }

    render() {
        return (
            <div className='categories'>
                <ul>
                    {this.state.categories.map((category, index) => {
                        return (
                            <li key={index}>
                                <NavLink activeClassName='active' to={
                                    {
                                        pathname: `/products/${category.id}`
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

export default withRouter(Categories);