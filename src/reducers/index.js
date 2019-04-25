import { combineReducers } from 'redux'
import menu from './menu'
import products from './products'
import productsAll from './productsAll'
import cart from './cart'

const rootReducer = combineReducers({
    menu,
    products,
    productsAll,
    cart
});

export default rootReducer
