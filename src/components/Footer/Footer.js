import React from 'react';

import { withRouter } from 'react-router-dom'

import {
    FooterContainer,
    NavigationContainer,
    LeftNavigation,
    RightNavigation,
    Navlink,
    FooterEnd,
    P,
    IconContainer,
    LinkContainer
} from './Footer.styles';


const Footer = ({history}) => {
    
    return(
    <FooterContainer>
        <NavigationContainer>
            <LeftNavigation>
                <Navlink onClick={() => history.push('/shop/mens')}>Mens</Navlink>
                <Navlink onClick={() => history.push('/shop/womens')}>Womens</Navlink>
                <Navlink onClick={() => history.push('/shop/hats')}>Hats</Navlink>
                <Navlink onClick={() => history.push('/shop/jackets')}>Jackets</Navlink>
                <Navlink onClick={() => history.push('/shop/sneakers')}>Sneakers</Navlink>
            </LeftNavigation>
            <RightNavigation>
                <Navlink onClick={() => history.push('/signin')}>Sign In</Navlink>
                <Navlink onClick={() => history.push('/checkout')}>Checkout</Navlink>
            </RightNavigation>
        </NavigationContainer>
        <FooterEnd>
            <P>
                <span>Made </span>
                 <span> by Mikael Simonsson, ©2020</span>
            </P>
            <IconContainer>
                <LinkContainer href='https://github.com' target='_blank' rel="noopener noreferrer">
                </LinkContainer>
            </IconContainer>
        </FooterEnd>
    </FooterContainer>
)}

export default withRouter(Footer);