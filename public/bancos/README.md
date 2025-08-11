# 🖼️ Logos das Seguradoras - PG Seguros

## 📁 Estrutura de Arquivos

### Imagens Atuais
- `porto-seguro-logo.png` - Logo oficial da Porto Seguro
- `placeholder-logo.svg` - Logo placeholder genérico

### Imagens Pendentes
Para completar a coleção, você precisará adicionar os logos das seguintes seguradoras:

#### Grupo Porto
- `azul-seguros-logo.png` - Logo da Azul Seguros
- `itau-seguros-logo.png` - Logo do Itaú Seguros  
- `mitsui-seguros-logo.png` - Logo da Mitsui Seguros

#### Seguradoras Independentes
- `bradesco-seguros-logo.png` - Logo da Bradesco Seguros
- `hdi-seguros-logo.png` - Logo da HDI Seguros
- `yelum-seguros-logo.png` - Logo da Yelum Seguros
- `aliro-seguros-logo.png` - Logo da Aliro Seguros
- `tokio-marine-logo.png` - Logo da Tokio Marine
- `suhai-seguradora-logo.png` - Logo da Suhai Seguradora
- `zurich-seguros-logo.png` - Logo da Zurich Seguros

## 🔧 Como Adicionar Novos Logos

### 1. Preparar a Imagem
- **Formato**: PNG ou SVG (recomendado)
- **Dimensões**: Mínimo 200x100px, ideal 400x200px
- **Fundo**: Transparente ou branco
- **Qualidade**: Alta resolução para dispositivos retina

### 2. Nomear o Arquivo
- Use o padrão: `nome-seguradora-logo.extensao`
- Exemplo: `bradesco-seguros-logo.png`

### 3. Colocar na Pasta
- Adicione o arquivo na pasta `public/bancos/`
- O sistema automaticamente detectará e usará a nova imagem

### 4. Atualizar o Código
- Edite `src/shared/constants/partners.ts`
- Substitua o caminho do placeholder pelo caminho da nova imagem
- Exemplo: `logo: "/bancos/bradesco-seguros-logo.png"`

## 📱 Responsividade

As imagens são automaticamente redimensionadas para:
- **Mobile**: 96x48px (w-24 h-12)
- **Desktop**: 128x64px (w-32 h-16)

## 🎨 Fallback

Se uma imagem falhar ao carregar, o sistema automaticamente:
1. Oculta a imagem
2. Mostra o nome da seguradora como texto
3. Mantém a funcionalidade do carrossel

## 🚀 Benefícios

- **Carregamento rápido** - Imagens otimizadas
- **Fallback inteligente** - Sem quebras na interface
- **Responsivo** - Funciona em todos os dispositivos
- **Manutenível** - Fácil adicionar novas imagens
- **Profissional** - Aparência polida e consistente
