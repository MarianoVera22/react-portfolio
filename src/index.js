import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { initAnalytics } from './utils/analytics';

// Inicializar Google Analytics (no hace nada si REACT_APP_GA_ID no está configurado)
initAnalytics();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

