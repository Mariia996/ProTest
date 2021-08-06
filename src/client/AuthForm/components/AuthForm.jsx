import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Input from '../../../shared/components/Input'
import Button from '../../../shared/components/Button'
import { fields } from './fields'
import { initialState } from './initialState'
import { ReactComponent as GoggleSvg } from '../../../images/google.svg'
import useForm from '../../../shared/hooks/useForm'
import { logIn, register } from '../../../redux/auth/auth-operations'
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
    const errorCode = useSelector(state => state.auth.error, shallowEqual)
    console.log(errorCode);

    const [actionType, setActionType] = useState("");
    const dispatch = useDispatch()
    
    const onSubmit = data => {
        const action = (actionType === "login") ? logIn(data) : register(data)
        dispatch(action)
    };

    useEffect(() => {
        if (errorCode) {
            const errorMessage = errorCode === 409 ? 'You are already registered':'Incorrect email or password'
            error({
              text: errorMessage,
              delay: 2000
            }); 
        } 
    }, [errorCode])
    
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });
    

    return  (
    <div className={styles.authFormContainer} >
        <div className={styles.formGroup}>
            <p className={styles.formGroupText}>You can use your Google Account to authorize:</p>
            <div className={styles.googleBtnContainer}>
                <Button className={styles.googleBtn}><GoggleSvg className={styles.googleLogo}/>Google</Button> 
            </div>
            
            <p className={styles.formGroupText}>Or login to our app using e-mail and password:</p>
            <form onSubmit={handleSubmit}>
                <Input {...fields.email} value={data.email} onChange={handleChange }/>
                <Input {...fields.password} value={data.password} onChange={handleChange }/>
                <div className={styles.buttonContainer}>
                    <Button className={styles.button } type="submit" onClick={() => setActionType("login")}>Sign in</Button>
                    <Button className={styles.button } type="submit" onClick={() => setActionType("register")}>Sign up</Button>
                </div>
            </form>
        </div>
      </div>
  );
};

export default AuthForm;

