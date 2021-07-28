import React from 'react';
import SelectTestList from '../../client/SelectTestList/components/SelectTestList';
import styles from './MainPage.module.scss';
const MainPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.text_choice_test}>
                    “Regression testing. What is it?
                    If the system compiles, that's good, 
                    if it boots, that's great!”
                </p>
                <h3 className={styles.creator_name}>Linus Torvalds</h3>
                <p className={styles.text_about_creator}>Linux kernel creator, hacker, 1969</p>
                <div className={styles.wrapper_for_tests}>
                    <SelectTestList/>
                </div>
            </div> 
        </div>
    )
}
export default MainPage;