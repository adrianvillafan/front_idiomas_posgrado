import React from "react";
import { Flashbar as Flash } from "@cloudscape-design/components";
import { useFlashbar } from '../pages/app/hooks/useFlashbar';

const Flashbar = () => {
  const { flashbarItems } = useFlashbar();
  return <Flash items={flashbarItems} stackItems />;
}

export default Flashbar;