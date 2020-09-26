import React from 'react';
import logo from 'assets/images/dog-paw.svg';
import LoginForm from 'components/LoginForm';
import { isExpired } from 'utility/auth';
import { Redirect } from 'react-router';
import { Typography } from 'antd';
import styles from './Login.module.scss';

const { Title } = Typography;

const Login = () => {
  if (!isExpired()) {
    return <Redirect to={'/my-dogs'}/>;
  }
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img src={logo} alt={'Logo'} className={styles.logo}/>
        <Title level={1}>dogzee</Title>
        <Title level={4}>Log ind for at fortsætte</Title>
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;
