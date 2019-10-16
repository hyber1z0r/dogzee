import React, { ReactNode } from 'react';
import {
  Dog,
  useLargeCarouselQuery,
} from 'generated/graphql';
import { Spin } from 'antd';
import LargeCarousel from './LargeCarousel';
import LoadingErrorAlert from 'components/LoadingErrorAlert';

type Props = {
  title?: ReactNode;
}

const LargeCarouselContainer = ({ title }: Props) => {
  const { data, loading, error } = useLargeCarouselQuery();

  if (loading) {
    return <Spin />;
  } else if (error) {
    return <LoadingErrorAlert/>;
  }

  const dogs: Dog[] = data!.me!.dogs!;

  return (
    <LargeCarousel title={title} dogs={dogs}/>
  );
};

export default LargeCarouselContainer;
