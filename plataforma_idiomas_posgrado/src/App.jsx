//src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyTheme } from '@cloudscape-design/components/theming'; // Importa la función de theming
import { lightTheme, darkTheme } from './theme/theme'; // Asegúrate de crear el archivo themes.js
import AppLayout from './components/AppLayout'; // Importa AppLayout
import Login from './pages/app/Login'; // Importa la página de Login
import NotFound from './pages/NotFound'; // Importa la página de NotFound
import { getUserData } from './pages/app/hooks/session';

const App = () => {
  const basename = ''; // Cambia esto según tu subdirectorio
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userData, setUserData] = useState(null);

  // Aplica el tema correspondiente en función de isDarkMode
  useEffect(() => {
    if (isDarkMode) {
      applyTheme({ theme: darkTheme });
      const data = getUserData();
      setUserData(data);
    } else {
      applyTheme({ theme: lightTheme });
      const data = getUserData();
      setUserData(data);
    }
  }, [isDarkMode]);
  console.log(userData);

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
            <AppLayout userData={userData} toggleTheme={toggleTheme} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;