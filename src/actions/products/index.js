import * as t from "../types";
import axios from "axios/index";

export const fetchProducts  = (categoryId) => async dispatch =>  {
    dispatch({ type: t.FETCH_PRODUCTS_START })

    try {
        const response = await axios.get('/data/products.json');
        const data = response.data.filter(item => parseInt(item.category) === parseInt(categoryId));
        return dispatch({ type: t.FETCH_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        return dispatch({ type: t.FETCH_PRODUCTS_FAILURE, payload: error })
    }
}

export const fetchAllProducts = () => async dispatch => {
    dispatch({ type: t.FETCH_ALL_PRODUCTS_START });

    try {
        const response = await axios.get('/data/products.json');
        const data = []
        const pizza = response.data.filter(item => parseInt(item.category) === parseInt(1));
        const drinks = response.data.filter(item => parseInt(item.category) === parseInt(2));
        data.push({
            title: "Пицца",
            data: pizza
        });
        data.push({
            title: "Напитки",
            data: drinks
        });
        return dispatch({ type: t.FETCH_ALL_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        return dispatch({ type: t.FETCH_ALL_PRODUCTS_FAILURE, payload: error })
    }
};
