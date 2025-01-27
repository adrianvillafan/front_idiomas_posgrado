const API_BASE_URL = 'http://localhost:8080/backend_idiomas/plataforma/public/index.php';

export const apiRoutes = {
  base: API_BASE_URL, // URL base de la API

  // Rutas de PHP
  iniciarSesion: `${API_BASE_URL}?route=auth`, // Iniciar sesión (POST)


  
};

export default apiRoutes;