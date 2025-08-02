import { RouteObject } from 'react-router-dom';
import { homeRoutes } from './homeRoutes';
import { errorRoutes } from './errorRoutes';

export const routes: RouteObject[] = [
  ...homeRoutes,
  ...errorRoutes
];

// Configuração de navegação
export const navigationConfig = {
  main: [
    { path: "/", label: "Início", id: "inicio" },
    { path: "/#servicos", label: "Serviços", id: "servicos" },
    { path: "/#quem-somos", label: "Quem Somos", id: "quem-somos" },
    { path: "/#depoimentos", label: "Depoimentos", id: "depoimentos" },
    { path: "/#contato", label: "Contato", id: "contato" }
  ],
  footer: [
    { path: "/", label: "Início" },
    { path: "/#servicos", label: "Serviços" },
    { path: "/#quem-somos", label: "Quem Somos" },
    { path: "/#depoimentos", label: "Depoimentos" },
    { path: "/#contato", label: "Contato" }
  ]
};

// Configuração de breadcrumbs
export const breadcrumbConfig = {
  home: [
    { label: "Início", path: "/" }
  ],
  notFound: [
    { label: "Início", path: "/" },
    { label: "Página não encontrada", path: "*" }
  ]
}; 