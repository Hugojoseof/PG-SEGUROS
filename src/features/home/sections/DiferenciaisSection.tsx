import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Users, Search, Shield, Clock, Award, Headphones, ArrowRight, Star, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import QuoteModal from "@/features/quotes/components/QuoteModal";

const DiferenciaisSection = () => {
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

    const element = document.getElementById("diferenciais");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const diferenciais = [
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Nossa equipe especializada oferece atendimento personalizado, entendendo suas necessidades específicas.",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Search,
      title: "Análise Personalizada",
      description: "Analisamos seu perfil e necessidades para encontrar a melhor opção de seguro com o melhor custo-benefício.",
      color: "from-purple-500 to-pink-500",
      delay: "100ms"
    },
    {
      icon: Shield,
      title: "Variedade de Seguradoras",
      description: "Acesso a mais de 50 seguradoras parceiras para garantir sempre a melhor opção para você.",
      color: "from-emerald-500 to-teal-500",
      delay: "200ms"
    },
    {
      icon: Clock,
      title: "Agilidade na Contratação",
      description: "Processo rápido e eficiente, com aprovação em até 24 horas para a maioria dos produtos.",
      color: "from-orange-500 to-red-500",
      delay: "300ms"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 25 anos no mercado de seguros, com milhares de clientes satisfeitos em todo o Brasil.",
      color: "from-indigo-500 to-blue-500",
      delay: "400ms"
    },
    {
      icon: Headphones,
      title: "Suporte Completo",
      description: "Acompanhamento durante toda vigência da apólice, incluindo assistência em sinistros.",
      color: "from-rose-500 to-pink-500",
      delay: "500ms"
    },
  ];

  const stats = [
    { number: "25+", label: "Anos de Experiência", icon: Award },
    { number: "50+", label: "Seguradoras Parceiras", icon: Shield },
    { number: "1000+", label: "Clientes Atendidos", icon: Users },
    { number: "100%", label: "Satisfação", icon: Star },
  ];

  return (
    <section id="diferenciais" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Diferenciais Exclusivos
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
              Por que escolher a PG Seguros?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Nossa missão é <span className="font-semibold text-blue-600">simplificar o mundo dos seguros</span>, 
              oferecendo soluções personalizadas com o melhor atendimento do mercado.
            </p>
          </div>

          {/* Diferenciais Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {diferenciais.map((diferencial, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: diferencial.delay }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${diferencial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <CardContent className="p-8 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${diferencial.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <diferencial.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {diferencial.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {diferencial.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/30 rounded-full"></div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {stats.map((stat, index) => (
                    <div key={index} className="group">
                      <div className="relative">
                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <stat.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-white/90 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-semibold text-slate-700">Mais de 1000 clientes já confiaram em nós</span>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Pronto para Experimentar a Diferença?
                </h3>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Junte-se aos milhares de clientes que já descobriram como é ter uma corretora 
                  que realmente se importa com suas necessidades.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg group"
                    onClick={() => handleOpenModal("Consultoria Personalizada")}
                  >
                    Falar com Especialista
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 px-10 py-4 rounded-xl font-semibold text-lg"
                    onClick={() => handleOpenModal("Comparativo de Seguros")}
                  >
                    Comparar Seguros
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
        sectionId="diferenciais"
      />
    </section>
  );
};

export default DiferenciaisSection;