import React from 'react';
import styles from './UsefulInfoPage.module.scss';

import LiteratureList from '../../client/UsefulInfo/components/LiteratureList/components/LiteratureList';
import ResourcesList from '../../client/UsefulInfo/components/ResourcesList/components/ResourcesList';

const UsefulInfoPage = () => {
    return ( 
     <div className={styles.cover}>
     <div className={styles.container}>
            <div className={styles.wrapper_for_lists}>
                
            <h2 className={styles.title_literature}>Useful literature</h2>
             <div className={styles.literature}>
                <LiteratureList/>
                </div>

            <h2 className={styles.title_resources}>Useful resources</h2>
            <div className={styles.resourses}>
                <ResourcesList/>
            </div>
         </div>
        </div>
     </div>
    );
}
export default UsefulInfoPage;