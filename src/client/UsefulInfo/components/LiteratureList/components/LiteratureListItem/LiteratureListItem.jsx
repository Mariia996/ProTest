import React from 'react';
import PropTypes from 'prop-types';

import styles from './LiteratureListItem.module.scss';

const LiteratureListItem = ({text}) => {
     return (
         <li className={styles.item}>
             {text}
         </li>
    )
}

export default LiteratureListItem;

LiteratureListItem.defaultProps = {
    text: ''
}

LiteratureListItem.propTypes = {
    text: PropTypes.string
}