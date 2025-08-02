export const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Email inválido'
  },
  phone: {
    pattern: /^(\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/,
    message: 'Telefone inválido'
  },
  cpf: {
    pattern: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
    message: 'CPF inválido'
  },
  cnpj: {
    pattern: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/,
    message: 'CNPJ inválido'
  }
};

export const validateField = (value: string, rule: keyof typeof validationRules): boolean => {
  const { pattern } = validationRules[rule];
  return pattern.test(value);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const validateMaxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
}; 