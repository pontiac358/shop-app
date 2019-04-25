import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div``;

const MenuWrap = styled.div`
    @media only screen and (max-width: 480px) {
        position: absolute;
        top: 48px;
        left:0;
        background:#000;
        width: 100%;
        display:${props => props.isOpen ? 'block' : 'none'};
        padding: 10px;
        text-align:center;   
    }
`;

const MobileMenuIcon = styled.div`
    display:none;
    @media only screen and (max-width: 480px) {
        display:block;   
    }
`;


const MenuLink = styled(Link)`
  padding: 10px;
  color: #fff;
  @media only screen and (max-width: 480px) {
        display:block;   
    }
`;
MenuLink.displayName = 'MenuLink';


class Menu extends React.Component  {
    state = {
        isOpen: false
    };

    menuToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        const { menu } = this.props;

        return (
            <Container>
                <MobileMenuIcon onClick={this.menuToggle}>
                    Menu
                </MobileMenuIcon>
                <MenuWrap isOpen={ this.state.isOpen }>
                    {
                        menu.data && menu.data.map(item => <MenuLink key={ item.id } to={`/menu/${item.id}/${item.url}`}> { item.title } </MenuLink>)
                    }
                </MenuWrap>
            </Container>
        );
    }

}

Menu.propTypes = {
    menu: PropTypes.shape({
        data: PropTypes.array,
        isLoading: PropTypes.bool
    }),
}

export default Menu;