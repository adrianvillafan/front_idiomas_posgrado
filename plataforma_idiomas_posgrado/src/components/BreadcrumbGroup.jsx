//src/components/BreadcrumbGroup.jsx

import * as React from "react";
import { useLocation } from "react-router-dom";
import { BreadcrumbGroup as Bread } from "@cloudscape-design/components";

const BreadcrumbGroup = () => {
  const location = useLocation();

  // Generar los items de los breadcrumbs de acuerdo a la ruta actual
  const items = React.useMemo(() => {
    const path = location.pathname.split('/').filter(Boolean); // Divide la ruta en partes
    let breadcrumbs = [];

    // Añadir el primer breadcrumb (Home)
    //breadcrumbs.push({ text: 'Home', href: '/home' });

    // Generar breadcrumbs dinámicamente según la ruta
    let accumulatedPath = '/';
    path.forEach((segment) => {
      accumulatedPath += `/${segment}`;
      breadcrumbs.push({
        text: segment.charAt(0).toUpperCase() + segment.slice(1),  // Capitalizar la primera letra
        href: accumulatedPath,
      });
    });

    return breadcrumbs;
  }, [location.pathname]);

  return (
    <Bread
      items={items}
      ariaLabel="Breadcrumbs"
    />
  );
}

export default BreadcrumbGroup;
