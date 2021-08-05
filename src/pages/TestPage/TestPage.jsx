import {
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux';
import { useState, useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import { getTests } from '../../redux/tests/tests-selectors';
import useRadioForm from '../../shared/hooks/useRadioForm';

import Button from '../../shared/components/Button'
import TestQuestions from '../../client/Test/components/TestQuestions'
import Pagination from '../../client/Test/components/Pagination';
import { fetchTests } from '../../redux/tests/tests-operations'
import {getResults} from '../../redux/results/results-operations'

import s from './TestPage.module.scss';

const TestPage = () => {
    const dispatch = useDispatch();
    
  const {typeTest} = useParams()

  const tests = useSelector(state => getTests(state), shallowEqual);

  const [idx, setIdx] = useState(0)

  const [array, formData, handleChange] = useRadioForm()

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(getResults(array))
  };

  useEffect(() => {

 dispatch(fetchTests(typeTest))
  }, [dispatch])

    return (
    <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.titleContainer}>

            {typeTest === 'theory' ? <h2 className={s.title}>[ Testing <span className={s.titleText}>theory_ ]</span></h2>
              : <h2 className={s.title}>[ QA technical <span className={s.titleText}>training_ ]</span></h2>}

                <Button className={s.finishBtn} type="submit" onSubmit={handleSubmit}>Finish test</Button>
            </div>
                {tests[idx] && <TestQuestions test={tests[idx]} formData={ formData} questionIdx={idx} handleChange={handleChange}/>}
                <Pagination handleLeftClick={() => setIdx(idx - 1)} handleRightClick={() => setIdx(idx + 1)} questionIdx={idx}/>
        </div>
    </div> );
}

export default TestPage;