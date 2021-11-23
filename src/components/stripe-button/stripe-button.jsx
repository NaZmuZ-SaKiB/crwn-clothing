import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JyzEUIxB3r8gvh1q4J8lP2cDWVuJ20py8IFJkPkv20W2M7r9HJK22VYwdFDrn2CSvbBlwjXymxkDKtWDE1maljU00Vm6yjgbJ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;