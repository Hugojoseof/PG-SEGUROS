import { RouteObject } from 'react-router-dom';

export interface RouteMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface ExtendedRouteObject extends RouteObject {
  meta?: RouteMeta;
  children?: ExtendedRouteObject[];
}

export interface NavigationItem {
  path: string;
  label: string;
  id?: string;
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  path: string;
  active?: boolean;
}

export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  meta: RouteMeta;
  protected?: boolean;
  roles?: string[];
} 