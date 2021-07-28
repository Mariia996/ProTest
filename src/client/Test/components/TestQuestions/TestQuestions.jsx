import CurrentQuestions from '../CurrentQuestions';

import s from './TestQuestions.module.scss';

const TestQuestions = () => {
    return (
        <div className={s.testWrapper}>
            <CurrentQuestions />

    </div> );
}

export default TestQuestions;