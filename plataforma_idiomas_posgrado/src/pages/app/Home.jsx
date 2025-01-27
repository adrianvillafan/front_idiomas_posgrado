import React from 'react';
import { Container, Header, Button, SpaceBetween, Box } from '@cloudscape-design/components';

const Home = () => {
  return (
    <Container header={<Header variant="h1">Bienvenido</Header>}>
      <SpaceBetween direction="vertical" size="l">
        <Box>
          <p>Esta es la página principal a la que llegas después de iniciar sesión.</p>
        </Box>
        <Button variant="primary">Acción Principal</Button>
        <Button variant="link">Otra Acción</Button>
      </SpaceBetween>
    </Container>
  );
};

export default Home;