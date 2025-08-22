import React from 'react';
import { RouteObject } from 'react-router-dom';
import HomePage from '@/features/home/pages/HomePage';
import TermsPage from '@/shared/pages/TermsPage';
import PrivacyPage from '@/shared/pages/PrivacyPage';
import ServicePage from '@/features/services/pages/ServicePage';

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
    path: "/servicos/:slug",
    element: React.createElement(ServicePage),
    meta: {
      title: "Serviço - PG Seguros",
      description: "Conheça detalhes do serviço e faça sua cotação."
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