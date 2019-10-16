import React from 'react';
import logo from 'assets/images/dog-paw.svg';
import LoginForm from 'components/LoginForm';
import { isExpired } from 'utility/auth';
import { Redirect } from 'react-router';
import styles from './Login.module.scss';

const Login = () => {
  if (!isExpired()) {
    return <Redirect to={'/my-dogs'}/>;
  }
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img src={logo} alt={'Logo'} className={styles.logo}/>
        <h1>dogzee</h1>
        <h3>Log ind for at fortsætte</h3>
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;
