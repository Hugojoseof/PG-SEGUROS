# PG Seguros - Landing Page

Landing page moderna e responsiva para a corretora de seguros PG Seguros, desenvolvida com React, TypeScript e TailwindCSS. Projeto com arquitetura escalável, padrões profissionais e **backend seguro via Supabase Functions**.

## 🚀 Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS
- **Shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **React Router DOM** - Roteamento
- **React Query** - Cache e sincronização de dados
- **React Hook Form** - Gerenciamento de formulários
- **Supabase Functions** - Backend serverless seguro

## 📋 Funcionalidades

- **Design Responsivo** - Otimizado para desktop e mobile
- **Animações Modernas** - Transições suaves e efeitos visuais
- **Modal de Cotação** - Formulário integrado com Google Sheets via Supabase Functions
- **Navegação Suave** - Scroll automático entre seções
- **UX/UI Otimizada** - Interface intuitiva e moderna
- **Integração Instagram** - Posts reais via Supabase Functions seguras
- **Sistema de Notificações** - Feedback visual para ações do usuário
- **Error Boundaries** - Captura e tratamento de erros
- **Lazy Loading** - Carregamento otimizado de componentes
- **Backend Seguro** - Supabase Functions para APIs protegidas

## 🏗️ Estrutura do Projeto

```
src/
├── config/                 # Configurações da aplicação
│   ├── app.ts             # Configurações gerais
│   ├── routes/            # Configuração de rotas
│   │   ├── index.ts       # Rotas principais
│   │   ├── homeRoutes.ts  # Rotas da feature home
│   │   └── errorRoutes.ts # Rotas de erro
│   ├── App.tsx            # Componente raiz
│   └── main.tsx           # Entry point
├── features/              # Features da aplicação (Domain-Driven)
│   ├── home/              # Feature Home
│   │   ├── components/    # Componentes específicos
│   │   ├── sections/      # Seções da página
│   │   ├── pages/         # Páginas
│   │   └── index.ts       # Exports da feature
│   ├── quotes/            # Feature Quotes
│   └── contact/           # Feature Contact
├── shared/                # Código compartilhado
│   ├── components/        # Componentes UI reutilizáveis
│   │   ├── ui/           # Componentes base (Shadcn/ui)
│   │   ├── icons/        # Ícones customizados
│   │   ├── Router.tsx    # Componente de roteamento
│   │   └── ErrorBoundary.tsx # Captura de erros
│   ├── hooks/            # Hooks customizados
│   ├── services/         # Serviços e APIs
│   │   ├── base/         # Serviços base
│   │   ├── instagramService.ts # Serviço Instagram (via Supabase)
│   │   └── sheetsService.ts    # Serviço Google Sheets (via Supabase)
│   ├── context/          # Contextos React
│   ├── utils/            # Utilitários
│   ├── constants/        # Constantes da aplicação
│   ├── assets/           # Assets (CSS, imagens)
│   └── types/            # Tipos TypeScript
├── supabase/             # Configuração Supabase
│   ├── functions/        # Edge Functions
│   │   ├── instagram-posts/  # API Instagram segura
│   │   └── google-sheets/    # API Google Sheets segura
│   ├── config.toml      # Configuração do projeto
│   └── .gitignore       # Arquivos ignorados
└── types/                # Tipos globais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Supabase CLI (`brew install supabase/tap/supabase`)

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre no diretório
cd PG_Seguros

# Instale as dependências
npm install

# Configure o Supabase (primeira vez)
supabase init
supabase link --project-ref [SEU_PROJECT_REF]

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run build:dev    # Build para desenvolvimento
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

### Build para Produção
```bash
npm run build
```

## 🔧 Configuração

### Variáveis de Ambiente Frontend
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://[PROJECT_REF].supabase.co

# Airtable Integration (opcional)
VITE_AIRTABLE_API_KEY=sua_chave_do_airtable
VITE_AIRTABLE_BASE_ID=seu_base_id
VITE_AIRTABLE_TABLE_NAME=nome_da_tabela
```

### Variáveis de Ambiente Backend (Supabase)
Configure via CLI ou Dashboard do Supabase:

```bash
# Instagram Token
supabase secrets set INSTAGRAM_TOKEN=seu_token_do_instagram

# Google Apps Script URL
supabase secrets set GOOGLE_SCRIPT_URL=
```

### Configuração Supabase
```bash
# Deploy das Functions
supabase functions deploy instagram-posts --no-verify-jwt
supabase functions deploy google-sheets --no-verify-jwt

# Verificar status
supabase functions list
```

## 🔐 Arquitetura de Segurança

### **Supabase Functions**
- **Instagram API**: Posts buscados via Edge Function segura
- **Google Sheets**: Cotações salvas via Edge Function segura
- **Tokens Protegidos**: Credenciais armazenadas no backend
- **CORS Configurado**: Acesso controlado por origem

### **Benefícios de Segurança**
- ✅ Tokens não expostos no frontend
- ✅ Functions executam no edge (mais rápidas)
- ✅ Logs centralizados no Supabase
- ✅ Fácil escalabilidade e manutenção
- ✅ Suporte a múltiplos clientes

## 📱 Responsividade

- **Desktop**: Layout completo com mega menu
- **Tablet**: Layout adaptado
- **Mobile**: Layout otimizado para touch

## 🎨 Design System

- **Cores**: Paleta personalizada com gradientes
- **Tipografia**: Sistema de fontes responsivo
- **Componentes**: Biblioteca Shadcn/ui customizada
- **Animações**: Transições suaves e micro-interações
- **Ícones**: Lucide React + ícones customizados
- **Loading States**: Skeletons e spinners otimizados

## 📄 Seções da Landing Page

1. **Header** - Navegação e CTA principal
2. **Hero** - Apresentação e formulário de cotação
3. **Serviços** - Catálogo de produtos (Pessoal/Empresarial)
4. **Quem Somos** - Sobre a empresa
5. **Depoimentos** - Testemunhos de clientes
6. **Instagram** - Posts reais via Supabase Functions
7. **Contato** - Informações de contato

## 🏗️ Arquitetura

### **Padrões Implementados**
- **Domain-Driven Design (DDD)** - Features organizadas por domínio
- **Service Layer Pattern** - Abstração de serviços com BaseService
- **Repository Pattern** - Interface consistente para dados
- **Custom Hooks Pattern** - Lógica reutilizável
- **Context Pattern** - Estado global da aplicação
- **Edge Functions Pattern** - Backend serverless seguro

### **Princípios**
- **Separation of Concerns** - Separação clara de responsabilidades
- **Dependency Injection** - Serviços configuráveis
- **Type Safety** - TypeScript rigoroso em todo o projeto
- **Error Handling** - Error boundaries e fallbacks
- **Security First** - Tokens e credenciais protegidos

### **Performance**
- **Lazy Loading** - Componentes carregados sob demanda
- **Code Splitting** - Bundle otimizado por rota
- **React Query** - Cache inteligente de dados
- **Optimized Images** - Imagens otimizadas e responsivas
- **Tree Shaking** - Eliminação de código não utilizado
- **Edge Functions** - Execução próxima ao usuário

### **Segurança**
- **Supabase Functions** - Backend seguro e escalável
- **Environment Variables** - Dados sensíveis protegidos
- **Input Validation** - Validação e sanitização de inputs
- **Error Boundaries** - Captura segura de erros
- **HTTPS Only** - Comunicação segura em produção
- **Content Security Policy** - Proteção contra XSS

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### **Padrões de Código**
- Use TypeScript para todo novo código
- Siga os padrões de nomenclatura estabelecidos
- Adicione tipos para todas as props e funções
- Mantenha a estrutura de features organizada
- Execute `npm run lint` antes de commitar

## 🧪 Testes

### **Executar Testes**
```bash
npm run lint         # Verificação de código
npm run build        # Build para verificar erros
```

### **Testar Supabase Functions**
```bash
# Instagram Function
curl -i --location --request GET 'https://[PROJECT_REF].supabase.co/functions/v1/instagram-posts?maxPosts=4'

# Google Sheets Function
curl -i --location --request POST 'https://[PROJECT_REF].supabase.co/functions/v1/google-sheets' \
  --header 'Content-Type: application/json' \
  --data '{"nome":"Teste","email":"teste@email.com","telefone":"11999999999","tipoSeguro":"Auto"}'
```

### **Qualidade de Código**
- ESLint configurado com regras rigorosas
- TypeScript com configuração estrita
- Prettier para formatação consistente

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

PG Seguros - [contato@pgseguros.com.br](mailto:contato@pgseguros.com.br)

## 📚 Documentação Adicional

- **Supabase Functions**: Configuração e deploy das Edge Functions
- **Instagram Integration**: Via Supabase Functions seguras
- **Google Sheets Integration**: Via Supabase Functions seguras
- **MVP Specification**: `mvp_pg_seguros_landing.md`

## 🚀 Deploy

### **Build de Produção**
```bash
npm run build
```

### **Preview do Build**
```bash
npm run preview
```

### **Ambiente de Desenvolvimento**
```bash
npm run dev
```

### **Deploy das Functions**
```bash
# Deploy das Functions
supabase functions deploy instagram-posts --no-verify-jwt
supabase functions deploy google-sheets --no-verify-jwt

# Verificar status
supabase functions list
```

## 🔄 Gerenciamento de Clientes

### **Trocar Configurações**
```bash
# Para novo cliente
supabase secrets set INSTAGRAM_TOKEN=novo_token
supabase secrets set GOOGLE_SCRIPT_URL=nova_url

# Verificar configurações
supabase secrets list
```

### **Múltiplos Clientes**
- Cada cliente pode ter suas próprias credenciais
- Troca instantânea sem necessidade de deploy
- Configurações protegidas no Supabase
- Suporte a diferentes contas Instagram e planilhas

---

**Desenvolvido com ❤️ para PG Seguros**

*Arquitetura profissional, escalável e segura para landing pages modernas com backend serverless.*
