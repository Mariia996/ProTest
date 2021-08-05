import {
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux';
import { useState, useContext } from 'react';

import { getTests } from '../../redux/tests/tests-selectors';
import useRadioForm from '../../shared/hooks/useRadioForm';

import Button from '../../shared/components/Button'
import TestQuestions from '../../client/Test/components/TestQuestions'
import Pagination from '../../client/Test/components/Pagination';

import s from './TestPage.module.scss';

const initialState = {
  _id: '',
  answer: ''
}

const TestPage = () => {
  const dispatch = useDispatch();

  const tests = useSelector(state => getTests(state), shallowEqual);
  const { questionType } = tests[0]

  const [idx, setIdx] = useState(0)

  const [array, , handleChange] = useRadioForm(initialState, idx)
  console.log("🚀 ~ file: TestPage.jsx ~ line 31 ~ TestPage ~ array", array)

  const handleSubmit = (e) => {
    e.preventDefault()
  };

    return (
    <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.titleContainer}>

            {questionType === 'theory' ? <h2 className={s.title}>[ Testing <span className={s.titleText}>theory_ ]</span></h2>
              : <h2 className={s.title}>[ QA technical <span className={s.titleText}>training_ ]</span></h2>}

                <Button className={s.finishBtn} type="submit" onSubmit={handleSubmit}>Finish test</Button>
            </div>
                <TestQuestions test={tests[idx]} questionIdx={idx} handleChange={handleChange}/>
                <Pagination handleLeftClick={() => setIdx(idx - 1)} handleRightClick={() => setIdx(idx + 1)} questionIdx={idx}/>
        </div>
    </div> );
}

export default TestPage;