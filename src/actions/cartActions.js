import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from "../reducers/types";

export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        product
    }
}

export const removeProductFromCart = (products) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        products
    }
}