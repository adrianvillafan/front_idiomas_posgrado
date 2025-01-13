const API_BASE_URL = 'https://posgrado.unmsm.edu.pe/unidad_idiomas/admin';

export const apiRoutes = {
  base: API_BASE_URL, // URL base de la API

  // Rutas de PHP
  validarUsuario: `${API_BASE_URL}/validarUsuario.php`, // Validar usuario
  cerrarSesion: `${API_BASE_URL}/cerrarSesion.php`, // Cerrar sesión

  docentes: `${API_BASE_URL}/docentes.php`, // Gestión de docentes
  estudiantesExamenes: `${API_BASE_URL}/estudiantes_examenes.php`, // Gestión de exámenes de estudiantes
  estudiantesListaPdf: `${API_BASE_URL}/estudiantes_lista_pdf.php`, // Lista de estudiantes en PDF
  examenes: `${API_BASE_URL}/examenes.php`, // Gestión de exámenes
  gestionNotas: `${API_BASE_URL}/gestion_notas.php`, // Gestión de notas
  index: `${API_BASE_URL}/index.php`, // Página principal
  main: `${API_BASE_URL}/main.php`, // Página principal alternativa
  notasPdf: `${API_BASE_URL}/notas_pdf.php`, // Notas en PDF
  revision: `${API_BASE_URL}/revision.php`, // Revisión de exámenes
  solicitudes: `${API_BASE_URL}/solicitudes.php`, // Gestión de solicitudes
  
};

export default apiRoutes;