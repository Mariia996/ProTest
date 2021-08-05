import {v4} from 'uuid'
import CurrentQuestions from '../CurrentQuestions';
import TestAnswersList from '../TestAnswersList';

import s from './TestQuestions.module.scss';

const TestQuestions = ({ test, questionIdx, handleChange }) => {
  return (
    <div className={s.test_wrapper}>
      <div className={s.currentQuestions}>
        <CurrentQuestions questionIdx={questionIdx}/>
      </div>
        <p key={v4()} className={s.test_question}>
          {test.question}
        </p>

      <TestAnswersList test={test} handleChange={handleChange}/>
    </div>
  );
};

export default TestQuestions;
