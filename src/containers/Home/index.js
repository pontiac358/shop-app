import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchAllProducts } from '../../actions/products'
import ProductList from '../Products/components/ProductList'
import styled from '@emotion/styled'

const Container = styled.div`
    max-width:1100px;
    margin:auto;   
`;

const Title = styled.h2`
    font-size: 26px;
    text-align:center;
    margin-bottom: 50px;  
`;
Title.displayName = 'Title';

export class Home extends React.Component {
    componentDidMount(){
        this.props.fetchAllProducts()
    }

    render() {
        const { productsAll } = this.props;
        return (
            <Container>
                {
                    productsAll.data && productsAll.data.map((products, key) => {
                        return(
                            <React.Fragment key={ key }>
                                <Title>{ products.title }</Title>
                                <ProductList products={ products.data } />
                            </React.Fragment>
                        )
                    })
                }
            </Container>
        );
    }
}

Home.propTypes = {
    productsAll: PropTypes.shape({
        data: PropTypes.array,
        isLoading: PropTypes.bool
    }),
};

const mapStateToProps = (state) => {
    return {
        productsAll: state.productsAll,
    }
};

const mapDispatchToProps = {
    fetchAllProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)