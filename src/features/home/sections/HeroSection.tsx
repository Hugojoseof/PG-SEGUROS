import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Shield, Phone, Car, Home, Heart, Building2, ChevronDown, ArrowRight } from "lucide-react";
import QuoteModal from "@/features/quotes/components/QuoteModal";
import TypewriterEffect from "@/shared/components/TypewriterEffect";

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
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-48 sm:w-64 h-48 sm:h-64 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 sm:w-96 h-64 sm:h-96 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 border border-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-indigo-400/35 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-8 sm:space-y-10 lg:space-y-12 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium border border-white/20 animate-fade-in-scale">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              25+ anos de experiência
            </div>

            {/* Main Headline */}
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Proteção{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  <TypewriterEffect 
                    words={[
                      "Inteligente",
                      "Completa", 
                      "Personalizada",
                      "Confiável",
                      "Eficiente",
                      "Segura",
                      "Modernizada",
                      "Especializada"
                    ]} 
                    speed={150} 
                    pauseTime={2500}
                  />
                </span>
                <br />
                para sua Vida
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Especialistas em seguros desde 2008. Oferecemos as melhores opções 
                das principais seguradoras do mercado com atendimento personalizado.
              </p>
            </div>

            {/* Enhanced CTA Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 animate-fade-in-scale hover:bg-white/8 transition-all duration-300 animate-pulse-glow">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                Faça sua cotação gratuita
              </h3>
              
              {/* Service Selector */}
              <div className="relative mb-4 sm:mb-6">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center justify-between font-medium border border-white/20 hover:bg-white/15 transition-colors text-sm sm:text-base"
                >
                  <span className={selectedService === "Selecione o tipo de seguro" ? "text-white/60" : "text-white"}>
                    {selectedService}
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 py-2 z-50">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-white/50 transition-colors text-sm sm:text-base"
                        onClick={() => handleServiceSelect(service)}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Enhanced CTA Button */}
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm sm:text-base lg:text-lg transform hover:scale-105 animate-pulse-glow"
                onClick={handleQuoteSubmit}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Solicitar Cotação
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
              <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">25+</div>
                <div className="text-white/70 text-xs sm:text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">20+</div>
                <div className="text-white/70 text-xs sm:text-sm">Seguradoras Parceiras</div>
              </div>
              <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">1000+</div>
                <div className="text-white/70 text-xs sm:text-sm">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative animate-slide-in-right">
            {/* Main Visual Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 hover:bg-white/8 transition-all duration-300">
              <div className="text-center space-y-6 sm:space-y-8">
                {/* Enhanced Service Icons */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <Car className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cyan-400 mx-auto mb-2 sm:mb-3" />
                    <p className="text-white font-medium text-sm sm:text-base">Auto</p>
                  </div>
                  <div className="bg-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <Home className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 mx-auto mb-2 sm:mb-3" />
                    <p className="text-white font-medium text-sm sm:text-base">Residencial</p>
                  </div>
                  <div className="bg-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-400 mx-auto mb-2 sm:mb-3" />
                    <p className="text-white font-medium text-sm sm:text-base">Vida</p>
                  </div>
                  <div className="bg-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <Building2 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-indigo-400 mx-auto mb-2 sm:mb-3" />
                    <p className="text-white font-medium text-sm sm:text-base">Empresarial</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                    Proteção Completa
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base">
                    Para você e sua família
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl animate-pulse-glow">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white/10 backdrop-blur-sm text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 animate-float">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Contact Button */}
      <div className="fixed right-4 sm:right-6 lg:right-8 bottom-4 sm:bottom-6 lg:bottom-8 z-50">
        <Button
          size="icon"
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
          onClick={handleWhatsAppClick}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
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