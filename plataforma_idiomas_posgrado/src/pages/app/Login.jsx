import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormField, Input, Button, Header, SpaceBetween, Alert } from '@cloudscape-design/components';
import { iniciarSesion } from '../include/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    setShowAlert(false);
    try {
      await iniciarSesion({ email, password });
      setError('');
      setSuccess('Inicio de sesión exitoso.');
      setShowAlert(true);
      setTimeout(() => {
        navigate('/home');
      }, 1000); // Redirigir después de 1.5 segundos
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      setSuccess('');
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.centeredContainer}>
        <Container header={<Header variant="h1">Iniciar Sesión</Header>}>
          <SpaceBetween direction="vertical" size="l">
            {showAlert && (
              <Alert
                type={error ? "error" : "success"}
                header={error ? "Error de inicio de sesión" : "Inicio de sesión exitoso"}
                dismissible
                onDismiss={() => setShowAlert(false)}
              >
                {error || success}
              </Alert>
            )}
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
            <Button
              variant="primary"
              onClick={handleLogin}
              disabled={isLoading}
              loading={isLoading}
            >
              Iniciar Sesión
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
    backgroundImage: 'url("https://cloudfront-us-east-1.images.arcpublishing.com/infobae/6SBGANE33NECDIUZ24AN7DI23Q.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  centeredContainer: {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }
};

export default Login;