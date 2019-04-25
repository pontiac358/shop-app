import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Header from './components/Header'
import { fetchMenu } from '../../actions/menu'


export class App extends React.Component {
    componentDidMount () {
        this.props.fetchMenu()
    }

    render() {
        const { children, menu, cart } = this.props;

        return (
            <div>
                <Header cart={ cart } menu={ menu }/>
                <main>
                    { children }
                </main>
            </div>
        );
    }
}

App.propTypes = {
    menu: PropTypes.shape({
        data: PropTypes.array,
        isLoading: PropTypes.bool
    }),
    cart: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    fetchMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(App)