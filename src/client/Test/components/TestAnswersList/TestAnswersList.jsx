import s from './TestAnswersList.module.scss';

const TestAnswersList = () => {
    return (
    <form className={s.form}>
    <div className={s.form_field}>
        <input id="radio1" type="radio" name="answers" value="1" className={s.visuallyHidden} />
        <label htmlFor="radio1" className={s.form_label}><span className={s.text}>The verification structure includes such components as verification of validated requirements, technical documentation and correct execution of program code at any stage of software development and testing</span></label>
    </div>
    <div className={s.form_field}>
        <input id="radio2" type="radio" name="answers" value="2" className={s.visuallyHidden} />
        <label htmlFor="radio2" className={s.form_label}><span className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span></label>
    </div>
    <div className={s.form_field}>
        <input id="radio3" type="radio" name="answers" value="3" className={s.visuallyHidden} />
        <label htmlFor="radio3" className={s.form_label}><span className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span></label>
    </div>
    <div className={s.form_field}>
        <input id="radio4" type="radio" name="answers" value="4" className={s.visuallyHidden} />
        <label htmlFor="radio4" className={s.form_label}><span className={s.text}>Lorem ipsum dolor, sit amet elit. Perferendis, sapiente.</span></label>
    </div>
    <div className={s.form_field}>
        <input id="radio5" type="radio" name="answers" value="5" className={s.visuallyHidden} />
        <label htmlFor="radio5" className={s.form_label}><span className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, sapiente.</span></label>
    </div>
    <div className={s.form_field}>
        <input id="radio6" type="radio" name="answers" value="6" className={s.visuallyHidden} />
        <label htmlFor="radio6" className={s.form_label}><span className={s.text}>I don't know</span></label>
    </div>
    </form>);
}

export default TestAnswersList;