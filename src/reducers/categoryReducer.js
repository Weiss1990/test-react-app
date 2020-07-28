import {LOAD_CATEGORIES_LIST, SELECT_CATEGORY} from "./types";

const initialState = {
    categories: [],
    selectedCategory: {}
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES_LIST:
            console.log('reducer working');
            return {...state, categories: action.categories}
            break;
        case SELECT_CATEGORY:
            return {...state, selectedCategory: action.category}
        default:
            return state;
    }
}