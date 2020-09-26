import React from 'react';
import { Card, Typography } from 'antd';
import styles from './DogMetaCard.module.scss';
const { Paragraph } = Typography;

type Props = {
  label: string;
  value: string;
};

const DogMetaCard = ({ label, value }: Props) => {
  return (
    <Card className={styles.card} bordered={false}>
      <Paragraph className={styles.label}>{label}</Paragraph>
      <Paragraph className={styles.value} strong={true}>{value}</Paragraph>
    </Card>
  );
};

export default DogMetaCard;
