// src/components/DynamicHeader.jsx
import * as React from "react";
import { useLocation } from "react-router-dom";
import { Header, Link } from "@cloudscape-design/components";

const DynamicHeader = () => {
  const location = useLocation();

  // Mapeo de rutas a títulos dinámicos
  const routeToTitleMap = {
    "/home": "Inicio",
    "/RRHH": "Gestión de Recursos Humanos",
    "/contact": "Contacto",
    "/dashboard": "Panel de control",
    "/settings": "Configuración",
    "/": "", // Ruta raíz
    // Agrega más rutas y títulos según sea necesario
  };

  const currentTitle = React.useMemo(() => {
    const path = location.pathname;
    
    // Buscar la ruta más específica que coincida con la actual
    const matchedRoute = Object.keys(routeToTitleMap).find((route) => 
      path.startsWith(route) // Verifica si la ruta comienza con la clave del mapa
    );
  
    return routeToTitleMap[matchedRoute] || "Página no encontrada";
  }, [location.pathname]);
  

  return (
    <Header variant="h1" info={<Link variant="info">Info</Link>}>
      {currentTitle}
    </Header>
  );
};

export default DynamicHeader;