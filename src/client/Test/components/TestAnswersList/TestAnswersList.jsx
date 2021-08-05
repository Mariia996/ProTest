import {v4} from 'uuid'
import s from './TestAnswersList.module.scss';

const TestAnswersList = ({ test, formData, handleChange}) => {
  const inputElements = test.answers.map(answer=> {
    const inputId = v4()
      return (
            <div key={v4()} className={s.form_field}>
              <input
            id={inputId}
            type="radio"
            name={test._id}
            value={answer}
            className={s.visuallyHidden}
            checked={answer === formData.userAnswer }

              />
              <label htmlFor={inputId} className={s.form_label}>
                <span className={s.text}>{answer}</span>
              </label>
            </div>
      );
  })

  return (
  <form className={s.form} onChange={handleChange}>
    {inputElements}
  </form>
  )
};

export default TestAnswersList;
