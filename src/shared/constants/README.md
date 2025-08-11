# 📋 Gerenciamento de Parceiros - PG Seguros

## 🏢 Estrutura dos Parceiros

### Arquivo Principal
- **`partners.ts`** - Contém todas as informações dos parceiros de seguros

### Interface TypeScript
```typescript
interface InsurancePartner {
  name: string;           // Nome da seguradora
  logo: string;           // URL do logo
  description: string;    // Descrição da seguradora
  group?: string;         // Grupo (opcional, ex: "Grupo Porto")
  specialties: string[];  // Especialidades da seguradora
}
```

## 🎯 Parceiros Atuais

### Grupo Porto
1. **Porto Seguro** - Líder no mercado brasileiro
2. **Azul Seguros** - Especializada em viagem e auto
3. **Itaú Seguros** - Soluções bancárias integradas
4. **Mitsui Seguros** - Foco empresarial japonês

### Seguradoras Independentes
5. **Bradesco Seguros** - Bancário e empresarial
6. **HDI Seguros** - Auto e empresarial
7. **Yelum Seguros** - Vida e saúde
8. **Aliro Seguros** - Empresarial e responsabilidade
9. **Tokio Marine** - Cobertura ampla japonesa
10. **Suhai Seguradora** - Vida e previdência
11. **Zurich Seguros** - Empresarial internacional

## 🔧 Como Atualizar

### Adicionar Novo Parceiro
```typescript
{
  name: "Nova Seguradora",
  logo: "https://exemplo.com/logo.png",
  description: "Descrição da nova seguradora",
  group: "Grupo Específico", // opcional
  specialties: ["Auto", "Residencial", "Vida"]
}
```

### Remover Parceiro
- Remover da array `INSURANCE_PARTNERS`
- O sistema automaticamente atualiza `TOTAL_PARTNERS`

### Modificar Informações
- Atualizar diretamente no objeto do parceiro
- As mudanças se refletem automaticamente em todo o sistema

## 📊 Constantes Exportadas

- `INSURANCE_PARTNERS` - Array completo dos parceiros
- `PARTNER_GROUPS` - Agrupamento por categorias
- `TOTAL_PARTNERS` - Número total de parceiros

## 🎨 Uso no Sistema

### PartnersSection
- Exibe todos os parceiros em carrossel infinito
- Usa `INSURANCE_PARTNERS` para renderização

### DiferenciaisSection
- Mostra estatísticas com `TOTAL_PARTNERS`
- Descrições dinâmicas baseadas no número de parceiros

### Outros Componentes
- Importar constantes conforme necessário
- Manter consistência em todo o sistema

## 🚀 Benefícios da Estrutura

1. **Centralização** - Todas as informações em um local
2. **Manutenibilidade** - Fácil atualização e modificação
3. **Consistência** - Dados sincronizados em todo o sistema
4. **Escalabilidade** - Estrutura preparada para crescimento
5. **Type Safety** - Interface TypeScript para validação
