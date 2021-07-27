import Diagram from '../../client/Results/components/Diagram'
import Button from '../../shared/components/Button'
import imageUrl from '../../images/cat.png'

import styles from './ResultsPage.module.scss'

const ResultsPage = () => {
    return (
    <div className={`${styles.resultPageContainer} ${styles.container}`}>
        <h2 className={styles.resultPageTitle}>Results</h2>
        <p className={styles.resultPageText}>[ Testing theory_]</p>
        <div className={styles.diagramWrapper}>
            <div className={styles.diagram}>
              <Diagram/>
            </div> 
            <div className={styles.percentageWrapper}>
                <span className={styles.percentageCorrect}></span>
                <p className={styles.percentageText}> 92% Correct</p>
                <span className={styles.percentageIncorrect}></span>
                <p className={styles.percentageText}> 8% Incorrect</p>  
            </div>  
        </div>
        <ul className={styles.resultList}>
            <li className={styles.resultItem}>Correct answers - <span className={styles.resultPoint}>9</span></li>
            <li className={styles.resultItem}>Total questions - <span className={styles.resultPoint}>12</span></li>
        </ul>
        <div className={styles.resultWrapper}>
            <img src={imageUrl} alt="" className={styles.resultPageImage} />
            <p className={styles.resultTitle}>Not bad!</p> 
            <p className={styles.resultText}>But you still need to learn some materials.</p> 
        </div>
        
        <Button className={styles.resultPageBtn}>Try again</Button>
    </div> )
}
 
export default ResultsPage;