//src/apis/services/userService.js

import axios from 'axios';
import { apiRoutes } from '../apiRoutes';

// Función para validar usuario
export const validarUsuario = async (credentials) => {
  try {
    const response = await axios.post(apiRoutes.validarUsuario, new URLSearchParams(credentials));
    return response.data;
  } catch (error) {
    console.error('Error validando usuario:', error);
    throw error;
  }
};

// Función para cerrar sesión
export const cerrarSesion = async () => {
  try {
    const response = await axios.post(apiRoutes.cerrarSesion);
    return response.data;
  } catch (error) {
    console.error('Error cerrando sesión:', error);
    throw error;
  }
};