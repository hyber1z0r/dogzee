import React from 'react';
import { Layout } from 'antd';
import Routes from './components/Routes';
import { ApolloProvider } from '@apollo/react-common';
import client from './apollo/client';
import styles from './App.module.scss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Layout className={styles.layout}>
        <Routes/>
      </Layout>
    </ApolloProvider>
  );
};

export default App;
