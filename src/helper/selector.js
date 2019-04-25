import * as R from 'ramda'

export const getTotalCartPrice = products => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
    )(products);

    return totalPrice
};

export const getUniqProducts = state => {
    const uniqProducts = R.uniq(state.cart.products);
    const returnProducts = [];

    uniqProducts.forEach((item) => {
        returnProducts.push(
            {
                count: state.cart.products.filter(product => product.id === item.id).length,
                product: item,
                totalPrice: getTotalCartPrice(state.cart.products.filter(product => product.id === item.id)),
            })
    });

    return returnProducts.sort((a, b) => a.product.id - b.product.id)
};

