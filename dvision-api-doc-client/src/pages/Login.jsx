import React, { memo, useCallback, useState, useRef } from 'react'
import styles from './Login.module.css';
import { post } from '../api';

const Login = () => {

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const accountRef = useRef(null);
  const passwordRef = useRef(null);

  const onChangeInputAccount = useCallback((e) => {
    setAccount(e.target.value);
  }, []);

  const onChangeInputPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onClickLogin = useCallback((e) => {
    e.preventDefault();
    post();
  }, [])

	return (
		<>
			<div className={styles.background}>
				<div className={styles.backgroundCover}></div>
				<div className={`${styles.container} center`}>
					<div className={styles.desContainer}>
            <img className={`${styles.desBackImg} center`} alt="dvision poster" />
            <img className={`${styles.desFrontImg} center`} alt="dvision poster" />
					</div>
					<div className={styles.loginContainer}>
						<form className={`${styles.loginForm} center`}>
							<div className={styles.loginTitle}>Sign in</div>
							<div className={styles.loginAccountForm}>
								<input
									className={styles.loginAccount}
									type="text"
									placeholder="Please Enter Account"
									maxLength="20"
                  value={account}
                  onChange={onChangeInputAccount}
                  ref={accountRef}
								/>
							</div>
							<div className={styles.loginPasswordForm}>
								<input
									className={styles.loginPassword}
									type="password"
									placeholder="Please Enter Password"
									maxLength="40"
                  value={password}
                  onChange={onChangeInputPassword}
                  ref={passwordRef}
								/>
							</div>
							<button className="btn" onClick={onClickLogin}>
								START NOW
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;