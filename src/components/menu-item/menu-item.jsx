import React from 'react';
import { withRouter } from 'react-router';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer imageUrl={imageUrl} className='background-image' />
        <ContentContainer className='content'>
            <ContentTitle>{title}</ContentTitle>
            <ContentSubtitle>Shop Now</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);