import AuthForm from '../../client/AuthForm/components/AuthForm'

import styles from './AuthPage.module.scss'

const  AuthPage = () => {
    return (
            <div className={`${styles.authPageContainer} ${styles.container} `}>
                <div className={styles.wrapper}>
                    <div className={styles.authPageTextWrapper}>
                        <h1 className={styles.authPageTitle}>Pro Test</h1>
                        <p className={styles.authPageText}><span className={styles.authPageSpan}>[</span> We will help you find weak points
                        <br/> in knowledge so that you can strengthen it. We will show you what is relevant to know for a <span className={styles.authPageSpan}>QA Engineer</span> and will try to make the learning process more diverse_ <span className={styles.authPageSpan}>]</span></p>
                    </div>
                    <div><AuthForm/></div>
                </div>
            </div>
    )
}

export default AuthPage;