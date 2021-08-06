import PropTypes from 'prop-types';

import Button from '../../../../shared/components/Button';
import { ReactComponent as ArrowRight } from '../../../../images/test-page/vectorRight.svg';
import { ReactComponent as ArrowLeft } from '../../../../images/test-page/vectorLeft.svg';

import s from './Pagination.module.scss';

const Pagination = ({ handleLeftClick, handleRightClick, questionIdx }) => {
    return (
        <div className={s.pagination}>
            <Button className={questionIdx === 0 ? s.pagination_btn_hidden : s.pagination_btn} onClick={handleLeftClick}>
                <ArrowLeft className={`${s.pagination_icon} ${s.left_btn_icon}`} />
                <span className={s.pagination_btn_text}>Previous question</span>
            </Button>
            <Button className={questionIdx === 11 ? s.pagination_btn_hidden : s.pagination_btn} onClick={handleRightClick}>
                <span className={s.pagination_btn_text}>Next question</span>
                <ArrowRight className={s.pagination_icon} />
            </Button>
        </div> );
}

export default Pagination;

Pagination.defaultProps = {
    handleLeftClick: () => { },
    handleRightClick: () => { },
    questionIdx: 0
}

Pagination.propTypes = {
    handleLeftClick: PropTypes.func.isRequired,
    handleRightClick: PropTypes.func.isRequired,
    questionIdx: PropTypes.number
}
