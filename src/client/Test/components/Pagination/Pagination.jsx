import Button from '../../../../shared/components/Button';
import { ReactComponent as ArrowRight } from '../../../../images/test-page/vectorRight.svg';
import { ReactComponent as ArrowLeft } from '../../../../images/test-page/vectorLeft.svg';

import s from './Pagination.module.scss';

const Pagination = () => {
    return (
        <div className={s.pagination}>
            <Button className={s.pagination_btn}>
                <ArrowLeft className={`${s.pagination_icon} ${s.left_btn_icon}`} />
                <span className={s.pagination_btn_text}>Previous question</span>
            </Button>
            <Button className={s.pagination_btn}>
                <span className={s.pagination_btn_text}>Next question</span>
                <ArrowRight className={s.pagination_icon} />
            </Button>
        </div> );
}

export default Pagination;