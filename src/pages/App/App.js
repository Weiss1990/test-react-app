import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Products from '../Products/Products';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import Product from "../Product/Product";
import Cart from "../../components/Cart/Cart";
import Categories from "../Categories/Categories";
import Welcome from "../Welcome/Welcome";
import CartSummary from "../CartSummary/CartSummary";

class App extends React.Component {

    render() {
        return (
                <div className="App">
                    <header className="app-header">
                        {this.props.appName}
                        <Categories />
                        <Cart />
                    </header>
                    <div className="content">
                        <Switch>
                            <Route path='/welcome' component={Welcome} />
                            <Route path='/products/:category' component={Products} />
                            <Route path='/product/:category/:productId' component={Product} />
                            <Route path='/cart-summary' component={CartSummary} />
                            <Redirect from="/" to="/welcome" />
                        </Switch>
                    </div>
                    <div className="app-footer">
                        <span>
                            &copy; 2020 test-react-app
                        </span>

                        <span>
                            produced for best knowledge
                        </span>
                    </div>
                </div>
        );
    }
}

App.propTypes = {
    appName: PropTypes.string
}

export default withRouter(App);
