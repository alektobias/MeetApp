import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
AuthLayout.prototype = {
  children: PropTypes.element.isRequired,
};
