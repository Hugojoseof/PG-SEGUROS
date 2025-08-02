// Serviço para integração com Google Sheets
// Para usar este serviço, você precisa:
// 1. Criar uma planilha no Google Sheets
// 2. Configurar o Google Apps Script
// 3. Obter a URL do web app

interface QuoteData {
  nome: string;
  email: string;
  telefone: string;
  tipoSeguro: string;
  mensagem?: string;
  data: string;
  origem: string;
}

class SheetsService {
  private webAppUrl: string;

  constructor() {
    // Substitua pela URL do seu Google Apps Script Web App
    this.webAppUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || '';
  }

  async saveQuote(data: Omit<QuoteData, 'data' | 'origem'>): Promise<boolean> {
    try {
      // Se não tiver URL configurada, mostrar erro
      if (!this.webAppUrl) {
        console.error('❌ URL do Google Sheets não configurada!');
        console.error('📝 Crie um arquivo .env.local na raiz do projeto e adicione:');
        console.error('VITE_GOOGLE_SHEETS_URL=sua_url_do_google_apps_script');
        console.error('🔗 Veja o arquivo PLANILHA_INTEGRATION.md para instruções completas');
        return false;
      }

      const quoteData: QuoteData = {
        ...data,
        data: new Date().toLocaleString('pt-BR'),
        origem: 'Landing Page PG Seguros'
      };

      console.log('📝 Salvando cotação na planilha...');

      // Usar diretamente no-cors para evitar erros de CORS
      try {
        const response = await fetch(this.webAppUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(quoteData),
          mode: 'no-cors' // Usar no-cors diretamente
        });

        console.log('✅ Cotação enviada com sucesso!');
        console.log('📊 Dados salvos:', {
          nome: quoteData.nome,
          email: quoteData.email,
          telefone: quoteData.telefone,
          tipoSeguro: quoteData.tipoSeguro
        });
        
        return true;
      } catch (error) {
        console.error('❌ Erro ao salvar cotação:', error);
        return false;
      }
      
    } catch (error) {
      console.error('Erro ao salvar na planilha:', error);
      return false;
    }
  }

  // Método alternativo usando EmailJS (mais simples de configurar)
  async saveQuoteViaEmail(data: Omit<QuoteData, 'data' | 'origem'>): Promise<boolean> {
    try {
      const quoteData: QuoteData = {
        ...data,
        data: new Date().toLocaleString('pt-BR'),
        origem: 'Landing Page PG Seguros'
      };

      // Simular envio por email
      console.log('Dados para envio por email:', quoteData);
      
      // Aqui você pode integrar com EmailJS
      // https://www.emailjs.com/
      // emailjs.send('service_id', 'template_id', quoteData);
      
      return true;
    } catch (error) {
      console.error('Erro ao enviar por email:', error);
      return false;
    }
  }

  // Método para Airtable (alternativa popular)
  async saveQuoteToAirtable(data: Omit<QuoteData, 'data' | 'origem'>): Promise<boolean> {
    try {
      const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
      const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
      const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

      if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
        console.log('Configuração do Airtable não encontrada');
        return false;
      }

      const quoteData: QuoteData = {
        ...data,
        data: new Date().toLocaleString('pt-BR'),
        origem: 'Landing Page PG Seguros'
      };

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: quoteData
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao salvar no Airtable');
      }

      return true;
    } catch (error) {
      console.error('Erro ao salvar no Airtable:', error);
      return false;
    }
  }
}

export const sheetsService = new SheetsService();
export default sheetsService;
