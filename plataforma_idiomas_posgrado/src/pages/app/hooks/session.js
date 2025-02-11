//src/pages/include/auth.jsx

// Función para obtener datos del usuario desde sessionStorage
export const getUserData = () => {
    const userData = sessionStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  };
  
  // Función para obtener el token de sesión desde sessionStorage
export const getToken = () => {
    return sessionStorage.getItem('token_session');
  };
  