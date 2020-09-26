import { Button, Form, Icon, Input, Typography } from 'antd';
import * as React from 'react';
import { FormComponentProps } from 'antd/es/form';
import { Link } from 'react-router-dom';
import { ApolloError } from 'apollo-client';
import { GraphQLError } from 'graphql';
import ErrorMessage from 'components/ErrorMessage';
import styles from './LoginForm.module.scss';

const { Paragraph } = Typography;

export type LoginFormValues = {
  email: string;
  password: string;
}

type Props = {
  onSubmit: (values: LoginFormValues) => void;
  loading: boolean;
  submitError: ApolloError | undefined;
} & FormComponentProps<LoginFormValues>

const LoginForm = ({ onSubmit, loading, submitError, form }: Props) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateFields((errors: any, values: LoginFormValues) => {
      if (!errors) {
        onSubmit(values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.loginForm}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Indtast venligst email' }],
        })(
          <Input
            prefix={<Icon type={'user'} style={{ color: 'rgba(0,0,0,.25)' }}/>}
            placeholder={'Email'}
            size={'large'}
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Indtast venligst kodeord' }],
        })(
          <Input
            prefix={<Icon type={'lock'} style={{ color: 'rgba(0,0,0,.25)' }}/>}
            type={'password'}
            placeholder={'Kodeord'}
            size={'large'}
          />,
        )}
        <Link to={'/forgot-password'}>
          Glemt kodeord?
        </Link>
      </Form.Item>
      <Form.Item>
        <Button type={'primary'} size={'large'} htmlType={'submit'} loading={loading}
                className={styles.loginFormButton}>
          Log ind
        </Button>
        {!!submitError && submitError.graphQLErrors.map((error: GraphQLError, index: number) => (
          <ErrorMessage key={index}>{error.message}</ErrorMessage>
        ))}
        <Paragraph className={styles.signup}>Ny bruger? <Link to={'/signup'}>Opret profil</Link></Paragraph>
      </Form.Item>
    </Form>
  );
};

export default Form.create<Props>({ name: 'login' })(LoginForm);
