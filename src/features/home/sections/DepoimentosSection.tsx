import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Star, Quote, ArrowRight, Users, Award, CheckCircle, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import QuoteModal from "@/features/quotes/components/QuoteModal";

const DepoimentosSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("depoimentos");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "Excelente atendimento! A equipe da PG Seguros me ajudou a encontrar o seguro auto perfeito para meu orçamento. Recomendo muito!",
      rating: 5,
      service: "Seguro Auto",
      avatar: "MS",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      text: "Profissionais muito competentes. Tive um sinistro em casa e eles me deram todo o suporte necessário. Processo foi rápido e eficiente.",
      rating: 5,
      service: "Seguro Residencial",
      avatar: "JS",
      color: "from-purple-500 to-pink-500",
      delay: "100ms"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      text: "Fiz meu seguro de vida com eles e o atendimento foi excepcional. Explicaram tudo detalhadamente e encontraram a melhor opção para minha família.",
      rating: 5,
      service: "Seguro de Vida",
      avatar: "AC",
      color: "from-emerald-500 to-teal-500",
      delay: "200ms"
    },
    {
      name: "Carlos Oliveira",
      location: "Curitiba, PR",
      text: "Incrível como eles simplificaram todo o processo. Em menos de 24h tinha meu seguro aprovado. Atendimento humanizado e eficiente!",
      rating: 5,
      service: "Seguro Empresarial",
      avatar: "CO",
      color: "from-orange-500 to-red-500",
      delay: "300ms"
    },
    {
      name: "Fernanda Lima",
      location: "Salvador, BA",
      text: "Depois de anos com outras corretoras, finalmente encontrei uma que realmente se importa com o cliente. PG Seguros é diferente!",
      rating: 5,
      service: "Plano de Saúde",
      avatar: "FL",
      color: "from-indigo-500 to-blue-500",
      delay: "400ms"
    },
    {
      name: "Roberto Almeida",
      location: "Porto Alegre, RS",
      text: "Transparência total desde o início. Sem surpresas, sem letras miúdas. Eles realmente entregam o que prometem. Recomendo!",
      rating: 5,
      service: "Seguro Auto",
      avatar: "RA",
      color: "from-rose-500 to-pink-500",
      delay: "500ms"
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const totalSlides = Math.ceil(testimonials.length / 3);
  const startIndex = currentSlide * 3;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section id="depoimentos" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Depoimentos Reais
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A <span className="font-semibold text-blue-600">satisfação dos nossos clientes</span> é nossa maior conquista. 
              Veja alguns depoimentos de quem já confia na PG Seguros.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className={`mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Carousel Container */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {visibleTestimonials.map((testimonial, index) => (
                  <Card 
                    key={startIndex + index} 
                    className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <CardContent className="p-8 relative">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-10">
                        <Quote className="w-12 h-12 text-slate-400" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Service Tag */}
                      <div className={`inline-block bg-gradient-to-r ${testimonial.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg`}>
                        {testimonial.service}
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-slate-600 mb-6 leading-relaxed text-lg italic">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                        <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-slate-500">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="sm"
                  className="w-12 h-12 rounded-full border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </Button>
                
                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="sm"
                  className="w-12 h-12 rounded-full border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </Button>
              </div>
            </div>
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
              
              <div className="relative text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold text-white">5/5 - Avaliação dos Clientes</span>
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Mais de 1000 clientes satisfeitos
                </h3>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Nossa maior conquista é a confiança e satisfação dos nossos clientes. 
                  Cada depoimento é uma prova do nosso compromisso com a excelência.
                </p>
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">1000+</div>
                    <div className="text-white/90">Clientes Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-white/90">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">24h</div>
                    <div className="text-white/90">Atendimento</div>
                  </div>
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
                  <span className="text-lg font-semibold text-slate-700">Junte-se aos nossos clientes satisfeitos</span>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Quer Fazer Parte Dessa História?
                </h3>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Venha conhecer por que mais de 1000 pessoas escolheram a PG Seguros 
                  para proteger o que mais importa em suas vidas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg group"
                    onClick={() => handleOpenModal("Consultoria Gratuita")}
                  >
                    Falar com Especialista
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
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
        sectionId="depoimentos"
      />
    </section>
  );
};

export default DepoimentosSection;