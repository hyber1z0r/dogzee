import React from 'react';
import { Dog, Sex } from 'generated/graphql';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import styles from './DogCard.module.scss';
import Sexsymbols from 'constants/sexsymbols';

type Props = {
  dog: Dog;
  size: 'small' | 'large';
}

const DogCard = ({ dog }: Props) => {
  return (
    <Link to={`/dogs/${dog.id}`} className={styles.container}>
      <Card className={styles.card} bordered={false}
            cover={<img src={dog.image!} alt={'Cover'} className={styles.coverImage}/>}>
        <Card.Meta title={<div className={styles.title}>
          <div className={styles.name}>{dog.fullName}</div>
          <div>{Sexsymbols[dog.sex! as Sex]}</div>
        </div>}/>
      </Card>
    </Link>
  );
};

export default DogCard;
