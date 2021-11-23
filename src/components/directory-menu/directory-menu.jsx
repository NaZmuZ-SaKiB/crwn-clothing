import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory-menu.scss';
import MenuItem from '../menu-item/menu-item';
import { selectDeirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...othersectionprops }) => (
                    <MenuItem key={id} {...othersectionprops} />
                ))
            }
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    sections: selectDeirectorySections
})

export default connect(mapStateToProps)(Directory);