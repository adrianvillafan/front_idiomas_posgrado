// src/theme/ToggleThemeButton.jsx

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ToggleThemeButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ToggleThemeButton;