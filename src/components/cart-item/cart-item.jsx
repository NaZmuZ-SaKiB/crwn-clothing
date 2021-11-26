import React from 'react';

import { CartItemContainer, ItemDetailsContainer, NameContainer } from './cart-item.styles';

const CarItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <span>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
};

export default CarItem;