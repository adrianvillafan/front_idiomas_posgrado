// src/pages/NotFound.jsx

import React from 'react';
import { Container, Header, Button, SpaceBetween } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <SpaceBetween size="l" direction="vertical" textAlign="center">
        <Header variant="h1">404</Header>
        <Header variant="h3">Página no encontrada</Header>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Button variant="primary" onClick={handleGoHome}>
          Volver al inicio
        </Button>
      </SpaceBetween>
    </Container>
  );
};

export default NotFound;