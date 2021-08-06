import { v4 } from 'uuid'
import PropTypes from 'prop-types';

import CurrentQuestions from '../CurrentQuestions';
import TestAnswersList from '../TestAnswersList';

import s from './TestQuestions.module.scss';

const TestQuestions = ({ test, questionIdx,formData, handleChange }) => {
  return (
    <div className={s.test_wrapper}>
      <div className={s.currentQuestions}>
        <CurrentQuestions questionIdx={questionIdx}/>
      </div>
        <p key={v4()} className={s.test_question}>
          {test.question}
        </p>

      <TestAnswersList test={test} formData={ formData} handleChange={handleChange}/>
    </div>
  );
};

export default TestQuestions;

TestQuestions.defaultProps = {
  test: {},
  questionIdx: 0,
  formData: {},
  handleChange: () => {}
}

TestQuestions.propTypes = {
  test: PropTypes.object.isRequired,
  questionIdx: PropTypes.number,
  formData: PropTypes.object,
  handleChange: PropTypes.func.isRequired
}
