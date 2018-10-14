import { FETCH_ALL,SEARCH } from "../actions/actionTypes"

const initialState = {
    products: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
        return { ...state, products: state.products = action.payload };
        case SEARCH:
        return { ...state, products: state.products = action.payload };
        default:
        return state;
    }
};
export default rootReducer;