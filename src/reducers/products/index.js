import * as t from '../../actions/types.js';

export const InitialState = {
    data: null,
    isLoading: false,
    errorMsg: null,
}

export default (state = InitialState, { type, payload }) => {
    switch(type) {
        case t.FETCH_PRODUCTS_START:
            return {
                ...state,
                isLoading: true,
            };
        case t.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
            };
        case t.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMsg: payload.errorMsg,
                isLoading: false
            };
        default:
            return state;
    }
}