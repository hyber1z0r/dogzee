import React, { ReactNode } from 'react';
import { Button } from 'antd';
import styles from './GhostButton.module.scss';

type Props = {
  children: ReactNode
} & Omit<Button['props'], 'type' | 'href'>;

const GhostButton = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Button {...rest} type={'default'} className={styles.button}>{children}</Button>
  );
};

export default GhostButton;
