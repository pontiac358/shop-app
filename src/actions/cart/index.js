import * as t from '../types.js';
import * as R from 'ramda'
import store from '../../store';
import { getTotalCartPrice } from '../../helper/selector'

export const addToCart =  (product) => {
    const { cart } = store.getState();
    cart.count++;
    cart.products.push(product);
    cart.totalPrice = getTotalCartPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));
    return store.dispatch({ type: t.ADD_TO_CART_SUCCESS, payload: cart })

};

export const removeToCart = (product) => {
    const { cart } = store.getState();
    const indexFirstElement = R.findIndex(R.propEq('id', product.id))(cart.products);
    cart.count--;
    cart.products = R.remove(indexFirstElement, 1, cart.products);
    cart.totalPrice = getTotalCartPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));
    return store.dispatch({ type: t.REMOVE_TO_CART_SUCCESS, payload: cart })
};

export const removeLineCart = (id) => {
    const { cart } = store.getState();
    const lineProduct = cart.products.filter(item => item.id !== id);
    const countLineProduct = cart.products.filter(item => item.id === id).length;
    cart.count = cart.count - countLineProduct;
    cart.products = lineProduct;
    cart.totalPrice = getTotalCartPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));
    return store.dispatch({ type: t.REMOVE_TO_CART_SUCCESS, payload: cart })
};

export const clearCart =  () => {
    const data = store.dispatch({ type: t.CLEAN_CART_SUCCESS });
    const { cart } = store.getState();
    localStorage.setItem('cart', JSON.stringify(cart));
    return data
};

export const toOrder = async () => {
    clearCart()
};