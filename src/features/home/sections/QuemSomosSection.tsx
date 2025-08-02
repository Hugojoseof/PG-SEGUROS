import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Users, Target, Heart, Shield, Award, TrendingUp, ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import QuoteModal from "@/features/quotes/components/QuoteModal";

const QuemSomosSection = () => {
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

    const element = document.getElementById("quem-somos");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "25+", label: "Anos de Experiência", icon: Award },
    { number: "1000+", label: "Clientes Atendidos", icon: Users },
    { number: "100%", label: "Satisfação", icon: Heart },
    { number: "24/7", label: "Suporte", icon: Shield },
  ];

  const values = [
    {
      icon: Heart,
      title: "Confiança Total",
      description: "Construímos relacionamentos duradouros baseados na transparência e honestidade absoluta.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Sempre claros sobre coberturas, valores e condições. Sem surpresas, apenas segurança.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Focamos em entregar valor real e proteção efetiva para o que mais importa na sua vida.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const handleOpenModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section id="quem-somos" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-indigo-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-indigo-400/35 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Hero Section */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in-scale">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              Mais de 25 anos protegendo sonhos
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-4 sm:mb-6">
              Quem Somos
            </h2>
            <p className="text-base sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
              Somos uma corretora especializada em transformar complexidade em simplicidade. 
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Protegemos o que mais importa</span> com tecnologia e humanidade.
            </p>
          </div>

          {/* Enhanced Stats Section */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-scale" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
            {/* Left Column - Story */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Nossa História
                </h3>
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg text-slate-600 leading-relaxed">
                  <p>
                    Fundada em 2008, a <span className="font-semibold text-blue-600">PG Seguros</span> nasceu com uma missão clara: 
                    <span className="font-semibold"> simplificar o mundo dos seguros</span> e tornar a proteção acessível a todos.
                  </p>
                  <p>
                    Ao longo de 15 anos, construímos parcerias sólidas com as principais seguradoras do mercado, 
                    sempre priorizando as melhores condições e preços para nossos clientes.
                  </p>
                  <p>
                    Hoje, somos referência em atendimento personalizado, oferecendo soluções completas em 
                    seguros para pessoas físicas e jurídicas em todo o Brasil.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base group"
                  onClick={() => handleOpenModal("Orçamento Personalizado")}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-blue-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base group">
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Conheça Nossa História
                </Button>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl" />
                <div className="relative bg-gradient-to-br from-slate-100 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Equipe PG Seguros"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm sm:text-base">Proteção Garantida</div>
                        <div className="text-xs sm:text-sm text-slate-600">Mais de 10.000 vidas protegidas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                Nossos Valores
              </h3>
              <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                Princípios que guiam cada decisão e cada atendimento que realizamos
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardContent className="p-6 sm:p-8 relative">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {value.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-lg">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-blue-100/50">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                Pronto para Proteger o que Importa?
              </h3>
              <p className="text-sm sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Entre em contato conosco e descubra como podemos proteger você e sua família com as melhores soluções do mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg group"
                  onClick={() => handleOpenModal("Falar com Especialista")}
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg">
                  Ver Todos os Seguros
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
              <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedService={selectedService} sectionId="quem-somos" />
    </section>
  );
};

export default QuemSomosSection;