import {LOAD_CATEGORIES_LIST, SELECT_CATEGORY} from "../reducers/types";

export const loadCategoriesList = (categories) => {
    return {
        type: LOAD_CATEGORIES_LIST,
        categories
    }
}

export const selectCategory = (category) => {
    return {
        type: SELECT_CATEGORY,
        category
    }
}