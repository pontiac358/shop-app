import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import CartHeader from '../../../Cart/components/CartHeader'
import Menu from '../../components/Menu'

const Container = styled.div`
    background-color: #000;
    height: 50px;
    width:100%;
    color: #fff;
    margin-bottom:30px
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
    margin-bottom:20px;
    position:relative;
`;

const CenterWrap = styled.div`
    width: 1100px;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled(Link)`
  padding: 10px;
  width:120px;
  color: #fff;
  margin-right:auto;
`;

const CartWrap = styled.div`
  padding: 10px;
  width:120px;
  color: #fff;
  margin-left:auto;
`;

const Header = ({ menu, cart }) => {

    return (
        <Container>
            <CenterWrap>
                {
                    <Logo to={'/'}> LOGO </Logo>
                }
                <Menu menu={ menu} />
                {
                    <CartWrap>
                        <CartHeader cart={ cart }/>
                    </CartWrap>
                }
            </CenterWrap>
        </Container>
    );
};

Header.propTypes = {
    menu: PropTypes.shape({
        data: PropTypes.array,
        isLoading: PropTypes.bool
    }),
    cart: PropTypes.object
};

export default Header;