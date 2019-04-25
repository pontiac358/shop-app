import React from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ProductItem from '../../components/ProductItem'
import { addToCart } from '../../../../actions/cart'

const ProductsWrapt = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    width: calc(100% + 45px);
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
  
`;

const Container = styled.div`
    max-width: 1100px;
    margin:auto;
    overflow:hidden
  
`;

export class ProductList extends React.Component {
    handleAddToCart = product => {
        addToCart(product);
    };

    render() {
        const { products, cart } = this.props;

        return (
            <Container>
                <ProductsWrapt>
                    {
                        products &&
                        products.map(item =>
                            <ProductItem
                                hasInCart={ cart.products && cart.products.find(product => product.id === item.id) }
                                key={ item.id }
                                addToCart = { () => this.handleAddToCart(item) }
                                product = { item }/>)
                    }
                </ProductsWrapt>
            </Container>
        );
    }

}

ProductList.propTypes = {
    products: PropTypes.array,
    cart: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(ProductList)