import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './layout/reportWebVitals';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './settings/theme';
import { router } from './settings/routes';

import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>


);

reportWebVitals();
