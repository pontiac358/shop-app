import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchProducts } from '../../actions/products'
import ProductList from './components/ProductList'


export class Products extends React.Component {

    componentDidMount () {
        this.handleFethProducts()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.url !== this.props.match.url) {
            this.handleFethProducts(nextProps.match.params.id)
        }
    }

    handleFethProducts = (id) => {
        const categoryId = id ? id : this.props.match.params.id
        this.props.fetchProducts(categoryId)
    };


    render() {
        const { products } = this.props;

        return (
            <ProductList products={ products.data }/>
        );
    }
}

Products.propTypes = {
    products: PropTypes.shape({
        data: PropTypes.array,
        isLoading: PropTypes.bool
    }),
    cartProducts: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        ownProps
    }
};

const mapDispatchToProps = {
    fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)