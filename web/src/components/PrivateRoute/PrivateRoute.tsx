import React, { ComponentType } from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';
import { isExpired } from '../../utility/auth';

type Props = {
  component: ComponentType;
} & RouteProps;

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route {...rest} render={(renderProps: RouteComponentProps) => (
      isExpired() ? <Redirect to={{ pathname: '/', state: { from: renderProps.location } }}/> :
        <Component {...renderProps} />
    )}/>
  );
};

export default PrivateRoute;
