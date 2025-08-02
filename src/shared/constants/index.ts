import { 
  Car, Home, Heart, Building2, User, Briefcase, 
  Shield, Users, Zap, Target, Sparkles 
} from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, LinkedInIcon } from "@/shared/components/icons/SocialIcons";
import type { Service, SocialLink, QuickLink, Testimonial, Partner } from "@/types";

// Configuração da empresa
export interface AppConfig {
  company: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  social: {
    whatsapp: string;
    instagram: string;
    facebook: string;
    linkedin: string;
  };
}

// Configuração da empresa
export const APP_CONFIG: AppConfig = {
  company: {
    name: "PG Seguros",
    phone: "(11) 99999-9999",
    email: "contato@pgseguros.com.br",
    address: "São Paulo, SP - Brasil"
  },
  social: {
    whatsapp: "https://wa.me/5511999999999",
    instagram: "https://instagram.com/pgseguros",
    facebook: "https://facebook.com/pgseguros",
    linkedin: "https://linkedin.com/company/pgseguros"
  }
};

// Serviços pessoais
export const PERSONAL_SERVICES: Service[] = [
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com as melhores seguradoras do mercado.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Proteja sua casa e família com coberturas abrangentes e personalizadas.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Garanta o futuro financeiro da sua família com nossas opções de vida.",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50"
  },
  {
    icon: User,
    title: "Seguro Saúde",
    description: "Acesso a uma rede credenciada de qualidade para cuidar da sua saúde.",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50"
  }
];

// Serviços empresariais
export const BUSINESS_SERVICES: Service[] = [
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Proteção completa para sua empresa com coberturas sob medida.",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50"
  },
  {
    icon: Users,
    title: "Seguro de Pessoas",
    description: "Proteção para colaboradores com benefícios atrativos e competitivos.",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50"
  },
  {
    icon: Shield,
    title: "Seguro de Responsabilidade",
    description: "Proteja sua empresa contra danos a terceiros e prejuízos financeiros.",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-50 to-cyan-50"
  },
  {
    icon: Target,
    title: "Seguro de Riscos",
    description: "Coberturas especializadas para riscos específicos do seu negócio.",
    gradient: "from-slate-500 to-gray-500",
    bgGradient: "from-slate-50 to-gray-50"
  }
];

// Links de navegação
export const QUICK_LINKS: QuickLink[] = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Quem Somos", href: "#quem-somos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" }
];

// Links sociais
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "WhatsApp",
    href: APP_CONFIG.social.whatsapp,
    icon: WhatsAppIcon,
    color: "hover:text-green-500"
  },
  {
    name: "Instagram",
    href: APP_CONFIG.social.instagram,
    icon: InstagramIcon,
    color: "hover:text-pink-500"
  },
  {
    name: "Facebook",
    href: APP_CONFIG.social.facebook,
    icon: FacebookIcon,
    color: "hover:text-blue-600"
  },
  {
    name: "LinkedIn",
    href: APP_CONFIG.social.linkedin,
    icon: LinkedInIcon,
    color: "hover:text-blue-700"
  }
];

// Depoimentos
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Cliente desde 2018",
    content: "A PG Seguros sempre me atendeu com excelência. Quando precisei acionar o seguro auto, o processo foi muito rápido e sem complicações.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Empresário",
    content: "Como empresário, preciso de uma corretora que entenda as necessidades do meu negócio. A PG Seguros superou todas as expectativas.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Cliente residencial",
    content: "Contratei o seguro residencial e fiquei impressionada com a atenção aos detalhes. Recomendo para todos os meus amigos.",
    rating: 5
  }
];

// Parceiros
export const PARTNERS: Partner[] = [
  {
    name: "Seguradora A",
    logo: "/placeholder.svg",
    description: "Uma das maiores seguradoras do Brasil"
  },
  {
    name: "Seguradora B",
    logo: "/placeholder.svg",
    description: "Especializada em seguros empresariais"
  },
  {
    name: "Seguradora C",
    logo: "/placeholder.svg",
    description: "Foco em seguros de vida e saúde"
  }
];

// Configurações de navegação
export const NAVIGATION_CONFIG = {
  sections: [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "quem-somos", label: "Quem Somos" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "contato", label: "Contato" }
  ]
}; 