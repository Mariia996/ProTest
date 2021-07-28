import React from 'react';
import LiteratureListItem from '../LiteratureListItem';

import literatures from '../../../../../../assets/literatures.js';

import styles from './LiteratureList.module.scss';

import { v4 } from 'uuid';

const LiteratureList = () => {
    const listItems = literatures.map(item => <LiteratureListItem key={v4()} {...item} />)
    
    return (
        <ol className={styles.list}>
            {listItems}
        </ol>
    )
}

export default LiteratureList;