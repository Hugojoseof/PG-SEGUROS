# 🚀 **CONFIGURAÇÃO SUPABASE FUNCTIONS - PG SEGUROS**

## 📋 **Visão Geral**
Este documento explica como configurar e usar as Supabase Functions para substituir as chamadas diretas às APIs do Instagram e Google Sheets, garantindo segurança dos tokens.

## 🛠️ **PRÉ-REQUISITOS**
- Supabase CLI instalado (`brew install supabase/tap/supabase`)
- Projeto Supabase criado
- Token do Instagram
- Google Apps Script configurado (já funcionando)

---

## 🔧 **CONFIGURAÇÃO DAS VARIÁVEIS DE AMBIENTE**

### **1. Instagram Token**
```bash
supabase secrets set INSTAGRAM_TOKEN=seu_token_do_instagram_aqui
```

### **2. Google Apps Script URL**
```bash
supabase secrets set GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyG8T42XE2RKhHJo0XaaSSdgiRRbSY6B1BRNU6a4zEKd35oNy8-GUbyYbv4f8Z73UPrEQ/exec
```

---

## 🚀 **DEPLOY DAS FUNCTIONS**

### **1. Deploy da Function do Instagram**
```bash
supabase functions deploy instagram-posts
```

### **2. Deploy da Function do Google Sheets**
```bash
supabase functions deploy google-sheets
```

---

## 🔍 **TESTES LOCAIS**

### **1. Iniciar Supabase Local**
```bash
supabase start
```

### **2. Testar Function do Instagram**
```bash
curl -i --location --request GET 'http://127.0.0.1:54321/functions/v1/instagram-posts?maxPosts=4' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
```

### **3. Testar Function do Google Sheets**
```bash
curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/google-sheets' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{"nome":"João Silva","email":"joao@email.com","telefone":"11999999999","tipoSeguro":"Auto","mensagem":"Gostaria de uma cotação"}'
```

---

## 🌐 **URLS DAS FUNCTIONS EM PRODUÇÃO**

Após o deploy, suas functions estarão disponíveis em:
- **Instagram**: `https://[PROJECT_REF].supabase.co/functions/v1/instagram-posts`
- **Google Sheets**: `https://[PROJECT_REF].supabase.co/functions/v1/google-sheets`

---

## 📱 **INTEGRAÇÃO NO REACT**

### **1. Atualizar Instagram Service**
```typescript
// src/shared/services/instagramService.ts
class InstagramService extends BaseService {
  private supabaseUrl: string;

  constructor() {
    super();
    this.supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
  }

  async getRecentPosts(): Promise<InstagramPost[]> {
    try {
      const response = await fetch(
        `${this.supabaseUrl}/functions/v1/instagram-posts?maxPosts=4`
      );

      if (response.ok) {
        const data = await response.json();
        return data.posts || [];
      } else {
        console.warn('Erro ao buscar posts via Supabase Function');
        return this.getFallbackPosts();
      }
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      return this.getFallbackPosts();
    }
  }
}
```

### **2. Atualizar Google Sheets Service**
```typescript
// src/shared/services/sheetsService.ts
class SheetsService {
  private supabaseUrl: string;

  constructor() {
    this.supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
  }

  async saveQuote(data: Omit<QuoteData, 'data' | 'origem'>): Promise<boolean> {
    try {
      const response = await fetch(
        `${this.supabaseUrl}/functions/v1/google-sheets`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        return result.success;
      } else {
        console.error('Erro ao salvar cotação via Supabase Function');
        return false;
      }
    } catch (error) {
      console.error('Erro ao salvar cotação:', error);
      return false;
    }
  }
}
```

---

## 🔐 **CONFIGURAÇÃO DAS VARIÁVEIS NO FRONTEND**

Adicione no seu `.env.local`:
```bash
VITE_SUPABASE_URL=https://[PROJECT_REF].supabase.co
```

---

## ✅ **BENEFÍCIOS DA REFATORAÇÃO**

1. **🔒 Segurança**: Tokens não ficam expostos no frontend
2. **🚀 Performance**: Functions executam no edge, mais rápidas
3. **📊 Monitoramento**: Logs centralizados no Supabase
4. **🔄 Escalabilidade**: Fácil de escalar e manter
5. **🛡️ Rate Limiting**: Controle de requisições por IP
6. **💡 Simplicidade**: Mantém seu Google Apps Script funcionando

---

## 🚨 **IMPORTANTE**

- **NUNCA** commite tokens no repositório
- Use sempre `supabase secrets set` para variáveis sensíveis
- Teste localmente antes do deploy em produção
- Monitore os logs das functions no dashboard do Supabase
- Sua URL do Google Apps Script já está funcionando e será usada pela Function
