import React from 'react';
import styles from './Login.module.scss';
import logo from '../../assets/images/dog-paw.svg';
import LoginForm from '../../components/LoginForm';

const Login = () => {
    return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img src={logo} alt={'Logo'} className={styles.logo}/>
        <h1>Dogger</h1>
        <h3>Log ind for at fortsætte</h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
