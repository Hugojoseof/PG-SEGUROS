import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy loading das páginas
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));
const TermsPage = lazy(() => import('@/shared/pages/TermsPage'));
const PrivacyPage = lazy(() => import('@/shared/pages/PrivacyPage'));

export const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(HomePage),
    meta: {
      title: "PG Seguros - Proteção Inteligente para sua Vida",
      description: "Corretora de seguros com mais de 25 anos de experiência. Oferecemos as melhores opções das principais seguradoras do mercado."
    }
  },
  {
    path: "/terms",
    element: React.createElement(TermsPage),
    meta: {
      title: "Termos de Serviço - PG Seguros",
      description: "Termos de serviço e condições de uso da PG Seguros. Conheça nossas políticas e compromissos."
    }
  },
  {
    path: "/privacy",
    element: React.createElement(PrivacyPage),
    meta: {
      title: "Política de Privacidade - PG Seguros",
      description: "Política de privacidade da PG Seguros. Saiba como protegemos seus dados pessoais."
    }
  }
]; 