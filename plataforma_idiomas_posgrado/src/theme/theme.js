const lightTheme = {
    tokens: {
      // Colores globales
      colorBackgroundLayoutMain: { light: '#ffffff', dark: '#202020' }, // Fondo principal
      colorTextAccent: '#0073bb', // Texto de énfasis
  
      // Otros tokens globales (puedes añadir más si es necesario)
      colorBackgroundButtonPrimaryDefault: {
        light: '#0073bb',
        dark: '#00509e',
      },
    },
    contexts: {
      'top-navigation': {
        tokens: {
          colorTextAccent: '#44b9d6', // Ejemplo para navegación superior
        },
      },
      // Añadir otros contextos si es necesario
    },
  };
  
  const darkTheme = {
    tokens: {
      colorBackgroundLayoutMain: { light: '#202020', dark: '#000000' },
      colorTextAccent: '#44b9d6',
  
      // Colores oscuros para otros elementos
      colorBackgroundButtonPrimaryDefault: {
        light: '#00509e',
        dark: '#003f7f',
      },
    },
    contexts: {
      'top-navigation': {
        tokens: {
          colorTextAccent: '#0073bb',
        },
      },
    },
  };
  
  export { lightTheme, darkTheme };
  