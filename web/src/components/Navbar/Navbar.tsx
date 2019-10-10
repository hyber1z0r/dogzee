import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import Menu from '../Menu';
import styles from './Navbar.module.scss';

const { Header } = Layout;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Header className={styles.container}>
      <Button type={'link'} icon={'menu'} onClick={toggleMenu} className={styles.menuButton}/>
      <Menu visible={isMenuOpen} onClose={toggleMenu}/>
    </Header>
  );
};

export default Navbar;
