import React from 'react';
import createRouter from './routes';
import { useSelector } from 'react-redux';

export default function src() {
  const { signed } = useSelector(state => state.auth);
  const Routes = createRouter(signed);
  return <Routes />;
}
