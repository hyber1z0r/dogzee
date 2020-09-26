import React from 'react';
import DogDetail from './DogDetail';
import { useParams } from 'react-router';
import { useDogDetailQuery } from 'generated/graphql';
import { Spin } from 'antd';
import LoadingErrorAlert from 'components/LoadingErrorAlert';

type RouteParams = {
  dogId: string;
}

const DogDetailContainer = () => {
  const { dogId } = useParams<RouteParams>();
  const { data, loading, error } = useDogDetailQuery({ variables: { dogId } });

  if (loading) {
    return <Spin/>;
  } else if (error) {
    return <LoadingErrorAlert/>;
  }

  const dog = data && data.dog;

  return (
    <DogDetail dog={dog!}/>
  );
};

export default DogDetailContainer;
