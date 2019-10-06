import React from 'react';
import styles from './MyDogs.module.scss';
import LargeCarousel from '../../components/LargeCarousel';

const MyDogs = () => {
  return (
    <>
      <LargeCarousel title={<h1 className={styles.heading}>Mine hunde</h1>}/>
    </>
  );
};

export default MyDogs;
