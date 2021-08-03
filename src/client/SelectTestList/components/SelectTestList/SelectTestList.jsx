import React from 'react';
import SelectTestItem from '../SelectTestItem';
import selectTests from '../../../../assets/selectTests';
import { v4 } from 'uuid';

import styles from './SelectTestList.module.scss';

const SelectTest = () => {
    const tests = selectTests.map(item => <SelectTestItem key={v4()} {...item} />)

    return (
        <ul className={styles.test_list}>
            {tests}
        </ul>
    )
}

export default SelectTest;