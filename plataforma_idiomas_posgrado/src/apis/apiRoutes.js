//src/apis/apiRoutes.js

const API_BASE_URL = 'http://localhost:8080/backend_idiomas/plataforma/public/index.php';

export const apiRoutes = {
  base: API_BASE_URL, // URL base de la API

  // Rutas de PHP
  iniciarSesion: `${API_BASE_URL}?route=auth`, // Iniciar sesión (POST)

  // Rutas de RRHH
  rrhh: {
    crearUsuario: `${API_BASE_URL}?route=rrhh`, // Crear un nuevo usuario (POST)
    cambiarContraseña: `${API_BASE_URL}?route=rrhh`, // Cambiar contraseña de un usuario (POST)
    cambiarSecreto: `${API_BASE_URL}?route=rrhh`, // Cambiar el secreto del usuario (POST)
    obtenerUsuariosPorRol: (roleId) => `${API_BASE_URL}?route=rrhh&role_id=${roleId}`, // Obtener usuarios por rol (GET)
    obtenerContraseñaPrivada: (id, userCode) => `${API_BASE_URL}?route=rrhh&id=${id}&userCode=${userCode}`, // Obtener contraseña privada por ID (GET)
  },

  // Rutas de usuarios
};

export default apiRoutes;