import React from 'react';
import { RouteObject } from 'react-router-dom';
import NotFoundPage from '@/shared/pages/NotFound';

export const errorRoutes: RouteObject[] = [
  {
    path: "*",
    element: React.createElement(NotFoundPage),
    meta: {
      title: "Página não encontrada - PG Seguros",
      description: "A página que você está procurando não foi encontrada."
    }
  }
]; 