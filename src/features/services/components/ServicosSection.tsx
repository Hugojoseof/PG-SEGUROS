import { useState, useEffect, useRef } from "react";
import { Button } from "@/shared/components/ui/button";
import { Car, Home, Heart, Building2, Phone, ArrowRight, User, Briefcase, Sparkles, Shield, Users, Zap, Target } from "lucide-react";
import QuoteModal from "@/features/quotes/components/QuoteModal";

const pessoal = [
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50"
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Tranquilidade para sua família e patrimônio.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50"
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Proteção financeira para quem você ama.",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50"
  },
  {
    icon: Shield,
    title: "Consórcio",
    description: "Realize seus sonhos de forma planejada.",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50"
  },
];

const empresarial = [
  {
    icon: Users,
    title: "Seguro de Vida Empresarial",
    description: "Proteção para colaboradores e sócios.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50"
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Proteção completa para seu negócio.",
    gradient: "from-slate-600 to-gray-700",
    bgGradient: "from-slate-50 to-gray-50"
  },
  {
    icon: Zap,
    title: "Plano de Saúde Empresarial",
    description: "Saúde e bem-estar para sua equipe.",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50"
  },
  {
    icon: Target,
    title: "Seguro Frota",
    description: "Proteção para toda a frota da empresa.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50"
  },
];

const ServicosSection = () => {
  const [activeCategory, setActiveCategory] = useState<'pessoal' | 'empresarial'>('pessoal');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const currentServices = activeCategory === 'pessoal' ? pessoal : empresarial;

  return (
    <section 
      ref={sectionRef}
      id="servicos" 
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-indigo-50/40"></div>
        
        {/* Floating elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-40 right-20 w-24 sm:w-32 h-24 sm:h-32 border border-blue-300/30 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 sm:w-24 h-16 sm:h-24 border border-purple-300/30 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-12 sm:w-16 h-12 sm:h-16 border border-indigo-300/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-xl">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Nossos Serviços
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Soluções <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">para você</span> e sua empresa
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              Escolha a categoria e conheça nossas soluções sob medida para proteger o que é mais importante.
            </p>
          </div>

          {/* Enhanced Category Toggle */}
          <div className={`flex justify-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-2xl border border-gray-200/50 flex animate-pulse-glow">
              <button
                onClick={() => setActiveCategory('pessoal')}
                className={`px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === 'pessoal'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105 animate-pulse-glow'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:scale-105'
                }`}
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 sm:mr-3" />
                Pessoal
              </button>
              <button
                onClick={() => setActiveCategory('empresarial')}
                className={`px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === 'empresarial'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105 animate-pulse-glow'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:scale-105'
                }`}
              >
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 sm:mr-3" />
                Empresarial
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
            {currentServices.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 border border-gray-200/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Service-specific background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6 sm:mb-8 flex justify-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${service.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed min-h-[40px] sm:min-h-[48px] text-sm sm:text-base lg:text-lg">
                    {service.description}
                  </p>
                  <Button
                    onClick={() => handleOpenModal(service.title)}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 group-hover:shadow-xl flex items-center justify-center transform group-hover:scale-105 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Solicitar Cotação
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 border border-white/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 sm:w-48 h-36 sm:h-48 border border-white/30 rounded-full"></div>
                <div className="absolute top-1/4 right-1/4 w-16 sm:w-20 h-16 sm:h-20 border border-white/30 rounded-full"></div>
              </div>
              <div className="relative">
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
                  Precisa de uma solução personalizada?
                </h3>
                <p className="text-sm sm:text-base lg:text-xl mb-4 sm:mb-6 lg:mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
                  Nossa equipe de especialistas está pronta para criar a proteção ideal para suas necessidades específicas.
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-600 px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    onClick={() => handleOpenModal("Solução Personalizada")}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                    Falar com Especialista
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3" />
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
        sectionId="servicos"
      />
    </section>
  );
};

export default ServicosSection;
