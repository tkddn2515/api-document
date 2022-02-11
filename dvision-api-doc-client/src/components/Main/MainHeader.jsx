import styles from './MainHeader.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const MainHeader = () => {
  const member = useSelector(state =>state.member);
  const navigate = useNavigate();

  const onClickLogo = useCallback(() => {
    document.location.href = "https://www.dvision.app";
  }, [])

  const onClickLogin = useCallback(() => {
    navigate("/login");
  }, [])

  return (
    <>
      <div className={styles.header}>
        <img className={styles.logo} onClick={onClickLogo} alt="logo" />
        <div className={styles.profile}>
          {
            member ? 
            <div>프로필</div> :
            <div className={styles.login} onClick={onClickLogin}>로그인</div>
          }
        </div>
      </div>
    </>
  )
}

export default MainHeader;