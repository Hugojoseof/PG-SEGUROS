import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/shared/layouts/MainLayout";
import { SERVICES, type ServiceItem } from "@/shared/constants/services";
import { Button } from "@/shared/components/ui/button";
import QuoteModal from "@/features/quotes/components/QuoteModal";
import PartnersSection from "@/features/home/sections/PartnersSection";
import ContatoSection from "@/features/home/sections/ContatoSection";
import { CheckCircle, ArrowRight } from "lucide-react";

const defaultHeroImage = "/placeholder.svg";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const service: (ServiceItem & { heroImage?: string }) | undefined = useMemo(() => {
    const found = SERVICES.find(s => s.key === slug);
    if (!found) return undefined;
    
    return {
      ...found,
    };
  }, [slug]);

  // Pré-carregar a imagem em um useEffect
  useEffect(() => {
    if (service?.heroImage) {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
        setImageError(false);
      };
      img.onerror = () => {
        setImageError(true);
        setImageLoaded(false);
      };
      img.src = service.heroImage;
    }
  }, [service?.heroImage]);

  if (!service) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center max-w-xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Serviço não encontrado</h1>
            <p className="text-slate-600">O serviço que você tentou acessar não existe. Volte à página inicial e escolha um dos serviços disponíveis.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  const openQuote = () => setIsModalOpen(true);

  // SEO dinâmico
  const pageTitle = service.seoTitle || `${service.title} | PG Seguros`;
  const pageDescription = service.seoDescription || service.description;

  document.title = pageTitle;
  const metaTagName = document.querySelector('meta[name="description"]');
  if (metaTagName) metaTagName.setAttribute('content', pageDescription);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', pageTitle);
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', pageDescription);

  return (
    <MainLayout>
      {/* Hero com background image */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${service.heroImage || defaultHeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Fallback se a imagem não carregar */}
        {!service.heroImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-blue-900/70" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-xs sm:text-sm border border-white/20 mb-4">
              <span>Seguro</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg group"
                onClick={openQuote}
              >
                Faça uma cotação
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Por que contratar o Seguro X */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">
              Por que contratar {service.title}?
            </h2>
            <p className="text-slate-600 text-sm sm:text-lg">
              Benefícios pensados para oferecer segurança, economia e tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              "Coberturas sob medida para seu perfil",
              "Atendimento e suporte em todo o Brasil",
              "Parcerias com as principais seguradoras",
              "Processo ágil de cotação e contratação",
              "Opções com excelente custo-benefício",
              "Assistência e acompanhamento em sinistros",
            ].map((reason, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <PartnersSection />

      {/* Contato e Cotação */}
      <ContatoSection />

      {/* Modal de Cotação */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={service.title}
        sectionId="inicio"
      />
    </MainLayout>
  );
};

export default ServicePage;


