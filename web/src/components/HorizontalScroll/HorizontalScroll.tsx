import React, { ReactNode } from 'react';
import styles from './HorizontalScroll.module.scss';

type Props = {
  children: ReactNode | ReactNode[];
}

const HorizontalScroll = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
