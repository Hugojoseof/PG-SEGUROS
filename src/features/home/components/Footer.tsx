import { Button } from "@/shared/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight, Shield, Star, Users, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import QuoteModal from "@/features/quotes/components/QuoteModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/pg.seguros?utm_source=ig_web_button_share_sheet&igsh=b3Q4Y3gyZDdjc3Jq", color: "hover:text-pink-500", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  const services = [
    { name: "Seguro Auto", icon: Shield },
    { name: "Seguro Residencial", icon: Shield },
    { name: "Seguro de Vida", icon: Shield },
    { name: "Seguro Empresarial", icon: Shield },
    { name: "Consórcio", icon: Shield },
  ];

  const trustFactors = [
    { icon: Star, text: "25+ anos de experiência", color: "from-yellow-500 to-orange-500" },
    { icon: Users, text: "1000+ clientes atendidos", color: "from-blue-500 to-purple-500" },
    { icon: Clock, text: "Atendimento 24/7", color: "from-green-500 to-emerald-500" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Trust Factors */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {trustFactors.map((factor, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
              <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${factor.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <factor.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">{factor.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <img
                src="/PG_LOGO.png"
                alt="PG Seguros"
                className="h-16 sm:h-20 w-auto mb-4 sm:mb-6 brightness-0 invert"
              />
              <p className="text-white/80 mb-6 sm:mb-8 max-w-lg text-base sm:text-lg leading-relaxed">
                Há mais de <span className="font-semibold text-blue-300">25 anos</span> protegendo o que mais importa para você. 
                Somos especialistas em seguros com foco no atendimento humanizado 
                e soluções personalizadas.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center text-white/80 hover:text-blue-300 transition-colors group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-transform flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm sm:text-base">(84) 99850-1948</div>
                  <div className="text-xs sm:text-sm text-white/60">Ligue agora</div>
                </div>
              </div>
              <div className="flex items-center text-white/80 hover:text-blue-300 transition-colors group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-transform flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm sm:text-base break-all">contato@pgseguros.com.br</div>
                  <div className="text-xs sm:text-sm text-white/60">Envie um email</div>
                </div>
              </div>
              <div className="flex items-center text-white/80 hover:text-blue-300 transition-colors group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-transform flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm sm:text-base">São Miguel, RN - Brasil</div>
                  <div className="text-xs sm:text-sm text-white/60">Nossa localização</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-white">Links Rápidos</h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-blue-300 transition-colors flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-white">Nossos Serviços</h4>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleOpenModal(service.name)}
                    className="text-white/80 hover:text-blue-300 transition-colors flex items-center group cursor-pointer text-sm sm:text-base"
                  >
                    <service.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 border border-white/10 backdrop-blur-sm">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              <span className="text-base sm:text-lg font-semibold text-white">Pronto para Proteger o que Importa?</span>
            </div>
            <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-lg">
              Entre em contato conosco e descubra como podemos proteger você e sua família 
              com as melhores soluções do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg group"
                onClick={() => handleOpenModal("Consultoria Gratuita")}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform" />
                <span className="hidden sm:inline">Falar com Especialista</span>
                <span className="sm:hidden">Especialista</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open("https://wa.me/5584998501948?text=Olá! Gostaria de fazer uma cotação.", "_blank")}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Siga-nos nas redes sociais</h4>
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 text-white/80 ${social.color} transition-all duration-300 rounded-full`}
                    onClick={() => window.open(social.href, "_blank")}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">Atendimento 24/7</p>
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium text-sm sm:text-base">Online agora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-white/60 text-xs sm:text-sm gap-4 sm:gap-0">
            <p className="text-center sm:text-left">
              © {currentYear} PG Seguros - Corretora de Seguros. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <button 
                className="hover:text-blue-300 transition-colors text-center sm:text-left"
                onClick={() => window.open('/privacy.html', '_blank')}
              >
                Política de Privacidade
              </button>
              <button 
                className="hover:text-blue-300 transition-colors text-center sm:text-left"
                onClick={() => window.open('/terms.html', '_blank')}
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Cotação */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={selectedService}
        sectionId="footer"
      />
    </footer>
  );
};

export default Footer;