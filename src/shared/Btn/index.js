import React from 'react';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Button = styled.button`
    height: 47px;
    background-color: #ff3f02;
    padding: 0 26px;
    text-decoration: none;
    color: #ffffff;
    font-size: 15px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
    border:0;
    cursor: pointer;
    &:hover{
        background-color: #ff3d00e3;
    }
    &:active{
        background-color: #ed4008;
    }
`;

const StyledLink = styled(Link)`
    height: 47px;
    background-color: #ff3f02;
    padding: 0 26px;
    text-decoration: none;
    color: #ffffff;
    font-size: 15px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
    border:0;
    cursor: pointer;
    &:hover{
        background-color: #ff3d00e3;
    }
    &:active{
        background-color: #ed4008;
    }
`;

const Btn = ({ onClick, title, to }) => {

    return to ? <StyledLink to={to}>{title}</StyledLink> : <Button onClick={onClick}>{ title }</Button>
};

export default Btn;