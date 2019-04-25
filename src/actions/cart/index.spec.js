import * as t from '../../actions/types'
import { addToCart, removeToCart, removeLineCart, clearCart } from '../../actions/cart'

describe('cart action', () => {

    it('ADD_TO_CART_SUCCESS', () => {
        const expectedAction = {
            type: t.ADD_TO_CART_SUCCESS,
            payload: {
                count: 1,
                totalPrice: 10,
                products: [{
                    id: 1,
                    title: 'test',
                    price: 10
                }]
            },
        };

        expect(addToCart(expectedAction.payload.products[0])).toEqual(expectedAction)
    });

    it('REMOVE_TO_CART_SUCCESS', () => {
        const expectedAction = {
            type: t.REMOVE_TO_CART_SUCCESS,
            payload: {
                count: 0,
                totalPrice: 0,
                products: []
            },
        };

        expect(removeToCart({
            id: 1,
            title: 'test',
            price: 10
        })).toEqual(expectedAction)
    })

    it('REMOVE_TO_CART_SUCCESS LINE', () => {
        const expectedAction = {
            type: t.REMOVE_TO_CART_SUCCESS,
            payload: {
                count: 0,
                totalPrice: 0,
                products: []
            },
        };

        expect(removeLineCart(1)).toEqual(expectedAction)
    });

    it('CLEAN_CART_SUCCESS', () => {
        const expectedAction = {
            type: t.CLEAN_CART_SUCCESS,
        };

        expect(clearCart()).toEqual(expectedAction)
    })

});