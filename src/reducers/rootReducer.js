import {combineReducers} from "redux";
import {cartReducer} from "./cartReducer";
import {categoryReducer} from "./categoryReducer";
import {productsReducer} from "./productsReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    product: productsReducer
});