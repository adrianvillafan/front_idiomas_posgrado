import React from 'react';
import { Container, Header, Button, SpaceBetween } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.background}>
      <div style={styles.centeredContainer}>
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
      </div>
    </div>
  );
};

const styles = {
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  centeredContainer: {
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default NotFound;