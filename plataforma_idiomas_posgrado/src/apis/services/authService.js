//src/apis/services/userService.js

import axios from 'axios';
import { apiRoutes } from '../apiRoutes';

export const iniciarSesion = async (credentials) => {
  try {
    const response = await axios.post(apiRoutes.iniciarSesion, credentials);
    const { token_session, ...userData } = response.data;
    // Guardar el token y otros datos en sessionStorage
    sessionStorage.setItem('token_session', token_session);
    sessionStorage.setItem('user_data', JSON.stringify(userData));
    return response.data;
  } catch (error) {
    console.error('Error validando usuario:', error);
    throw error;
  }
};
