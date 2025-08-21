# 🔐 **VARIÁVEIS DE AMBIENTE - PG SEGUROS**

## 📋 **Configuração do Frontend (.env.local)**

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
# Supabase Configuration
# Substitua [PROJECT_REF] pela referência do seu projeto Supabase
VITE_SUPABASE_URL=https://[PROJECT_REF].supabase.co

# Instagram API (NÃO USAR MAIS - Agora via Supabase Function)
# VITE_INSTAGRAM_ACCESS_TOKEN=seu_token_do_instagram_aqui

# Google Sheets (NÃO USAR MAIS - Agora via Supabase Function)
# VITE_GOOGLE_SHEETS_URL=sua_url_do_google_apps_script

# Airtable (Alternativa para Google Sheets)
VITE_AIRTABLE_API_KEY=sua_chave_api_do_airtable
VITE_AIRTABLE_BASE_ID=seu_base_id_do_airtable
VITE_AIRTABLE_TABLE_NAME=seu_nome_da_tabela
```

## 🔧 **Configuração do Backend (Supabase)**

### **Instagram Token**
```bash
supabase secrets set INSTAGRAM_TOKEN=seu_token_do_instagram_aqui
```

### **Google Apps Script URL**
```bash
supabase secrets set GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyG8T42XE2RKhHJo0XaaSSdgiRRbSY6B1BRNU6a4zEKd35oNy8-GUbyYbv4f8Z73UPrEQ/exec
```

## 🚨 **IMPORTANTE**

- **NUNCA** commite o arquivo `.env.local` no repositório
- O arquivo `.env.local` já está no `.gitignore`
- Use sempre `supabase secrets set` para variáveis sensíveis no backend
- As variáveis do Instagram e Google Sheets agora são gerenciadas pelo Supabase
- Sua URL do Google Apps Script já está funcionando e será usada pela Function
