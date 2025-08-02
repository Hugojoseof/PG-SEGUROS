import { AppConfig } from '@/types';

export const appConfig: AppConfig = {
  name: 'PG Seguros',
  version: '1.0.0',
  environment: import.meta.env.MODE as 'development' | 'production' | 'test'
};

export const companyConfig = {
  name: 'PG Seguros',
  phone: '+55 (11) 99999-9999',
  email: 'contato@pgseguros.com.br',
  address: 'São Paulo, SP - Brasil',
  cnpj: '00.000.000/0001-00'
};

export const socialConfig = {
  whatsapp: 'https://wa.me/5511999999999',
  instagram: 'https://instagram.com/pg.seguros',
  facebook: 'https://facebook.com/pgseguros',
  linkedin: 'https://linkedin.com/company/pg-seguros'
};

export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 10000,
  retries: 3
}; 