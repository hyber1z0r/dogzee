import React, { useState } from 'react';
import { Button, Drawer, Icon, Layout } from 'antd';
const { Header } = Layout;
import styles from './Navbar.module.scss';
import Menu from '../Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Header className={styles.container}>
      <Button type={'link'} icon={'menu'} onClick={toggleMenu} />
      <Menu visible={isMenuOpen} onClose={toggleMenu} />
    </Header>
  );
};

export default Navbar;
