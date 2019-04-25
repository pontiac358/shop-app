import * as t from '../types.js';
import axios from 'axios'

export const fetchMenu = () => async dispatch =>  {
    dispatch({ type: t.FETCH_MENU_START });

    try {
        const response = await axios.get('/data/menu.json');

        return dispatch({ type: t.FETCH_MENU_SUCCESS, payload: response.data })
    } catch (error) {
        return dispatch({ type: t.FETCH_MENU_FAILURE, payload: error })
    }
}
