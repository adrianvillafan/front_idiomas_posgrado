// src/apis/services/rrhhService.js

import axiosInstance from './axiosInstance'; // Importar la instancia de Axios
import { apiRoutes } from '../apiRoutes'; // Importar las rutas de la API

// Crear un nuevo usuario
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post(apiRoutes.rrhh.crearUsuario, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Cambiar la contraseña de un usuario
export const changeUserPassword = async (passwordData) => {
  try {
    const response = await axiosInstance.post(apiRoutes.rrhh.cambiarContraseña, passwordData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Cambiar el secreto del usuario (autenticación de dos factores)
export const changeUserSecret = async (secretData) => {
  try {
    const response = await axiosInstance.post(apiRoutes.rrhh.cambiarSecreto, secretData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Obtener usuarios por rol
export const getUsersByRole = async (roleId) => {
  try {
    const response = await axiosInstance.get(apiRoutes.rrhh.obtenerUsuariosPorRol(roleId));
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Obtener la contraseña encriptada de un usuario por ID
export const getUserEncryptedPassword = async (id, userCode) => {
  try {
    const response = await axiosInstance.get(apiRoutes.rrhh.obtenerContraseñaPrivada(id, userCode));
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};