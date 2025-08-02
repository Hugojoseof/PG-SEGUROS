// Tipos para serviços de seguros
export interface InsuranceService {
  id: string;
  title: string;
  description: string;
  category: 'personal' | 'business';
  features: string[];
  price: string;
  popular?: boolean;
}

// Tipos para formulários de contato
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Tipos para cotações
export interface QuoteRequest {
  serviceId: string;
  customerData: {
    name: string;
    email: string;
    phone: string;
  };
  additionalInfo?: string;
}

// Tipos para membros da equipe
export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  description: string;
  phone: string;
  email: string;
  linkedin: string;
  image?: string;
}

// Tipos para depoimentos
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  avatar?: string;
}

// Tipos para posts do Instagram
export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

// Tipos para navegação
export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
  isMegaMenu?: boolean;
  megaMenuItems?: {
    title: string;
    icon: React.ReactNode;
    items: string[];
  }[];
}

// Tipos para configurações da aplicação
export interface AppConfig {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  whatsappUrl: string;
  instagramUrl: string;
  businessHours: {
    weekdays: string;
    saturday: string;
  };
} 