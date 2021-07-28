import React from 'react';
import ResourcesListItem from '../ResourcesListItem';

import resourses from '../../../../../../assets/resources.js';

import styles from './ResourcesList.module.scss';

import { v4 } from 'uuid';

const ResourcesList = () => {
    const listItems = resourses.map(item => <ResourcesListItem key={v4()} {...item} />)
    
    return (
        <ol className={styles.list}>
            {listItems}
        </ol>
    )
}

export default ResourcesList;