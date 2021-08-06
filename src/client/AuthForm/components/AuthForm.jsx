import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import { fields } from './fields';
import { initialState } from './initialState';
import { ReactComponent as GoggleSvg } from '../../../images/google.svg';
import useForm from '../../../shared/hooks/useForm';
import { logIn, register } from '../../../redux/auth/auth-operations';

// import GoogleLogin from 'react-google-login';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const [actionType, setActionType] = useState('');
  const dispatch = useDispatch();

  const onSubmit = data => {
    const action = actionType === 'login' ? logIn(data) : register(data);
    dispatch(action);
  };

  const [data, , handleChange, handleSubmit] = useForm({
    initialState,
    onSubmit,
  });

  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(
          () => console.log('init OK'),
          () => console.log('init ERROR'),
        );
    });
  });

  const [name, setName] = useState(null);

  function signIn() {
    const _authOk = googleUser => {
      setName(googleUser.getBasicProfile().getEmail());
      console.log('auth OK', googleUser);
      //   googleUser.getBasicProfile().getEmail();
    };
    const _authErr = () => console.log('auth ERROR');

    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({
      scope: 'profile email',
    }).then(_authOk, _authErr);
  }

  //   const responseGoogle = response => {
  //     console.log(response);
  //     console.log(response.profileObj);
  //   };

  return (
    <div className={styles.authFormContainer}>
      <div className={styles.formGroup}>
        <p className={styles.formGroupText}>
          You can use your Google Account to authorize:
        </p>
        <div className={styles.googleBtnContainer}>
          <Button onClick={signIn} className={styles.googleBtn}>
            <GoggleSvg className={styles.googleLogo} />
            Google
          </Button>
        </div>

        {/* <GoogleLogin
            clientId="696692531480-0tf1tisbdvpba2sausc94tab3ef0rb2n.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          /> */}

        <p className={styles.formGroupText}>
          Or login to our app using e-mail and password:
        </p>
        <form onSubmit={handleSubmit}>
          <Input {...fields.email} value={data.email} onChange={handleChange} />
          <Input
            {...fields.password}
            value={data.password}
            onChange={handleChange}
          />
          <div className={styles.buttonContainer}>
            <Button
              className={styles.button}
              type="submit"
              onClick={() => setActionType('login')}
            >
              Sign in
            </Button>
            <Button
              className={styles.button}
              type="submit"
              onClick={() => setActionType('register')}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
