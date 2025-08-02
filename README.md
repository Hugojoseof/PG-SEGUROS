# PG Seguros - Landing Page

Landing page moderna e responsiva para a corretora de seguros PG Seguros, desenvolvida com React, TypeScript e TailwindCSS. Projeto com arquitetura escalável e padrões profissionais.

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

## 📋 Funcionalidades

- **Design Responsivo** - Otimizado para desktop e mobile
- **Animações Modernas** - Transições suaves e efeitos visuais
- **Modal de Cotação** - Formulário integrado com Google Sheets/Airtable
- **Navegação Suave** - Scroll automático entre seções
- **UX/UI Otimizada** - Interface intuitiva e moderna
- **Integração Instagram** - Posts reais da conta Instagram
- **Sistema de Notificações** - Feedback visual para ações do usuário
- **Error Boundaries** - Captura e tratamento de erros
- **Lazy Loading** - Carregamento otimizado de componentes

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
│   │   └── instagramService.ts # Serviço Instagram
│   ├── context/          # Contextos React
│   ├── utils/            # Utilitários
│   ├── constants/        # Constantes da aplicação
│   ├── assets/           # Assets (CSS, imagens)
│   └── types/            # Tipos TypeScript
└── types/                # Tipos globais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre no diretório
cd PG_Seguros

# Instale as dependências
npm install

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

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Sheets Integration
VITE_GOOGLE_SHEETS_URL=sua_url_do_google_apps_script

# Airtable Integration (opcional)
VITE_AIRTABLE_API_KEY=sua_chave_do_airtable
VITE_AIRTABLE_BASE_ID=seu_base_id
VITE_AIRTABLE_TABLE_NAME=nome_da_tabela

# Instagram Integration
VITE_INSTAGRAM_ACCESS_TOKEN=seu_token_do_instagram
VITE_INSTAGRAM_USER_ID=seu_user_id_do_instagram

# API Configuration (opcional)
VITE_API_BASE_URL=sua_url_base_da_api
```

### Integração com Planilhas
O projeto está configurado para salvar cotações em:
- Google Sheets (via Google Apps Script)
- Airtable (API)
- Email (fallback)

### Integração Instagram
- **API**: Instagram Basic Display API
- **Funcionalidades**: Posts automáticos, fallback para dados estáticos
- **Configuração**: Token de acesso e User ID necessários
- **Documentação**: Veja `INSTAGRAM_INTEGRATION_GUIDE.md` para detalhes

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
6. **Instagram** - Posts reais da conta Instagram
7. **Contato** - Informações de contato

## 🏗️ Arquitetura

### **Padrões Implementados**
- **Domain-Driven Design (DDD)** - Features organizadas por domínio
- **Service Layer Pattern** - Abstração de serviços com BaseService
- **Repository Pattern** - Interface consistente para dados
- **Custom Hooks Pattern** - Lógica reutilizável
- **Context Pattern** - Estado global da aplicação

### **Princípios**
- **Separation of Concerns** - Separação clara de responsabilidades
- **Dependency Injection** - Serviços configuráveis
- **Type Safety** - TypeScript rigoroso em todo o projeto
- **Error Handling** - Error boundaries e fallbacks

### **Performance**
- **Lazy Loading** - Componentes carregados sob demanda
- **Code Splitting** - Bundle otimizado por rota
- **React Query** - Cache inteligente de dados
- **Optimized Images** - Imagens otimizadas e responsivas
- **Tree Shaking** - Eliminação de código não utilizado

### **Segurança**
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

### **Qualidade de Código**
- ESLint configurado com regras rigorosas
- TypeScript com configuração estrita
- Prettier para formatação consistente

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

PG Seguros - [contato@pgseguros.com.br](mailto:contato@pgseguros.com.br)

## 📚 Documentação Adicional

- **Instagram Integration**: `INSTAGRAM_INTEGRATION_GUIDE.md`
- **Planilha Integration**: `PLANILHA_INTEGRATION.md`
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

---

**Desenvolvido com ❤️ para PG Seguros**

*Arquitetura profissional e escalável para landing pages modernas.*
