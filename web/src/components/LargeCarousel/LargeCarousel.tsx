import React, { ReactNode } from 'react';
import HorizontalScroll from '../HorizontalScroll';
import { Dog } from '../../generated/graphql';
import LargeDogCard from '../LargeDogCard';

type Props = {
  title?: ReactNode;
  dogs: Dog[];
}

const LargeCarousel = ({ title, dogs }: Props) => {
  return (
    <div>
      {title}
      <HorizontalScroll>
        {dogs.map((dog: Dog) => <LargeDogCard key={dog.id} dog={dog}/>)}
      </HorizontalScroll>
    </div>
  );
};

export default LargeCarousel;
