import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooter,
    CollectionFooterName,
    CollectionFooterPrice,
    AddToCartButton
} from './collection-item.styles';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage
                className="image"
                imageUrl={imageUrl}
            />
            <CollectionFooter>
                <CollectionFooterName>{name}</CollectionFooterName>
                <CollectionFooterPrice>{price}</CollectionFooterPrice>
            </CollectionFooter>
            <AddToCartButton onClick={() => addItem(item)} inverted >ADD TO CART</AddToCartButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);