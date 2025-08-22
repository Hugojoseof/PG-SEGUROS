import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '@/config/routes/index';
import { ErrorBoundary } from './ErrorBoundary';

const Router: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </ErrorBoundary>
  );
};

export default Router; 