import React from 'react';
import { Layout } from 'antd';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/react-common';
import client from './apollo/client';
import styles from './App.module.scss';

const { Content } = Layout;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Layout className={styles.layout}>
        <Navbar/>
        <Content>
          <Routes/>
        </Content>
      </Layout>
    </ApolloProvider>
  );
};

export default App;
