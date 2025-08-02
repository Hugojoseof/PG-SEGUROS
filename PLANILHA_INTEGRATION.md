# 📊 INTEGRAÇÃO COM PLANILHAS - PG SEGUROS

## 🎯 Opções de Integração

### 1. **Google Sheets (Recomendado)**

#### **Passo a Passo:**

1. **Criar Planilha no Google Sheets**
   - Acesse [sheets.google.com](https://sheets.google.com)
   - Crie uma nova planilha chamada "PG Seguros - Cotações"
   - Adicione as colunas: Nome, Email, Telefone, Tipo Seguro, Mensagem, Data, Origem

2. **Configurar Google Apps Script**
   - Na planilha, vá em `Extensões > Apps Script`
   - Cole o código abaixo:

```javascript
// Google Apps Script para PG Seguros - Cotações (VERSÃO FINAL)
// Cole este código no arquivo Code.gs do seu projeto

function doPost(e) {
  try {
    // Obter a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parsear os dados JSON recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Validar dados obrigatórios
    if (!data.nome || !data.telefone) {
      throw new Error('Dados obrigatórios não fornecidos');
    }
    
    // Adicionar nova linha na planilha
    sheet.appendRow([
      data.nome,
      data.email || 'Não informado',
      data.telefone,
      data.tipoSeguro || 'Não especificado',
      data.mensagem || 'Gostaria de receber uma cotação personalizada.',
      data.data || new Date().toLocaleString('pt-BR'),
      data.origem || 'Landing Page PG Seguros'
    ]);
    
    // Log para debug
    console.log('Dados recebidos:', data);
    
    // Retornar resposta de sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Cotação salva com sucesso!' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log do erro
    console.error('Erro ao processar dados:', error);
    
    // Retornar resposta de erro
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função para testar a conexão
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'OK', 
      message: 'Google Apps Script funcionando!' 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

```

3. **Publicar como Web App**
   - Clique em `Deploy > New deployment`
   - Escolha `Web app`
   - Execute as: `Me`
   - Who has access: `Anyone`
   - Clique em `Deploy`
   - Copie a URL gerada

4. **Configurar no Projeto**
   - Crie um arquivo `.env.local` na raiz do projeto
   - Adicione: `REACT_APP_GOOGLE_SHEETS_URL=sua_url_aqui`

---

### 2. **Airtable (Alternativa)**

#### **Passo a Passo:**

1. **Criar Base no Airtable**
   - Acesse [airtable.com](https://airtable.com)
   - Crie uma nova base chamada "PG Seguros"
   - Crie uma tabela "Cotações" com os campos:
     - Nome (Single line text)
     - Email (Email)
     - Telefone (Phone number)
     - Tipo Seguro (Single select)
     - Data (Date)
     - Origem (Single line text)

2. **Obter API Key**
   - Vá em `Account > API`
   - Copie sua API Key

3. **Obter Base ID**
   - Na URL da sua base: `https://airtable.com/appXXXXXXXXXXXXXX`
   - O Base ID é: `appXXXXXXXXXXXXXX`

4. **Configurar no Projeto**
   - No arquivo `.env.local`:
```
REACT_APP_AIRTABLE_API_KEY=sua_api_key
REACT_APP_AIRTABLE_BASE_ID=seu_base_id
REACT_APP_AIRTABLE_TABLE_NAME=Cotações
```

---

### 3. **EmailJS (Mais Simples)**

#### **Passo a Passo:**

1. **Criar Conta no EmailJS**
   - Acesse [emailjs.com](https://emailjs.com)
   - Crie uma conta gratuita

2. **Configurar Email Service**
   - Vá em `Email Services`
   - Adicione seu provedor de email (Gmail, Outlook, etc.)

3. **Criar Template de Email**
   - Vá em `Email Templates`
   - Crie um template com:
```
Assunto: Nova Cotação - PG Seguros

Nome: {{nome}}
Email: {{email}}
Telefone: {{telefone}}
Tipo de Seguro: {{tipoSeguro}}
Data: {{data}}
Origem: {{origem}}
```

4. **Instalar EmailJS**
```bash
npm install @emailjs/browser
```

5. **Configurar no Projeto**
   - No arquivo `.env.local`:
```
REACT_APP_EMAILJS_SERVICE_ID=seu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=sua_public_key
```

---

## 🚀 Configuração do Projeto

### **Arquivo .env.local**
```env
# Google Sheets
REACT_APP_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/...

# Airtable
REACT_APP_AIRTABLE_API_KEY=key...
REACT_APP_AIRTABLE_BASE_ID=app...
REACT_APP_AIRTABLE_TABLE_NAME=Cotações

# EmailJS
REACT_APP_EMAILJS_SERVICE_ID=service_...
REACT_APP_EMAILJS_TEMPLATE_ID=template_...
REACT_APP_EMAILJS_PUBLIC_KEY=public_key...
```

### **Testar Integração**
1. Execute o projeto: `npm run dev`
2. Preencha o formulário de cotação
3. Verifique se os dados aparecem na planilha/email
4. Verifique o console do navegador para logs

---

## 📋 Estrutura dos Dados

### **Campos Salvos:**
- **Nome**: Nome completo do cliente
- **Email**: Email para contato
- **Telefone**: Telefone para contato
- **Tipo Seguro**: Serviço selecionado
- **Data**: Data e hora da cotação
- **Origem**: "Landing Page PG Seguros"

### **Exemplo de Dados:**
```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "(11) 99999-9999",
  "tipoSeguro": "Seguro Auto",
  "data": "29/07/2024 16:30:45",
  "origem": "Landing Page PG Seguros"
}
```

---

## 🔧 Troubleshooting

### **Problemas Comuns:**

1. **Erro CORS**
   - Verifique se o Google Apps Script está configurado corretamente
   - Teste a URL no Postman primeiro

2. **Dados não salvos**
   - Verifique as variáveis de ambiente
   - Confirme se as APIs estão ativas

3. **Erro de autenticação**
   - Verifique as chaves de API
   - Confirme as permissões

### **Logs de Debug:**
- Abra o console do navegador (F12)
- Verifique os logs de sucesso/erro
- Teste cada método individualmente

---

## 📞 Suporte

Para dúvidas sobre a integração:
1. Verifique a documentação oficial de cada serviço
2. Teste com dados de exemplo
3. Verifique os logs no console
4. Confirme as configurações de ambiente 