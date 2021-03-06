import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './Collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <div>
            <CollectionPageContainer>
                <CollectionTitle>{title} PAGE</CollectionTitle>
                <CollectionItemsContainer>
                    {
                        items.map(item => <CollectionItem key={item.id} item={item} />)
                    }
                </CollectionItemsContainer>
            </CollectionPageContainer>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);