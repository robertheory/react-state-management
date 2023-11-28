import { Routes } from '@generouted/react-router';
import { createRoot } from 'react-dom/client';
import AppProvider from './context';
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <Routes />
  </AppProvider>
);
