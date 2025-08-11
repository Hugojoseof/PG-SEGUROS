export interface InsurancePartner {
  name: string;
  logo: string;
  description: string;
  group?: string;
  specialties: string[];
}

export const INSURANCE_PARTNERS: InsurancePartner[] = [
  // Grupo Porto
  {
    name: "Porto Seguro",
    logo: "/bancos/porto-seguro-logo.png",
    description: "Líder no mercado brasileiro de seguros",
    group: "Grupo Porto",
    specialties: ["Auto", "Residencial", "Vida", "Empresarial", "Saúde"]
  },
  {
    name: "Azul Seguros",
    logo: "/bancos/azul-seguros.png",
    description: "Especializada em seguros de viagem e automóveis",
    group: "Grupo Porto",
    specialties: ["Auto", "Viagem", "Residencial"]
  },
  {
    name: "Itaú Seguros",
    logo: "/bancos/itau-seguros.png",
    description: "Soluções bancárias integradas com seguros",
    group: "Grupo Porto",
    specialties: ["Vida", "Saúde", "Empresarial", "Bancário"]
  },
  {
    name: "Mitsui Seguros",
    logo: "/bancos/mitsui-seguro.png",
    description: "Seguradora japonesa com foco empresarial",
    group: "Grupo Porto",
    specialties: ["Empresarial", "Responsabilidade Civil", "Riscos Específicos"]
  },

  // Outras seguradoras parceiras
  {
    name: "Bradesco Seguros",
    logo: "/bancos/bradesco-seguros.png",
    description: "Especializada em seguros bancários e empresariais",
    specialties: ["Auto", "Residencial", "Vida", "Empresarial", "Bancário"]
  },
  {
    name: "HDI Seguros",
    logo: "/bancos/hdi-seguros.png",
    description: "Foco em seguros automotivos e empresariais",
    specialties: ["Auto", "Empresarial", "Responsabilidade Civil", "Engenharia"]
  },
  {
    name: "Yelum Seguros",
    logo: "/bancos/yelum-seguros.svg",
    description: "Especializada em seguros de vida e saúde",
    specialties: ["Vida", "Saúde", "Previdência", "Acidentes Pessoais"]
  },
  {
    name: "Aliro Seguros",
    logo: "/bancos/aliro-seguros.png",
    description: "Foco em seguros empresariais e de responsabilidade",
    specialties: ["Empresarial", "Responsabilidade Civil", "Riscos Específicos", "Engenharia"]
  },
  {
    name: "Tokio Marine",
    logo: "/bancos/Tokyo-Marine.png",
    description: "Seguradora japonesa com ampla cobertura",
    specialties: ["Auto", "Residencial", "Empresarial", "Marítimo", "Aviação"]
  },
  {
    name: "Suhai Seguradora",
    logo: "/bancos/suhai-seguros.png",
    description: "Especializada em seguros de vida e previdência",
    specialties: ["Vida", "Previdência", "Saúde", "Acidentes Pessoais"]
  },
  {
    name: "Zurich Seguros",
    logo: "/bancos/zurich-seguros.png",
    description: "Seguradora internacional com foco empresarial",
    specialties: ["Empresarial", "Responsabilidade Civil", "Riscos Específicos", "Engenharia"]
  }
];

export const PARTNER_GROUPS = {
  "Grupo Porto": ["Porto Seguro", "Azul Seguros", "Itaú Seguros", "Mitsui Seguros"],
  "Independentes": ["Bradesco Seguros", "HDI Seguros", "Yelum Seguros", "Aliro Seguros", "Tokio Marine", "Suhai Seguradora", "Zurich Seguros"]
};

export const TOTAL_PARTNERS = INSURANCE_PARTNERS.length;
