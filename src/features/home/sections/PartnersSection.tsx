import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Shield, Award, Zap, Users, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import QuoteModal from "@/features/quotes/components/QuoteModal";
import { INSURANCE_PARTNERS, TOTAL_PARTNERS } from "@/shared/constants/partners";

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("parceiros");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const partners = INSURANCE_PARTNERS;

  const trustStats = [
    { number: `${TOTAL_PARTNERS}+`, label: "Seguradoras Parceiras", icon: Shield, color: "from-blue-400 to-cyan-400" },
    { number: "24/7", label: "Atendimento", icon: Zap, color: "from-purple-400 to-pink-400" },
    { number: "100%", label: "Digital", icon: Award, color: "from-emerald-400 to-teal-400" },
    { number: "10k+", label: "Clientes Satisfeitos", icon: Users, color: "from-orange-400 to-red-400" },
  ];

  return (
    <section id="parceiros" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-blue-400/8 to-indigo-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-indigo-400/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-purple-400/35 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in-scale">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              Parcerias Estratégicas
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent mb-4 sm:mb-6">
              Parceiros de Confiança
            </h2>
            <p className="text-base sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
              Trabalhamos com as <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">principais seguradoras</span> do Brasil 
              para oferecer as melhores opções de cobertura e preços competitivos.
            </p>
          </div>

          {/* Infinite Loop Carousel - Full Width */}
          <div className={`mb-16 sm:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative overflow-hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
              {/* Carousel Container */}
              <div className="carousel-container">
                {/* First Set - Original */}
                <div className="carousel-track">
                  {partners.map((partner, index) => (
                    <div
                      key={`original-${index}`}
                      className="carousel-item"
                    >
                      <div className="w-40 h-24 sm:w-56 sm:h-32 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-300 border border-slate-100/50 flex flex-col items-center justify-center p-3 sm:p-6 hover:shadow-xl hover:scale-105">
                        <div className="text-center flex-1 flex flex-col items-center justify-center">
                          <div className="w-24 h-12 sm:w-32 sm:h-16 mb-2 sm:mb-3 flex items-center justify-center">
                            <img 
                              src={partner.logo} 
                              alt={`Logo ${partner.name}`}
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  const fallback = document.createElement('span');
                                  fallback.className = 'text-xs sm:text-sm font-medium text-slate-600 px-1 text-center';
                                  fallback.textContent = partner.name;
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          </div>
                          <div className="text-xs sm:text-xs font-medium text-slate-600 px-1 text-center leading-tight">
                            {partner.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Second Set - Duplicate for seamless loop */}
                <div className="carousel-track">
                  {partners.map((partner, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="carousel-item"
                    >
                      <div className="w-40 h-24 sm:w-56 sm:h-32 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-300 border border-slate-100/50 flex flex-col items-center justify-center p-3 sm:p-6 hover:shadow-xl hover:scale-105">
                        <div className="text-center flex-1 flex flex-col items-center justify-center">
                          <div className="w-24 h-12 sm:w-32 sm:h-16 mb-2 sm:mb-3 flex items-center justify-center">
                            <img 
                              src={partner.logo} 
                              alt={`Logo ${partner.name}`}
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  const fallback = document.createElement('span');
                                  fallback.className = 'text-xs sm:text-sm font-medium text-slate-600 px-1 text-center';
                                  fallback.textContent = partner.name;
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          </div>
                          <div className="text-xs sm:text-xs font-medium text-slate-600 px-1 text-center leading-tight">
                            {partner.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Indicador de parceiros */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-slate-600" />
                <span className="text-sm text-slate-600">
                  {TOTAL_PARTNERS} seguradoras parceiras
                </span>
              </div>
            </div>
          </div>

          {/* Trust Stats */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg`}>
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-200">{stat.number}</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-blue-100/50 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 border border-blue-300/30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 border border-purple-300/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 sm:w-48 h-36 sm:h-48 border border-blue-300/30 rounded-full"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  <span className="text-sm sm:text-lg font-semibold text-slate-700">{TOTAL_PARTNERS} seguradoras parceiras de confiança</span>
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Encontre a Melhor Opção para Você
                </h3>
                <p className="text-sm sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Com tantas opções disponíveis, nossa equipe especializada vai encontrar a cobertura perfeita 
                  para suas necessidades e orçamento.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg group"
                    onClick={() => handleOpenModal("Comparativo de Seguradoras")}
                  >
                    Comparar Opções
                    <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg"
                    onClick={() => handleOpenModal("Falar com Especialista")}
                  >
                    Falar com Especialista
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Cotação */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={selectedService}
        sectionId="parceiros"
      />

      <style>{`
        .carousel-container {
          display: flex;
          width: fit-content;
          animation: scroll-infinite 30s linear infinite;
        }
        
        .carousel-track {
          display: flex;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        
        .carousel-item {
          flex-shrink: 0;
        }
        
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause animation on hover */
        .carousel-container:hover {
          animation-play-state: paused;
        }
        
        /* Smooth transitions for hover effects */
        .carousel-item:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .carousel-container {
            animation-duration: 20s;
          }
        }
        
        @media (min-width: 1024px) {
          .carousel-container {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;