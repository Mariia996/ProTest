/* eslint-disable no-unused-vars */
import {useEffect} from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import Diagram from '../../client/Results/components/Diagram'
import Button from '../../shared/components/Button'
import { getResults } from '../../redux/results/results-operations'
import countResults from '../../client/Results/components/countResults'

import styles from './ResultsPage.module.scss'


const ResultsPage = () => {
     const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResults());
  }, [dispatch]);

    const result = useSelector(state => state.result.resultAnswers, shallowEqual)
    const type = useSelector(state => state.result.type)
    const rightAnswer = result.length
    const resultType = (type === 'practice') ? "Testing theory_" : "Technical training_"

    const countRightAnswerResult = (rightAnswer * 100 / 12).toFixed();
    const countWrongAnswerResult = 100 - countRightAnswerResult

    const resultInfo = countResults(rightAnswer)

    return (
    <div className={`${styles.resultPageContainer} ${styles.container}`}>
        <h2 className={styles.resultPageTitle}>Results</h2>
            <p className={styles.resultPageText}>[ { resultType}]</p>
        <div className={styles.diagramWrapper}>
            <div className={styles.diagram}>
                    <Diagram />
            </div> 
            <div className={styles.percentageWrapper}>
                <span className={styles.percentageCorrect}></span>
                <p className={styles.percentageText}> {countRightAnswerResult} % Correct</p>
                <span className={styles.percentageIncorrect}></span>
                    <p className={styles.percentageText}> { countWrongAnswerResult}% Incorrect</p>
            </div>  
        </div>
        <ul className={styles.resultList}>
                <li className={styles.resultItem}>Correct answers - <span className={styles.resultPoint}>{rightAnswer }</span></li>
            <li className={styles.resultItem}>Total questions - <span className={styles.resultPoint}>12</span></li>
        </ul>
        <div className={styles.resultWrapper}>
            <img src={resultInfo.image} alt="" className={styles.resultPageImage} />
                <p className={styles.resultTitle}>{resultInfo.mainMessage }!</p>
                <p className={styles.resultText}>{ resultInfo.secondaryMessage}</p>
        </div>
        
        <Button className={styles.resultPageBtn}>Try again</Button>
    </div> )
}
 
export default ResultsPage;

