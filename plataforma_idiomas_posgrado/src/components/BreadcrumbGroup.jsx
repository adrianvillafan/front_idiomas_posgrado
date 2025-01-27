import * as React from "react";
import {BreadcrumbGroup as Bread } from "@cloudscape-design/components";

const BreadcrumbGroup = () => {
  return (
    <Bread
    items={[
        { text: 'Home', href: '#' },
        { text: 'Service', href: '#' },
      ]}
      ariaLabel="Breadcrumbs"
    />
  );
}

export default BreadcrumbGroup;