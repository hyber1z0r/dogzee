import React, { ComponentType } from 'react';
import Navbar from 'components/Navbar';
import { Layout } from 'antd';

const { Content } = Layout;

const withNavbar = <P extends object>(BaseComponent: ComponentType<P>) => (props: P) => {
  return (
    <>
      <Navbar/>
      <Content>
        <BaseComponent {...props}/>
      </Content>
    </>
  );
};

export default withNavbar;
