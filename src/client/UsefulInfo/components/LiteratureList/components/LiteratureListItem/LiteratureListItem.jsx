import React from 'react';
import styles from './LiteratureListItem.module.scss';

const LiteratureListItem = ({text}) => {
     return (
         <li className={styles.item}>
             {text}
         </li>
    )
}

export default LiteratureListItem;