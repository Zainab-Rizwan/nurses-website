import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    palette1: {
      light: '#E3E8E9',
      main: '#818E9A',
      dark: '#1D2842',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    palette2: {
      main: '#81A3BF',
      light: '#CCD4DF',
      dark: '#1A667A'
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
