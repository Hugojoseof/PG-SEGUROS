# 🚀 **SUPABASE PROJECT - PG SEGUROS**

## 📋 **Visão Geral**
Este diretório contém a configuração do Supabase para o projeto PG Seguros, incluindo Edge Functions para Instagram e Google Sheets.

## 🏗️ **Estrutura do Projeto**

```
supabase/
├── functions/
│   ├── instagram-posts/     # Function para buscar posts do Instagram
│   └── google-sheets/       # Function para salvar cotações no Google Sheets
├── config.toml              # Configuração do projeto
└── README.md                # Este arquivo
```

## 🔧 **Configuração Inicial**

### **1. Instalar Supabase CLI**
```bash
brew install supabase/tap/supabase
```

### **2. Inicializar Projeto**
```bash
supabase init
```

### **3. Configurar Variáveis de Ambiente**
```bash
# Instagram Token
supabase secrets set INSTAGRAM_TOKEN=seu_token_do_instagram_aqui

# Google Apps Script URL
supabase secrets set GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyG8T42XE2RKhHJo0XaaSSdgiRRbSY6B1BRNU6a4zEKd35oNy8-GUbyYbv4f8Z73UPrEQ/exec
```

## 🚀 **Desenvolvimento Local**

### **1. Iniciar Supabase Local**
```bash
supabase start
```

### **2. Testar Functions**
```bash
# Instagram
curl -i --location --request GET 'http://127.0.0.1:54321/functions/v1/instagram-posts?maxPosts=4' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

# Google Sheets
curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/google-sheets' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{"nome":"João Silva","email":"joao@email.com","telefone":"11999999999","tipoSeguro":"Auto","mensagem":"Gostaria de uma cotação"}'
```

## 🌐 **Deploy em Produção**

### **1. Deploy das Functions**
```bash
supabase functions deploy instagram-posts
supabase functions deploy google-sheets
```

### **2. URLs de Produção**
- **Instagram**: `https://[PROJECT_REF].supabase.co/functions/v1/instagram-posts`
- **Google Sheets**: `https://[PROJECT_REF].supabase.co/functions/v1/google-sheets`

## 📊 **Monitoramento**

### **1. Logs Locais**
```bash
supabase logs
```

### **2. Logs de Produção**
Acesse o dashboard do Supabase para ver logs em tempo real.

## 🔐 **Segurança**

- **NUNCA** commite tokens no repositório
- Use sempre `supabase secrets set` para variáveis sensíveis
- As functions validam dados de entrada
- CORS configurado para permitir apenas origens autorizadas

## 🚨 **Troubleshooting**

### **Function não responde**
1. Verifique se o Supabase está rodando: `supabase status`
2. Verifique os logs: `supabase logs`
3. Teste com curl para isolar o problema

### **Erro de CORS**
1. Verifique se a origem está na lista de CORS permitidos
2. Verifique se o header `Authorization` está sendo enviado

### **Erro de variável de ambiente**
1. Verifique se as variáveis estão configuradas: `supabase secrets list`
2. Reconfigure se necessário: `supabase secrets set NOME_VARIAVEL=valor`

## 📚 **Documentação Adicional**

- [SUPABASE_SETUP.md](../SUPABASE_SETUP.md) - Guia completo de configuração
- [ENV_VARIABLES.md](../ENV_VARIABLES.md) - Variáveis de ambiente necessárias
