import {
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
     const history = useHistory();

  const {typeTest} = useParams()

  const tests = useSelector(state => getTests(state), shallowEqual);

  const [idx, setIdx] = useState(0)

  const { array, formData, resetFormData, handleChange } = useRadioForm()

  const handleRightClick = () => {
    if (array.length === 0 || !array[idx] || array[idx]._id !== tests[idx]._id) {
      toast.warn('You must check the answer to continue', { position: toast.POSITION.TOP_RIGHT });
    } else {
      resetFormData()
      setIdx(idx + 1)
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault()
    if (array.length < 12) {
        toast.warn('You must continue to finish test', { position: toast.POSITION.TOP_RIGHT });
      } else {
          dispatch(getResults(array))
          history.push('/results')
      }
  };

  useEffect(() => {

 dispatch(fetchTests(typeTest))
  }, [dispatch, typeTest])

  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.titleContainer}>

            {typeTest === 'theory' ? <h2 className={s.title}>[ Testing <span className={s.titleText}>theory_ ]</span></h2>
              : <h2 className={s.title}>[ QA technical <span className={s.titleText}>training_ ]</span></h2>}

                <Button className={s.finishBtn}  onClick={handleSubmit}>Finish test</Button>
            </div>
                {tests[idx] && <TestQuestions test={tests[idx]} formData={ formData} questionIdx={idx} handleChange={handleChange}/>}
          <Pagination handleLeftClick={() => setIdx(idx - 1)}
            handleRightClick={handleRightClick} questionIdx={idx} />
        </div>
      </div>
      <ToastContainer />
    </>);
}

export default TestPage;