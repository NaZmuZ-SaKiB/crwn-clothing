import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../preview-collection/preview-collection';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id, ...othercollectionsprops }) => (
                    <CollectionPreview key={id} {...othercollectionsprops} />
                ))
            }
        </CollectionsOverviewContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);