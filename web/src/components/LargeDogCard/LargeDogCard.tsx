import React from 'react';
import styles from './LargeDogCard.module.scss';
import { Dog } from '../../generated/graphql';
import { Avatar, Card } from 'antd';
import GhostButton from '../GhostButton';
import { Link } from 'react-router-dom';

type Props = {
  dog: Dog;
}

const LargeDogCard = ({ dog }: Props) => {
  return (
    <Link to={`/dogs/${dog.id}`} className={styles.container}>
      <Card className={styles.card} bordered={false}>
        <Avatar shape={'circle'} icon={'user'} className={styles.avatar}/>
        <h2>{dog.fullName}</h2>
        <p>Sort han Mittelspitz, født den 23. december 2017, sammen med 5 søskende.</p>
        <GhostButton>Rediger</GhostButton>
      </Card>
    </Link>
  );
};

export default LargeDogCard;
