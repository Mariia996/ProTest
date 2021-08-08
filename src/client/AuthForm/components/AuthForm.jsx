import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import { fields } from './fields';
import { initialState } from './initialState';
import { ReactComponent as GoggleSvg } from '../../../images/google.svg';
import useForm from '../../../shared/hooks/useForm';
import { logIn, register, googleLogin } from '../../../redux/auth/auth-operations';
import { error } from '@pnotify/core';
import GoogleLogin from 'react-google-login';
import { logIn, register } from '../../../redux/auth/auth-operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const errorCode = useSelector(state => state.auth.error, shallowEqual);

  const [actionType, setActionType] = useState('');
  const dispatch = useDispatch();

  const onSubmit = data => {
    const action = actionType === 'login' ? logIn(data) : register(data);
    dispatch(action);
  };

  const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });
    useEffect(() => {
        if (errorCode) {
            const errorMessage = (errorCode.response.status === 409) ? 'You are already registered' : 'Incorrect email or password'
            toast.error(
            errorMessage,
            { position: toast.POSITION.TOP_RIGHT },
          );
        } 
    }, [errorCode])

  const responseSuccessGoogle = ({tokenId}) => {
    dispatch(googleLogin({tokenId}))
  }

  const responseErrorGoogle = () => {

  }
  return (
      <>
    <div className={styles.authFormContainer}>
      <div className={styles.formGroup}>
        <p className={styles.formGroupText}>
          You can use your Google Account to authorize:
        </p>
        <div className={styles.googleBtnContainer}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          className={styles.googleBtn}
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
        />
        </div>
        <p className={styles.formGroupText}>Or login to our app using e-mail and password:</p>
        <form onSubmit={handleSubmit}>
          <Input {...fields.email} value={data.email} onChange={handleChange} />
          <Input {...fields.password} value={data.password} onChange={handleChange}/>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} type="submit" onClick={() => setActionType('login')}>Sign in</Button>
            <Button className={styles.button} type="submit" onClick={() => setActionType('register')}>Sign up</Button>
          </div>
        </form>
      </div>
    </div>
 <ToastContainer />
 </>
  );
};

export default AuthForm;