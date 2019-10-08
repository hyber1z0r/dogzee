import React from 'react';
import { useLoginMutation } from '../../generated/graphql';
import LoginForm, { LoginFormValues } from './LoginForm';
import { Redirect } from 'react-router';

const LoginFormContainer = () => {
  const [login, { loading, error, data }] = useLoginMutation();

  const handleSubmit = async (credentials: LoginFormValues) => {
    try {
      await login({ variables: { credentials } });
    } catch (e) {
    }
  };

  if (data) {
    return <Redirect to={'/'}/>;
  }

  return <LoginForm loading={loading} onSubmit={handleSubmit} submitError={error}/>;
};

export default LoginFormContainer;
