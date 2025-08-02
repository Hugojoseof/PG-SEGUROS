import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '@/config/routes/index';
import { LoadingSpinner } from './ui/loading-spinner';
import { ErrorBoundary } from './ErrorBoundary';

const Router: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Router; 