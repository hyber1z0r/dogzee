import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './HorizontalScroll.module.scss';

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
}

const HorizontalScroll = ({ children, className }: Props) => {
  return (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
