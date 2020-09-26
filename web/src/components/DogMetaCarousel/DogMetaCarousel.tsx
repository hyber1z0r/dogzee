import React from 'react';
import HorizontalScroll from 'components/HorizontalScroll';
import { Dog } from 'generated/graphql';
import DogMetaCard from 'components/DogMetaCard';

type Props = {
  dog: Dog;
}

const DogMetaCarousel = ({ dog }: Props) => {
  return (
    <HorizontalScroll>
      <DogMetaCard label={'Alder'} value={'1'}/>
      <DogMetaCard label={'Køn'} value={'Han'}/>
      <DogMetaCard label={'Farve'} value={'Sort'}/>
    </HorizontalScroll>
  );
};

export default DogMetaCarousel;
