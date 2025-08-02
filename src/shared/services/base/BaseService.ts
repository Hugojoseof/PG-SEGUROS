import { ApiResponse } from '@/types';

export abstract class BaseService {
  protected baseUrl: string;
  protected timeout: number;

  constructor(baseUrl?: string, timeout: number = 10000) {
    this.baseUrl = baseUrl || '';
    this.timeout = timeout;
  }

  protected async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Service request failed:', error);
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  protected handleError(error: unknown): ApiResponse {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (import.meta.env.DEV) {
      console.error('Service error:', error);
    }
    return { success: false, error: message };
  }
} 