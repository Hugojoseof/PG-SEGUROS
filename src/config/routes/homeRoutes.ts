import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy loading das páginas da feature home
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));

export const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(HomePage),
    meta: {
      title: "PG Seguros - Proteção Inteligente para sua Vida",
      description: "Corretora de seguros com mais de 25 anos de experiência. Oferecemos as melhores opções das principais seguradoras do mercado."
    }
  }
]; 