import s from './CurrentQuestions.module.scss';

const CurrentQuestions = () => {
    return (
        <>
        <p className={s.questions}>Questions
                <span className={s.point}> 3</span> / 12</p>
            </>);
}

export default CurrentQuestions;