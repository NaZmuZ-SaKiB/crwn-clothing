import React from 'react';
import { connect } from 'react-redux';

import './Collection.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <div>
            <div className="collection-page">
                <h2 className='title'>{title} PAGE</h2>
                <div className="items">
                    {
                        items.map(item => <CollectionItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);