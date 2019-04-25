import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import CountControl from '../../../../widgets/CountControl'

const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    margin-bottom:30px;
    @media only screen and (max-width: 480px) {
        display:block;   
    }
`

const ImageWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
    @media only screen and (max-width: 480px) {
        margin-right:0;
    }
`
const Img = styled.img`
    max-width: 150px;
    max-height: 150px;
    display:block;
    width:100%;
`

const TotalPrice = styled.div`
    font-size:25px;
    margin-left:auto;
    @media only screen and (max-width: 480px) {
        text-align:center;  
    }
`;
TotalPrice.displayName = 'TotalPrice';

const DeleteWrap = styled.div`
    font-size:25px;
    margin-left:auto;
    @media only screen and (max-width: 480px) {
        text-align:center;  
    }
`

const CountControlWrap = styled.div`
    @media only screen and (max-width: 480px) {
        text-align:center;  
    }
`;

const Title = styled.div`
    text-align: center;
    padding-right:20px;
    @media only screen and (max-width: 480px) {
       padding-right:0;

    }
`;
Title.displayName = 'Title';


const CartItem = ({ product, count, totalPrice, removeLineCart }) => {

    return (
        <Container>
            <div>
                <ImageWrap>
                    <Img src={ product.img }/>
                </ImageWrap>
                <Title>{product.title}</Title>
            </div>
            <CountControlWrap>
                <CountControl  product={product}/>
            </CountControlWrap>
            <TotalPrice>
                { totalPrice } р
            </TotalPrice>
            <DeleteWrap>
                <button onClick={()=>removeLineCart(product.id)}>Удалить</button>
            </DeleteWrap>
        </Container>
    );
}

CartItem.propTypes = {
    product: PropTypes.object,
    count: PropTypes.number
}

export default CartItem;