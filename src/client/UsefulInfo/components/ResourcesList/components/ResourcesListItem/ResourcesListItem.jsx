import React from 'react';
import { Link } from "react-router-dom";
import styles from './ResourcesListItem.module.scss';

const ResourcesListItem = ({to, text}) => {
    return (
         
         <li className={styles.item}>
             <Link to={{ pathname: to}} className={styles.link} target="_blank">{text} </Link>
         </li>
    )
}

export default ResourcesListItem;