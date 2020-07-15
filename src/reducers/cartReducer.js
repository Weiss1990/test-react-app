import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from "./types";

const initialState = {
    productsInCart: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {...state, productsInCart: [...state.productsInCart, action.product]}
            break;
        case REMOVE_PRODUCT_FROM_CART:
            return {...state, productsInCart: action.products}
            break;
    }

    return state;
}