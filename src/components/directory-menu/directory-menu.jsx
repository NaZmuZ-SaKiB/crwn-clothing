import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item';
import { selectDeirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory-menu.styles';

const Directory = ({ sections }) => {
    return (
        <DirectoryMenuContainer>
            {
                sections.map(({ id, ...othersectionprops }) => (
                    <MenuItem key={id} {...othersectionprops} />
                ))
            }
        </DirectoryMenuContainer>
    )

}

const mapStateToProps = createStructuredSelector({
    sections: selectDeirectorySections
})

export default connect(mapStateToProps)(Directory);