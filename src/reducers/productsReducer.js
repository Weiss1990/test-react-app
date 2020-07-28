import {LOAD_PRODUCTS, SELECT_PRODUCT} from "./types";

const initialState = {
    products: [],
    selectedProduct: {}
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {...state, products: action.products}
            break;
        case SELECT_PRODUCT:
            return {...state, selectedProduct: action.product}
            break;
        default:
            return state;
    }
}