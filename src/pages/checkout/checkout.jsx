import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import ChekoutItem from '../../components/checkout-item/checkout-item';
import StripeButton from '../../components/stripe-button/stripe-button';
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlock, CheckoutTotal, CheckoutTestWarning, CheckoutStripeButton } from './checkout.styles';

const Checkout = ({ cartItems, total }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeaderContainer>

            {
                cartItems.map(cartItem => <ChekoutItem key={cartItem.id} cartItem={cartItem} />)
            }

            <CheckoutTotal>
                <span>TOTAL: ${total}</span>
            </CheckoutTotal>
            <CheckoutTestWarning>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - EXP: 01/25 - CVW: 123
            </CheckoutTestWarning>
            <StripeButton price={total} />
        </CheckoutPageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);