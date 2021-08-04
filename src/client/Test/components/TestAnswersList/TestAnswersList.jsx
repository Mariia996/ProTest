import {
  useLocation,
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux';

import { getTests } from '../../../../redux/tests/tests-selectors';
import { fetchTests } from '../../../../redux/tests/tests-operations';

import s from './TestAnswersList.module.scss';

const TestAnswersList = () => {
  const dispatch = useDispatch();

  const tests = useSelector(state => getTests(state), shallowEqual);
  console.log(tests);

  const handleSubmit = body => {
    dispatch(fetchTests(body));
  };
  const answers = tests.map(item => item.answers);

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {tests.map(({ _id, question }) => (
        <div key={_id} className={s.form_field}>
          <input
            id={_id}
            type="radio"
            name="answers"
            value={question}
            className={s.visuallyHidden}
          />
          <label htmlFor={_id} className={s.form_label}>
            <span className={s.text}>{question}</span>
          </label>
        </div>
      ))}
    </form>
  );
};

export default TestAnswersList;
