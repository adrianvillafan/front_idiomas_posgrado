// src/pages/Login.jsx

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
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
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h4" component="h1" gutterBottom>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Iniciar Sesión
        </Button>
        {error && <Typography color="error" style={{ marginTop: '16px' }}>{error}</Typography>}
      </Box>
    </Container>
  );
};

export default Login;