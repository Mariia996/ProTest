import Button from '../../shared/components/Button'
import TestQuestions from '../../client/Test/components/TestQuestions'
import {ReactComponent as ArrowRight} from '../../images/test-page/vectorRight.svg'
import {ReactComponent as ArrowLeft} from '../../images/test-page/vectorLeft.svg'

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
                <div className={s.pagination}>
                    <Button className={s.pagination_btn}>
                        <ArrowLeft className={`${s.pagination_icon} ${s.left_btn_icon}`} />
                        <span className={s.pagination_btn_text}>Previous question</span>
                    </Button>
                    <Button className={s.pagination_btn}>
                        <span className={s.pagination_btn_text}>Next question</span>
                        <ArrowRight className={s.pagination_icon} />
                    </Button>
                </div>
        </div>
    </div> );
}

export default TestPage;