import * as t from '../../actions/types.js';

const cartLocal = localStorage.getItem('cart');
export const defaultState = {
    count: 0,
    totalPrice: 0,
    products: []
}
const InitialState = cartLocal ? JSON.parse(cartLocal) : { ...defaultState};

export default (state =  InitialState, {type, payload}) => {
    switch(type) {
        case t.ADD_TO_CART_SUCCESS:
            return {...payload};
        case t.REMOVE_TO_CART_SUCCESS:
            return {...payload};
        case t.CLEAN_CART_SUCCESS:
            return { ...defaultState, products: [] };
        default:
            return state;
    }
}