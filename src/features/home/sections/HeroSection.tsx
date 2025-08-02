import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Shield, Phone, Car, Home, Heart, Building2, ChevronDown, ArrowRight } from "lucide-react";
import QuoteModal from "@/features/quotes/components/QuoteModal";

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState("Selecione o tipo de seguro");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma cotação de seguro.", "_blank");
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  const handleQuoteSubmit = () => {
    if (selectedService === "Selecione o tipo de seguro") {
      setIsDropdownOpen(true);
      return;
    }
    setIsModalOpen(true);
  };

  const services = [
    "Seguro Auto",
    "Seguro Residencial", 
    "Seguro de Vida",
    "Seguro Empresarial",
    "Consórcio"
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-primary to-slate-800">
      {/* Minimal Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              25+ anos de experiência
            </div>

            {/* Main Headline */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Proteção{" "}
                <span className="text-secondary">Inteligente</span>
                <br />
                para sua Vida
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Especialistas em seguros desde 2008. Oferecemos as melhores opções 
                das principais seguradoras do mercado com atendimento personalizado.
              </p>
            </div>

            {/* Clean CTA Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Faça sua cotação gratuita
              </h3>
              
              {/* Service Selector */}
              <div className="relative mb-6">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-2xl flex items-center justify-between font-medium border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <span className={selectedService === "Selecione o tipo de seguro" ? "text-white/60" : "text-white"}>
                    {selectedService}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-2xl border border-white/20 py-2 z-50">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-6 py-4 text-gray-800 hover:bg-white/50 transition-colors"
                        onClick={() => handleServiceSelect(service)}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-secondary text-white py-4 rounded-2xl font-semibold hover:bg-secondary/90 transition-colors text-lg"
                onClick={handleQuoteSubmit}
              >
                <Phone className="w-5 h-5 mr-3" />
                Solicitar Cotação
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">25+</div>
                <div className="text-white/70 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">20+</div>
                <div className="text-white/70 text-sm">Seguradoras Parceiras</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-white/70 text-sm">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            {/* Main Visual Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="text-center space-y-8">
                {/* Service Icons */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <Car className="w-12 h-12 text-secondary mx-auto mb-3" />
                    <p className="text-white font-medium">Auto</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <Home className="w-12 h-12 text-secondary mx-auto mb-3" />
                    <p className="text-white font-medium">Residencial</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <Heart className="w-12 h-12 text-secondary mx-auto mb-3" />
                    <p className="text-white font-medium">Vida</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <Building2 className="w-12 h-12 text-secondary mx-auto mb-3" />
                    <p className="text-white font-medium">Empresarial</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Proteção Completa
                  </h3>
                  <p className="text-white/70">
                    Para você e sua família
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-2xl shadow-xl">
              <Shield className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm text-white p-4 rounded-2xl border border-white/20">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed right-8 bottom-8 z-50">
        <Button
          size="icon"
          className="w-16 h-16 bg-secondary text-white rounded-2xl shadow-xl hover:bg-secondary/90 transition-colors"
          onClick={handleWhatsAppClick}
        >
          <Phone className="w-7 h-7" />
        </Button>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
        sectionId="inicio"
      />
    </section>
  );
};

export default HeroSection;