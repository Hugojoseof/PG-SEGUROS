// Re-export all types
export * from './instagram';
export * from './quote';
export * from './routes';

// Global types
export interface AppConfig {
  name: string;
  version: string;
  environment: 'development' | 'production' | 'test';
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
} 