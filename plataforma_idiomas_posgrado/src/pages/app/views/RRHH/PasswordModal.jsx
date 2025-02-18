import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, SpaceBetween, Input, Alert } from '@cloudscape-design/components';

const PasswordModal = ({ visible, onDismiss, onFetchPassword }) => {
  const [userCode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordFetched, setIsPasswordFetched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFetchPassword = async () => {
    try {
      const fetchedPassword = await onFetchPassword(userCode);
      setPassword(fetchedPassword);
      setIsPasswordFetched(true);
      setSuccessMessage('Contraseña obtenida exitosamente.');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message || 'Error fetching password.');
      setSuccessMessage('');
    }
  };

  const handleUserCodeChange = (e) => {
    const value = e.detail.value;
    if (/^\d{0,6}$/.test(value)) {
      setUserCode(value);
    }
  };

  const handleBack = () => {
    setIsPasswordFetched(false);
    setUserCode('');
    setPassword('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleClose = () => {
    handleBack();
    onDismiss();
  };

  return (
    <Modal
      visible={visible}
      onDismiss={handleClose}
      header="Contraseña"
      footer={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link" onClick={handleClose}>Cerrar</Button>
          {isPasswordFetched ? (
            <Button variant="primary" onClick={handleBack}>Volver</Button>
          ) : (
            <Button variant="primary" onClick={handleFetchPassword}>Obtener Contraseña</Button>
          )}
        </SpaceBetween>
      }
    >
      <Box textAlign="center">
        {isPasswordFetched ? (
          <>
            {successMessage && <Alert type="success">{successMessage}</Alert>}
            <p>Contraseña: {password}</p>
          </>
        ) : (
          <>
            {errorMessage && <Alert type="error">{errorMessage}</Alert>}
            <img src="https://play-lh.googleusercontent.com/NntMALIH4odanPPYSqUOXsX8zy_giiK2olJiqkcxwFIOOspVrhMi9Miv6LYdRnKIg-3R=w240-h480-rw" alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
            <Box display="flex" justifyContent="center">
              <Input
                name="userCode"
                placeholder="Ingrese el código de usuario"
                value={userCode}
                onChange={handleUserCodeChange}
                maxLength={6}
                style={{ width: '150px', textAlign: 'center' }}
              />
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default PasswordModal;