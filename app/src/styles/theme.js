const theme = (settings) => ({
  colors: {
    white: '#ffffff',
    grey: '#7A7C7D',
    error: '#e85555',
    text: settings.textColor,
    primary: settings.primaryColor,
    secondary: settings.secondaryColor,
  },
  fonts: {
    primary: 'Arial',
    secondary: 'Helvetica Neue',
  },
  globals: {
    spacing: 24,
  },
});

export default theme;
