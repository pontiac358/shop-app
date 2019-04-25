import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getUniqProducts } from '../../helper/selector'
import { removeLineCart, clearCart, toOrder } from '../../actions/cart'
import styled from '@emotion/styled'
import CartItem from './components/CartItem'
import Btn from '../../shared/Btn'

const Container = styled.div`
    max-width:800px;
    padding: 0 10px;
    margin:auto;
`;

const ContainerBottom = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding: 20px 0;
  
`;

const TotalPrice = styled.div`
    margin-left:auto;
    font-size: 32px;
    @media only screen and (max-width: 480px) {
        font-size:20px;
        text-align:center;
        margin: 0;
        width: 100%;  
    }
`;

const ButtonWrap = styled.div`
    margin-left:auto;
    font-size: 32px;
    @media only screen and (max-width: 480px) {
       margin:auto;  
    }
`;

const EmptyCartHead = styled.h2`
    text-align: center;
    font-size: 32px;
    padding: 20px 0;
`;
EmptyCartHead.displayName = 'EmptyCartHead';

const ButtonWrapCenter = styled.div`
    text-align:center;
`;


export class Cart extends React.Component {
    handleRemoveLineCart = (id) => {
        removeLineCart(id)
    };

    handleClearCart = () => {
        clearCart()
    };

    handleToOrder = (e) => {
        alert('Заказ принят');
        toOrder();
        this.props.history.push('/')
    };

    render() {
        const { products, cart } = this.props;

        if(!products.length){
            return (
                <Container>
                    <EmptyCartHead>Корзина пуста</EmptyCartHead>
                    <ButtonWrapCenter>
                        <Btn to={'/'} title={'На главную'}/>
                    </ButtonWrapCenter>
                </Container>
            )
        }

        return (
            <Container>
                <ContainerBottom>
                    <ButtonWrap>
                        <Btn onClick={ this.handleClearCart } title={'Очистить корзину'}/>
                    </ButtonWrap>
                </ContainerBottom>
                {
                    products && products.map(item => {
                        return(
                            <CartItem removeLineCart={ this.handleRemoveLineCart } key={ item.product.id } { ...item }/>
                        )
                    })
                }
                <hr/>

                <ContainerBottom>
                    <TotalPrice>
                        Сумма заказа: { cart.totalPrice } р
                    </TotalPrice>
                </ContainerBottom>
                <ContainerBottom>
                    <ButtonWrap>
                        <Btn onClick={ this.handleToOrder } title={'Оформить заказ'}/>
                    </ButtonWrap>
                </ContainerBottom>
            </Container>
        );
    }
}

Cart.propTypes = {
    products: PropTypes.array,
    cart: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: getUniqProducts(state),
    }
};

export default connect(mapStateToProps)(Cart)