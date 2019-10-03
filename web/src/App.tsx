import React from 'react';
import { Layout } from 'antd';
import Routes from './components/Routes';
import Navbar from './components/Navbar';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Navbar/>
      <Content>
        <Routes/>
      </Content>
    </Layout>
  );
};

export default App;
