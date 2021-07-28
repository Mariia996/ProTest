import Button from '../../shared/components/Button'
import TestQuestions from '../../client/Test/components/TestQuestions'

import s from './TestPage.module.scss';

const TestPage = () => {
    return (
    <div className={s.container}>
        <div className={s.wrapper}>
                <div className={s.titleContainer}>
                    <h2 className={s.title}>[ Testing <span className={s.titleText}>theory_ ]</span></h2>
                    <Button className={s.finishBtn}>Finish test</Button>
                </div>
                <TestQuestions />
        </div>
    </div> );
}

export default TestPage;