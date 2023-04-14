import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'leaflet/dist/leaflet.css';

import AppRoutes from './AppRoutes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AppRoutes />
  // </React.StrictMode>
);
