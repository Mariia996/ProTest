import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import s from './LoaderSpinner.module.scss';

const LoaderSpinner = () => {
    return (
        <>
    <Loader
        className={s.loader}
        type="ThreeDots"
        color="#ffaf0f"
        height={100}
        width={100}
            />
            </>
    )
};

export default LoaderSpinner;