import * as t from '../../actions/types'
import reducer, { defaultState } from '../../reducers/cart'

describe('cart reducer', () => {
    it('ADD_TO_CART_SUCCESS', () => {
        const action = {
            type: t.ADD_TO_CART_SUCCESS,
            payload:  {
                count: 2,
                totalPrice: 200,
                products: [1, 2]
            }
        };

        expect(reducer(defaultState, action)).toEqual({
            ...defaultState,
            ...action.payload
        })
    });

    it('REMOVE_TO_CART_SUCCESS', () => {
        const action = {
            type: t.REMOVE_TO_CART_SUCCESS,
            payload:  {
                count: 1,
                totalPrice: 100,
                products: [1]
            }
        };

        expect(reducer(defaultState, action)).toEqual({
            ...defaultState,
            ...action.payload
        })
    });

    it('CLEAN_CART_SUCCESS', () => {
        const action = {
            type: t.CLEAN_CART_SUCCESS,
            payload:  {
                count: 0,
                totalPrice: 0,
                products: []
            }
        };

        expect(reducer(defaultState, action)).toEqual({
            ...defaultState,
            ...action.payload
        })
    })
});