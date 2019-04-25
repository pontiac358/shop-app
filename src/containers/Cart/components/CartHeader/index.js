import React from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
    color: #fff;
`;
const CartLink = styled(Link)`
    color: #fff;
    display: inline-block;
    text-align: right;
    padding: 2px;
    text-decoration: underline;
`;
CartLink.displayName = 'CartLink'

const CartHeader = ({ cart:{count, totalPrice} }) => {

    return (
        <Container>
            <CartLink to={'/cart'}>
                кол: <strong>{ count }</strong><br/>
                сумма: <strong>{ totalPrice } р</strong>
            </CartLink>
        </Container>
    );
}

CartHeader.propTypes = {
    cart: PropTypes.object
}

export default CartHeader;