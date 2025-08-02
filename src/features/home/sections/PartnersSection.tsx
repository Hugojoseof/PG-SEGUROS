import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Shield, Award, Zap, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";
import QuoteModal from "@/features/quotes/components/QuoteModal";

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

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

  const partners = [
    { name: "Porto Seguro", logo: "https://logoeps.com/wp-content/uploads/2013/03/porto-seguro-vector-logo.png" },
    { name: "Bradesco Seguros", logo: "https://logoeps.com/wp-content/uploads/2014/05/bradesco-vector-logo.png" },
    { name: "Allianz", logo: "https://logoeps.com/wp-content/uploads/2013/03/allianz-vector-logo.png" },
    { name: "Azul Seguros", logo: "https://logoeps.com/wp-content/uploads/2014/05/azul-vector-logo.png" },
    { name: "HDI Seguros", logo: "https://logoeps.com/wp-content/uploads/2013/03/hdi-seguros-vector-logo.png" },
    { name: "Zurich", logo: "https://logoeps.com/wp-content/uploads/2013/03/zurich-vector-logo.png" },
    { name: "SulAmérica", logo: "https://logoeps.com/wp-content/uploads/2013/03/sulamérica-vector-logo.png" },
    { name: "Mapfre", logo: "https://logoeps.com/wp-content/uploads/2013/03/mapfre-vector-logo.png" },
    { name: "Itaú Seguros", logo: "https://logoeps.com/wp-content/uploads/2014/05/itau-vector-logo.png" },
    { name: "Liberty Seguros", logo: "https://logoeps.com/wp-content/uploads/2013/03/liberty-seguros-vector-logo.png" },
    { name: "Tokio Marine", logo: "https://logoeps.com/wp-content/uploads/2013/03/tokio-marine-vector-logo.png" },
    { name: "Sompo Seguros", logo: "https://logoeps.com/wp-content/uploads/2013/03/sompo-seguros-vector-logo.png" },
  ];

  const trustStats = [
    { number: "50+", label: "Seguradoras Parceiras", icon: Shield, color: "from-blue-400 to-cyan-400" },
    { number: "24/7", label: "Atendimento", icon: Zap, color: "from-purple-400 to-pink-400" },
    { number: "100%", label: "Digital", icon: Award, color: "from-emerald-400 to-teal-400" },
    { number: "10k+", label: "Clientes Satisfeitos", icon: Users, color: "from-orange-400 to-red-400" },
  ];

  return (
    <section id="parceiros" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Parcerias Estratégicas
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
              Parceiros de Confiança
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Trabalhamos com as <span className="font-semibold text-blue-600">principais seguradoras</span> do Brasil 
              para oferecer as melhores opções de cobertura e preços competitivos.
            </p>
          </div>

          {/* Infinite Carousel - Full Width */}
          <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative overflow-hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
              {/* Single Row - Moving Right */}
              <div className="flex animate-scroll-right">
                {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-2 group"
                  >
                    <div className="w-56 h-32 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg transition-all duration-300 border border-slate-100/50 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-40 h-20 bg-gradient-to-r from-slate-100/50 to-slate-200/50 rounded-2xl mb-3 flex items-center justify-center">
                          <span className="text-sm font-medium text-slate-600">{partner.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100/50 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 border border-blue-300/30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 border border-purple-300/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-300/30 rounded-full"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <span className="text-lg font-semibold text-slate-700">Mais de 50 seguradoras parceiras</span>
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Encontre a Melhor Opção para Você
                </h3>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Com tantas opções disponíveis, nossa equipe especializada vai encontrar a cobertura perfeita 
                  para suas necessidades e orçamento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg group"
                    onClick={() => handleOpenModal("Comparativo de Seguradoras")}
                  >
                    Comparar Opções
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 px-10 py-4 rounded-xl font-semibold text-lg"
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
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-16.67%); }
        }
        
        .animate-scroll-right {
          animation: scroll-right 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;