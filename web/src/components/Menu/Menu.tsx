import React, { CSSProperties } from 'react';
import { Drawer, Menu as AntMenu } from 'antd';

const drawerBodyStyle: CSSProperties = {
  padding: 0,
};

type Props = {
  visible: boolean;
  onClose: () => void;
}

const Menu = ({visible, onClose}: Props) => {
  return (
    <Drawer placement={'left'} visible={visible} onClose={onClose} title={'Menu'} bodyStyle={drawerBodyStyle}>
      <AntMenu mode={'vertical'}>
        <AntMenu.Item>Menu</AntMenu.Item>
        <AntMenu.Item>Menu</AntMenu.Item>
        <AntMenu.Item>Menu</AntMenu.Item>
        <AntMenu.Item>Menu</AntMenu.Item>
      </AntMenu>
    </Drawer>
  );
};

export default Menu;
