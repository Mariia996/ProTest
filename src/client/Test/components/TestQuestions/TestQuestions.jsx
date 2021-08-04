import { useSelector, shallowEqual } from 'react-redux';
import { getTests } from '../../../../redux/tests/tests-selectors';
import CurrentQuestions from '../CurrentQuestions';
import TestAnswersList from '../TestAnswersList';

import s from './TestQuestions.module.scss';

const TestQuestions = () => {
  const tests = useSelector(state => getTests(state), shallowEqual);
  return (
    <div className={s.test_wrapper}>
      <div className={s.currentQuestions}>
        <CurrentQuestions />
      </div>
      {tests.map(({ _id, question }) => (
        <p key={_id} className={s.test_question}>
          {question}
        </p>
      ))}

      <TestAnswersList />
    </div>
  );
};

export default TestQuestions;
