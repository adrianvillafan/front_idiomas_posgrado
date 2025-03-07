// src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/app/Home';
import NotFound from '../pages/NotFound';
import RRHHTable from '../pages/app/views/RRHH/RRHHTable';
// import GestionDocentes from '../pages/app/coordinador/NuevoDocente';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/RRHH/Usuarios" element={<RRHHTable/>} />
      {/* <Route path="/docentes" element={<GestionDocentes />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;