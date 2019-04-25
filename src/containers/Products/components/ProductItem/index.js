import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import Btn from '../../../../shared/Btn'
import CountControl from '../../../../widgets/CountControl'

const Container = styled.div`
    width: calc(25% - 45px);
    margin-right: 45px;
    margin-bottom: 64px;
    @media only screen and (max-width: 768px) {
        width: calc(50% - 45px);   
    }
    @media only screen and (max-width: 480px) {
        width: 100%;
        margin-right:0;   
    }
`

const ImageWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:10px
`
const Img = styled.img`
    max-width: 250px;
    max-height: 250px;
    display:block;
    width:100%;
`
const Title = styled.div`
    color: #0c0c0c;
    font-size: 16px;
    margin-bottom: 30px;
    text-align: center;
`
Title.displayName = 'Title';

const Price = styled.div`
    color: #0c0c0c;
    font-size: 18px;
    margin-bottom: 30px;
    text-align: center;
`
Price.displayName = 'Price';

const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`



const ProductItem = ({ product, addToCart, hasInCart}) => {

    return (
        <Container>
            <Title>{ product.title }</Title>
             <ImageWrap>
                 <Img src={ product.img }/>
             </ImageWrap>
            <Price>{ product.price } р</Price>
            <BtnWrap>
                {
                    hasInCart ? <CountControl product={product}/> : <Btn onClick={addToCart} title={'В корзину'}/>
                }
            </BtnWrap>
        </Container>
    );
}

ProductItem.propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func,
    hasInCart: PropTypes.object,
}

export default ProductItem;