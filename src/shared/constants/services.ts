import { Shield, Stethoscope, Heart, Car, Building2, Bike, Smartphone, Plane, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  key: string;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bgGradient: string;
  heroImage?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    key: "consorcio",
    icon: Shield,
    title: "Consórcio",
    description: "Realize seus sonhos de forma planejada.",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    heroImage: "/hero/consorcio.jpg",
    seoTitle: "Consórcio - Simule e Planeje | PG Seguros",
    seoDescription: "Faça consórcio com a PG Seguros. Planejamento inteligente para realizar seus objetivos com segurança.",
  },
  {
    key: "responsabilidade-civil",
    icon: Stethoscope,
    title: "Responsabilidade Civil",
    description: "Proteção contra danos a terceiros (médicos e profissionais).",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
    heroImage: "/hero/responsabilidade-civil.jpg",
    seoTitle: "Responsabilidade Civil - Proteção Profissional | PG Seguros",
    seoDescription: "Seguro de Responsabilidade Civil para médicos e profissionais. Coberturas sob medida e atendimento ágil.",
  },
  {
    key: "seguro-de-vida",
    icon: Heart,
    title: "Seguro de Vida",
    description: "Proteção financeira para quem você ama.",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    heroImage: "/hero/seguro-de-vida.jpg",
    seoTitle: "Seguro de Vida - Tranquilidade para sua Família | PG Seguros",
    seoDescription: "Faça sua cotação de Seguro de Vida com a PG Seguros. Proteção financeira e assistência completa.",
  },
  {
    key: "seguro-auto",
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    heroImage: "/hero/seguro-auto.jpg",
    seoTitle: "Seguro Auto - Cotação Rápida | PG Seguros",
    seoDescription: "Seguro auto com coberturas completas e assistência 24h. Compare opções e economize.",
  },
  {
    key: "seguro-empresarial",
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Proteção completa para seu negócio.",
    gradient: "from-slate-600 to-gray-700",
    bgGradient: "from-slate-50 to-gray-50",
    heroImage: "/hero/seguro-empresarial.jpg",
    seoTitle: "Seguro Empresarial - Proteção para sua Empresa | PG Seguros",
    seoDescription: "Seguro empresarial sob medida. Proteção do patrimônio, responsabilidade e operações.",
  },
  {
    key: "seguro-moto",
    icon: Bike,
    title: "Seguro Moto",
    description: "Segurança para sua moto em qualquer trajeto.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    heroImage: "/hero/seguro-moto.jpg",
    seoTitle: "Seguro Moto - Coberturas e Assistência | PG Seguros",
    seoDescription: "Seguro para moto com coberturas essenciais e assistência. Faça sua cotação agora.",
  },
  {
    key: "seguro-celular",
    icon: Smartphone,
    title: "Seguro Celular",
    description: "Proteção contra roubo, furto e danos ao seu smartphone.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    heroImage: "/hero/seguro-celular.jpg",
    seoTitle: "Seguro Celular - Proteção Completa | PG Seguros",
    seoDescription: "Proteja seu smartphone com seguro contra roubo, furto e danos. Cotação rápida.",
  },
  {
    key: "seguro-viagem",
    icon: Plane,
    title: "Seguro Viagem",
    description: "Viaje com tranquilidade: assistência e cobertura internacionais.",
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
    heroImage: "/hero/seguro-viagem.jpg",
    seoTitle: "Seguro Viagem - Assistência Internacional | PG Seguros",
    seoDescription: "Seguro viagem com assistência internacional e coberturas completas. Viaje tranquilo.",
  },
];


