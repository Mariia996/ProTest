import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowIcon } from '../../../../images/main-page/arrow.svg';
import { fetchTests } from '../../../../redux/tests/tests-operations';

import styles from './SelectTestItem.module.scss';

const SelectTestItem = ({ to, text, typeTest }) => {
    const dispatch = useDispatch();

    const handleClick = (type) => {
        dispatch(fetchTests(type))
    }

    return (
        <li className={styles.test_item}>
            <NavLink to={to} className={styles.test_link} onClick={() => handleClick(typeTest)}>
            <div className={styles.wrapper}>
                <span className={styles.test_text}>{text}</span>
                <span className={styles.arrow}> <ArrowIcon /> </span>
             </div>
             </NavLink>
        </li>
    )
}

export default SelectTestItem;