import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CarItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropDownContainer, CartItemsContainer, EmptyMessageContainer, CustomButtonContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(item => <CarItem key={item.id} item={item} />)
                        :
                        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButtonContainer onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()) }}>GO TO CHECKOUT</CustomButtonContainer>
        </CartDropDownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));