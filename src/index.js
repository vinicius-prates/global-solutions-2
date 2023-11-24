import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Prevencoes } from './Pages/Prevencoes/Prevencoes';
import { Doencas } from './Pages/Doencas/Doencas';
import { MelhoriasGerais } from './Pages/MelhoriasGerais/MelhoriasGerais';

import { ReductMI } from './Pages/ReductMI/ReductMI';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/mi-reduction',
    element: <ReductMI/>
  },
  {
    path: '/doencas',
    element: <Doencas/>
  },
  {
    path: '/prevencoes',
    element: <Prevencoes/>
  },
  {
    path: '/melhorias-gerais',
    element: <MelhoriasGerais/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
