import React, { ReactNode } from 'react';
import HorizontalScroll from '../HorizontalScroll';
import { Dog } from '../../generated/graphql';
import DogCard from '../DogCard';

type Props = {
  title?: ReactNode;
  dogs: Dog[];
}

const LargeCarousel = ({ title, dogs }: Props) => {
  return (
    <div>
      {title}
      <HorizontalScroll>
        {dogs.map((dog: Dog) => <DogCard size={'large'} key={dog.id} dog={dog}/>)}
      </HorizontalScroll>
    </div>
  );
};

export default LargeCarousel;
