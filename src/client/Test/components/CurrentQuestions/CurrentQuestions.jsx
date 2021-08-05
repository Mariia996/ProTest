import s from './CurrentQuestions.module.scss';

const CurrentQuestions = ({ questionIdx }) => {
    const currentQuestion = questionIdx + 1
    return (
        <>
        <p className={s.questions}>Questions
                <span className={s.point}> {currentQuestion}</span> / 12</p>
            </>);
}

export default CurrentQuestions;