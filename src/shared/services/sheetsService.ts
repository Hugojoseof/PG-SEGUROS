// Serviço para integração com Google Sheets via Supabase Functions
// Para usar este serviço, você precisa:
// 1. Configurar a Supabase Function google-sheets
// 2. Configurar as variáveis de ambiente no Supabase
// 3. Fazer deploy da function

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
  private supabaseUrl: string;

  constructor() {
    // URL da Supabase Function (será configurada via variável de ambiente)
    this.supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
  }

  async saveQuote(data: Omit<QuoteData, 'data' | 'origem'>): Promise<boolean> {
    try {
      // Se não tiver URL do Supabase configurada, mostrar erro
      if (!this.supabaseUrl) {
        console.error('❌ VITE_SUPABASE_URL não configurado!');
        console.error('📝 Crie um arquivo .env.local na raiz do projeto e adicione:');
        console.error('VITE_SUPABASE_URL=https://[PROJECT_REF].supabase.co');
        console.error('🔗 Veja o arquivo SUPABASE_SETUP.md para instruções completas');
        return false;
      }

      console.log('📝 Salvando cotação via Supabase Function...');

      // Chamar a Supabase Function em vez da API direta
      const response = await fetch(`${this.supabaseUrl}/functions/v1/google-sheets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        
        if (result.success) {
          console.log('✅ Cotação salva com sucesso via Supabase Function!');
          console.log('📊 Dados salvos:', {
            nome: data.nome,
            email: data.email,
            telefone: data.telefone,
            tipoSeguro: data.tipoSeguro
          });
          return true;
        } else {
          console.error('❌ Erro retornado pela Supabase Function:', result.error);
          return false;
        }
      } else {
        console.error(`❌ Erro na Supabase Function: ${response.status} ${response.statusText}`);
        return false;
      }
      
    } catch (error) {
      console.error('❌ Erro ao salvar cotação via Supabase Function:', error);
      return false;
    }
  }

  // Método para verificar se a Supabase Function está funcionando
  async checkApiStatus(): Promise<boolean> {
    if (!this.supabaseUrl) {
      return false;
    }

    try {
      // Fazer uma requisição de teste (POST vazio para verificar se a function responde)
      const response = await fetch(`${this.supabaseUrl}/functions/v1/google-sheets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      
      // Se retornar 400 (dados inválidos), significa que a function está funcionando
      // Se retornar 500 ou erro de rede, significa que há problema
      return response.status === 400; // 400 = dados inválidos (function funcionando)
    } catch (error) {
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
