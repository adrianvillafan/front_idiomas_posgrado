import React from 'react';
import { Container, Header, Button, SpaceBetween, Box } from '@cloudscape-design/components';
import { useFlashbar } from './hooks/useFlashbar';

const Home = () => {
  const { FlashbarItems } = useFlashbar();

  const handleUpdateFlashbarItems = () => {
    FlashbarItems.update([
      {
        type: 'success',
        dismissible: true,
        dismissLabel: "Dismiss message",
        content: 'Welcome to the dashboard!',
      },
      {
        type: "warning",
        dismissible: true,
        dismissLabel: "Dismiss message",
        content: "This is a warning flash message",
      },
    ]);
  };

  const handleClearFlashbarItems = () => {
    FlashbarItems.clear();
  };

  return (
    <Container header={<Header variant="h1">Bienvenido</Header>}>
      <SpaceBetween direction="vertical" size="l">
        <Box>
          <p>Esta es la página principal a la que llegas después de iniciar sesión.</p>
        </Box>
        <Button variant="primary" onClick={handleUpdateFlashbarItems}>Mostrar Flashbar</Button>
        <Button variant="secondary" onClick={handleClearFlashbarItems}>Limpiar Flashbar</Button>
      </SpaceBetween>
    </Container>
  );
};

export default Home;