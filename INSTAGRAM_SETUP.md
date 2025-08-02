# Configuração da API do Instagram

## Problema Atual
O site está retornando erro 400 ao tentar carregar posts do Instagram. Isso acontece porque:

1. **Token de acesso não configurado** na Vercel
2. **Token expirado ou inválido**
3. **Permissões insuficientes** na API do Instagram

## Solução Temporária
O site já está configurado para usar **posts de fallback** quando a API falha, então ele continuará funcionando normalmente.

## Como Configurar a API do Instagram

### 1. Criar um App no Facebook Developer
1. Acesse [Facebook Developers](https://developers.facebook.com/)
2. Crie um novo app ou use um existente
3. Adicione o produto "Instagram Basic Display"

### 2. Configurar o Instagram Basic Display
1. No seu app, vá para "Instagram Basic Display"
2. Configure as URLs de redirecionamento
3. Gere um token de acesso de longa duração

### 3. Configurar na Vercel
1. Acesse o dashboard da Vercel
2. Vá para o projeto `pg-seguros`
3. Clique em "Settings" > "Environment Variables"
4. Adicione a variável:
   - **Name:** `VITE_INSTAGRAM_ACCESS_TOKEN`
   - **Value:** `seu_token_aqui`
5. Clique em "Save"
6. Faça um novo deploy

### 4. Verificar se Funcionou
Após o deploy, verifique no console do navegador se aparece:
- ✅ "Posts carregados via Instagram API: X"
- ❌ "Instagram access token não configurado, usando posts de fallback"

## Posts de Fallback
Enquanto a API não estiver configurada, o site mostrará posts de exemplo com:
- 💼 Dicas de Seguros
- 🚗 Seguro Auto
- 🏠 Seguro Residencial
- ❤️ Seguro de Vida

## Estrutura do Token
O token deve ter permissões para:
- `user_profile`
- `user_media`

## Links Úteis
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api/)
- [Facebook Developers](https://developers.facebook.com/)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## Nota Importante
A API do Instagram tem limitações e pode não funcionar em todos os casos. O sistema de fallback garante que o site sempre funcione, mesmo sem a API configurada. 