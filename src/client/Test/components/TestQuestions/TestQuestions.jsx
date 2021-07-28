import CurrentQuestions from '../CurrentQuestions';
import TestAnswersList from '../TestAnswersList';

import s from './TestQuestions.module.scss';

const TestQuestions = () => {
    return (
        <div className={s.test_wrapper}>
            <div className={s.currentQuestions}>
                <CurrentQuestions />
            </div>
            <p className={s.test_question}>What is regression testing?</p>
            <TestAnswersList />
    </div> );
}

export default TestQuestions;