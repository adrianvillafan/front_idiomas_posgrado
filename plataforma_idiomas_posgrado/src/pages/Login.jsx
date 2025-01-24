// src/pages/Login.jsx

import React, { useState } from 'react';
import { Container, FormField, Input, Button, Header, SpaceBetween } from '@cloudscape-design/components';
import { validarUsuario } from '../apis/services/userService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await validarUsuario({ mail: email, pass: password });
      // Manejar la respuesta según sea necesario
      console.log('Login exitoso:', response);
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  };

  return (
    <Container header={<Header variant="h1">Iniciar Sesión</Header>}>
      <SpaceBetween size="l">
        <FormField label="Correo Electrónico">
          <Input
            value={email}
            onChange={(e) => setEmail(e.detail.value)}
          />
        </FormField>
        <FormField label="Contraseña">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.detail.value)}
          />
        </FormField>
        <Button variant="primary" onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </SpaceBetween>
    </Container>
  );
};

export default Login;