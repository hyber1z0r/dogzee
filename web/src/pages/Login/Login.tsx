import React from 'react';
import styles from './Login.module.scss';
import logo from '../../assets/images/dog-paw.svg';
import LoginForm from '../../components/LoginForm';
import { LoginFormValues } from '../../components/LoginForm/LoginForm';
import { useLoginMutation } from '../../generated/graphql';
import { Redirect } from 'react-router';

const Login = () => {
  const [login, { loading, error, data }] = useLoginMutation();

  const handleSubmit = async (credentials: LoginFormValues) => {
    try {
      await login({ variables: { credentials } });
    } catch (e) {}
  };

  if (data) {
    return <Redirect to={'/'} />;
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img src={logo} alt={'Logo'} className={styles.logo}/>
        <h1>Dogger</h1>
        <h3>Log ind for at fortsætte</h3>
        <LoginForm onSubmit={handleSubmit} loading={loading}/>
      </div>
    </div>
  );
};

export default Login;
