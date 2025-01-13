// src/theme/theme.js

import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8B0000', // Rojo oscuro
    },
    secondary: {
      main: '#CDA85E', // Dorado suave
    },
    background: {
      default: '#FFFFFF', // Fondo blanco
      paper: '#FDF7E3',   // Fondo ligeramente beige
    },
    text: {
      primary: '#333333', // Texto oscuro
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D32F2F', // Rojo más vibrante para destacar
    },
    secondary: {
      main: '#FBC02D', // Amarillo dorado en modo oscuro
    },
    background: {
      default: '#121212', // Negro oscuro
      paper: '#1E1E1E',   // Fondo gris oscuro
    },
    text: {
      primary: '#FFFFFF', // Texto blanco
      secondary: '#BDBDBD',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});