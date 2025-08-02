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
    <section id="quem-somos" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Mais de 25 anos protegendo sonhos
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
              Quem Somos
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Somos uma corretora especializada em transformar complexidade em simplicidade. 
              <span className="font-semibold text-blue-600"> Protegemos o que mais importa</span> com tecnologia e humanidade.
            </p>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left Column - Story */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Nossa História
                </h3>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
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
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold group"
                  onClick={() => handleOpenModal("Orçamento Personalizado")}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-blue-300 text-slate-700 px-8 py-4 rounded-xl font-semibold group">
                  <Play className="mr-2 w-5 h-5" />
                  Conheça Nossa História
                </Button>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-gradient-to-br from-slate-100 to-white rounded-3xl p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Equipe PG Seguros"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Proteção Garantida</div>
                        <div className="text-sm text-slate-600">Mais de 10.000 vidas protegidas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Nossos Valores
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Princípios que guiam cada decisão e cada atendimento que realizamos
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardContent className="p-8 relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {value.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100/50">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pronto para Proteger o que Importa?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos proteger você e sua família com as melhores soluções do mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg group"
                  onClick={() => handleOpenModal("Falar com Especialista")}
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 px-10 py-4 rounded-xl font-semibold text-lg">
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