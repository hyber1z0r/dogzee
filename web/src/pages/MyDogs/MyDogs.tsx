import React from 'react';
import LargeCarousel from 'components/LargeCarousel';
import { Typography } from 'antd';
import styles from './MyDogs.module.scss';

const { Title } = Typography;

const MyDogs = () => {
  return (
    <>
      <LargeCarousel title={<Title level={1} className={styles.heading}>Mine hunde</Title>}/>
    </>
  );
};

export default MyDogs;
