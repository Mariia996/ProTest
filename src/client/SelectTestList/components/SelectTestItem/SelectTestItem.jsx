import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './SelectTestItem.module.scss';
import { ReactComponent as ArrowIcon } from '../../../../images/main-page/arrow.svg';

const SelectTestItem = ({to, text}) => {
    return (
        <li className={styles.test_item}>
            <div className={styles.wrapper}>
            <NavLink to={to} className={styles.test_link}>
                <span className={styles.test_text}>{text}</span>  
                <span className={styles.arrow}> <ArrowIcon /> </span>
             </NavLink>
             </div>
        </li>
    )
}

export default SelectTestItem;