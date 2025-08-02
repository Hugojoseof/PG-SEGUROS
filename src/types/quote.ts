export interface QuoteFormData {
  nome: string;
  email: string;
  telefone: string;
  tipoSeguro: string;
  mensagem?: string;
  dataEnvio: string;
}

export interface QuoteResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export interface QuoteServiceConfig {
  googleSheetsUrl?: string;
  airtableApiKey?: string;
  airtableBaseId?: string;
  airtableTableName?: string;
} 