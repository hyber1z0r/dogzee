import React, { CSSProperties } from 'react';
import { Dog } from 'generated/graphql';
import styles from './DogDetail.module.scss';
import { Typography } from 'antd';
import DogMetaCarousel from '../../components/DogMetaCarousel';

const { Title, Paragraph } = Typography;

type Props = {
  dog: Dog;
}

const DogDetail = ({ dog }: Props) => {
  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${dog.image!})`,
  };

  return (
    <div className={styles.container}>
      <div role={'banner'} className={styles.cover} style={backgroundStyle}/>
      <div className={styles.dataContainer}>
        <Title level={3}>{dog.fullName}</Title>
        <Paragraph type={'secondary'}>Mittelspitz TODO</Paragraph>
        <div className={styles.metaCarouselContainer}>
          <DogMetaCarousel dog={dog}/>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
