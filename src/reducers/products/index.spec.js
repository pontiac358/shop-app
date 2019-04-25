import * as t from '../../actions/types'
import reducer, { InitialState } from '../../reducers/products'

describe('product reducer', () => {

    it('FETCH_PRODUCTS_START', () => {
        const action = {
            type: t.FETCH_PRODUCTS_START,
        };

        expect(reducer(InitialState, action)).toEqual({
            ...InitialState,
            isLoading: true,
        })
    });

    it('FETCH_PRODUCTS_SUCCESS', () => {
        const InitialState = {
            data: null,
            isLoading: true,
            errorMsg: null,
        };

        const action = {
            type: t.FETCH_PRODUCTS_SUCCESS,
            payload: [1, 2, 3],
        };

        expect(reducer(InitialState, action)).toEqual({
            ...InitialState,
            isLoading: false,
            data: action.payload,
        })
    });

    it('FETCH_PRODUCTS_FAILURE', () => {
        const InitialState = {
            data: null,
            isLoading: true,
            errorMsg: null,
        }

        const action = {
            type: t.FETCH_PRODUCTS_FAILURE,
            payload: {
                errorMsg: 'error'
            }
        };


        expect(reducer(InitialState, action)).toEqual({
            ...InitialState,
            isLoading: false,
            errorMsg: action.payload.errorMsg
        })
    })
});