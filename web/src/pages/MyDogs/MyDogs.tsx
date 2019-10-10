import React from 'react';
import LargeCarousel from '../../components/LargeCarousel';
import styles from './MyDogs.module.scss';

const MyDogs = () => {
  return (
    <>
      <LargeCarousel title={<h1 className={styles.heading}>Mine hunde</h1>}/>
    </>
  );
};

export default MyDogs;
