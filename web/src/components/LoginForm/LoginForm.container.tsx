import React from 'react';
import { useLoginMutation } from '../../generated/graphql';
import LoginForm, { LoginFormValues } from './LoginForm';
import { Redirect } from 'react-router';
import { setToken } from '../../utility/auth';

const LoginFormContainer = () => {
  const [login, { loading, error, data }] = useLoginMutation();

  const handleSubmit = async (credentials: LoginFormValues) => {
    try {
      await login({ variables: { credentials } });
    } catch (e) {
    }
  };

  if (data) {
    setToken(data.login);
    return <Redirect to={'/my-dogs'}/>;
  }

  return <LoginForm loading={loading} onSubmit={handleSubmit} submitError={error}/>;
};

export default LoginFormContainer;
