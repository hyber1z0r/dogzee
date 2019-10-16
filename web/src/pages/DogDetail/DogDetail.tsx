import React from 'react';
import { useParams } from 'react-router';
import { useDogDetailQuery } from 'generated/graphql';
import { Spin } from 'antd';
import LoadingErrorAlert from 'components/LoadingErrorAlert';

type RouteParams = {
  dogId: string;
}

const DogDetail = () => {
  const { dogId } = useParams<RouteParams>();
  const { data, loading, error } = useDogDetailQuery({ variables: { dogId } });

  if (loading) {
    return <Spin/>;
  } else if (error) {
    return <LoadingErrorAlert/>;
  }

  const dog = data && data.dog;
  return (
    <h1>Hello from dog</h1>
  );
};

export default DogDetail;
