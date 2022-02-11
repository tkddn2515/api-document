import React, { useCallback, useState, useRef, useEffect } from 'react'
import styles from './Login.module.css';
import { useLazyQuery, gql } from "@apollo/client";
import { useNavigate } from 'react-router';
import { useSelector, useDispatch, connect } from 'react-redux';
import { SET_MEMBER } from '../store';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
	const GET_LOGIN_RESULT = gql`
		query GetLoginResult($account: String!, $password: String!){
				member(account: $account, password: $password){
					id
					account
					admin
				}
			}
	`;

	const member = useSelector(state => state.member);
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

	const [onClickLogin, { loading, error, data, called }] = useLazyQuery(
		GET_LOGIN_RESULT, {
			variables: { account, password }
		}
	);

	useEffect(() => {
		if(data) {
			if(data.member) {
				console.log("data.member", data.member);
				dispatch(SET_MEMBER(data.member));
			}
		}
	}, [data])

	useEffect(() => {
		if(member){
			navigate("/main");
		}
	}, [member])
	
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
							<button className="btn" type='button' onClick={() => onClickLogin()}>
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