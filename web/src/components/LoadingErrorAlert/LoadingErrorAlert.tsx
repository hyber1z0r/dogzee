import React from 'react';
import { Alert } from 'antd';

const LoadingErrorAlert = () => {
  return (
    <Alert type={'error'} message={'Der skete en fejl under indlæsningen'}/>
  );
};

export default LoadingErrorAlert;
