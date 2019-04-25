import * as t from '../../actions/types'
import reducer, { InitialState } from '../../reducers/menu'

describe('menu reducer', () => {

    it('FETCH_MENU_START', () => {
        const action = {
            type: t.FETCH_MENU_START,
        }

        expect(reducer(InitialState, action)).toEqual({
            ...InitialState,
            isLoading: true,
        })
    });

    it('FETCH_MENU_SUCCESS', () => {
        const InitialState = {
            data: null,
            isLoading: true,
            errorMsg: null,
        }

        const action = {
            type: t.FETCH_MENU_SUCCESS,
            payload: [1, 2, 3],
        }

        expect(reducer(InitialState, action)).toEqual({
            ...InitialState,
            isLoading: false,
            data: action.payload,
        })
    });

    it('FETCH_MENU_FAILURE', () => {
        const InitialState = {
            data: null,
            isLoading: true,
            errorMsg: null,
        };

        const action = {
            type: t.FETCH_MENU_FAILURE,
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