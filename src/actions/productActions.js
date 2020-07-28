import {LOAD_PRODUCTS, SELECT_PRODUCT} from "../reducers/types";

export const loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        products
    }
}

export const selectProduct = (product) => {
    return {
        type: SELECT_PRODUCT,
        product
    }
}