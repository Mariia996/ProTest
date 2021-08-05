/* eslint-disable no-unused-vars */
import { useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Diagram from '../../client/Results/components/Diagram'
import Button from '../../shared/components/Button'
import countResults from '../../client/Results/components/countResults'

import styles from './ResultsPage.module.scss'


const ResultsPage = () => {
    const history = useHistory();

    const handleGoBack = () => {
        history.push(`/test/${type}`)
    }

    const goBack = () => {
        history.goBack()
    }
    
    const error = useSelector(state => state.result.error, shallowEqual)
    const result = useSelector(state => state.result.resultAnswers, shallowEqual)
    const type = useSelector(state => state.result.type)
    const totalQuestions = 12
    const rightAnswer = result.length
    const resultType = (type === 'practice') ? "Testing theory_" : "Technical training_"

    const countRightAnswerResult = (rightAnswer * 100 / totalQuestions).toFixed();
    const countWrongAnswerResult = 100 - countRightAnswerResult

    const resultInfo = countResults(rightAnswer, totalQuestions)

    return (
    <div className={`${styles.resultPageContainer} ${styles.container}`}>
            <h2 className={styles.resultPageTitle}>Results</h2>
            {!error ?
                (<>
                    <p className={styles.resultPageText}>[ {resultType}]</p>
            <div className={styles.diagramWrapper}>
                <div className={styles.diagram}>
                    <Diagram answer={rightAnswer} total={totalQuestions}/>
                </div>
                <div className={styles.percentageWrapper}>
                    <span className={styles.percentageCorrect}></span>
                    <p className={styles.percentageText}> {countRightAnswerResult} % Correct</p>
                    <span className={styles.percentageIncorrect}></span>
                    <p className={styles.percentageText}> {countWrongAnswerResult}% Incorrect</p>
                </div>  
            </div>
            <ul className={styles.resultList}>
                <li className={styles.resultItem}>Correct answers - <span className={styles.resultPoint}>{rightAnswer }</span></li>
                <li className={styles.resultItem}>Total questions - <span className={styles.resultPoint}>{totalQuestions}</span></li>
                    </ul>
                    </>) : (<p>You didn't replay on all questions. Please, try again!</p>)}
            <div className={styles.resultWrapper}>
                <img src={resultInfo.image} alt="" className={styles.resultPageImage} />
                {!error && (<><p className={styles.resultTitle}>{resultInfo.mainMessage}!</p>
                    <p className={styles.resultText}>{resultInfo.secondaryMessage}</p></>)}
            </div>
        
            {!error ? (<Button className={styles.resultPageBtn} onClick={handleGoBack}>Try again</Button>) : (<Button className={styles.resultPageBtn} onClick={goBack}>Try again</Button>)}
    </div> )
}
 
export default ResultsPage;