//src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { applyTheme } from '@cloudscape-design/components/theming'; // Importa la función de theming
import { lightTheme, darkTheme } from './theme/theme'; // Asegúrate de crear el archivo themes.js
import AppLayout from './components/AppLayout'; // Importa AppLayout
import Login from './pages/app/Login'; // Importa la página de Login
import NotFound from './pages/NotFound'; // Importa la página de NotFound

const App = () => {
  const basename = ''; // Cambia esto según tu subdirectorio
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Aplica el tema correspondiente en función de isDarkMode
  useEffect(() => {
    if (isDarkMode) {
      applyTheme({ theme: darkTheme });
    } else {
      applyTheme({ theme: lightTheme });
    }
  }, [isDarkMode]);

  // Función para alternar entre temas
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route
          path="*"
          element={
            <AppLayout toggleTheme={toggleTheme}>
              <AppRoutes />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;