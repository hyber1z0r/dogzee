import React, { ReactNode } from 'react';
import styles from './ErrorMessage.module.scss';

type Props = {
  children: ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return <p className={styles.error}>{children}</p>;
};

export default ErrorMessage;
