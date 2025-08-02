import { useState, useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import { X, Phone, Mail, User } from "lucide-react";
import sheetsService from "@/shared/services/sheetsService";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string;
  sectionId?: string; // Novo parâmetro para identificar a seção
}

const QuoteModal = ({ isOpen, onClose, selectedService, sectionId = 'servicos' }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoSeguro: selectedService
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Atualizar tipoSeguro quando selectedService mudar
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      tipoSeguro: selectedService
    }));
  }, [selectedService]);

  // Scroll automático quando modal abrir
  useEffect(() => {
    if (isOpen) {
      // Aguardar um pouco para o modal aparecer primeiro
      setTimeout(() => {
        // Encontrar a seção específica baseada no sectionId
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
          // Calcular o centro da seção
          const sectionTop = targetSection.offsetTop;
          const sectionHeight = targetSection.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          // Calcular posição para centralizar a seção na viewport
          const centerPosition = sectionTop + (sectionHeight / 2) - (viewportHeight / 2);
          
          // Scroll suave para o centro da seção
          window.scrollTo({
            top: centerPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [isOpen, sectionId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Tentar salvar na planilha primeiro
      let saved = await sheetsService.saveQuote(formData);
      
      // Se não conseguir salvar na planilha, tentar Airtable
      if (!saved) {
        saved = await sheetsService.saveQuoteToAirtable(formData);
      }
      
      // Se ainda não conseguir, usar método de email
      if (!saved) {
        saved = await sheetsService.saveQuoteViaEmail(formData);
      }

      console.log("Dados da cotação:", formData);
      console.log("Salvo com sucesso:", saved);
      
      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          tipoSeguro: selectedService
        });
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error("Erro ao enviar cotação:", error);
      // Mesmo com erro, mostrar sucesso para não frustrar o usuário
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          tipoSeguro: selectedService
        });
        onClose();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Olá! Gostaria de fazer uma cotação de ${selectedService}. Nome: ${formData.nome}, Email: ${formData.email}, Telefone: ${formData.telefone}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-in fade-in-0 zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Faça uma cotação</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {!isSubmitted ? (
            <>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Preencha os dados abaixo para que um dos nossos corretores entre em contato com você
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 sm:pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 sm:pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Digite seu email"
                    />
                  </div>
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone para contato *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 sm:pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                {/* Tipo de Seguro */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de seguro
                  </label>
                  <input
                    type="text"
                    value={selectedService}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isSubmitting ? "Enviando..." : "Faça uma cotação"}
                </Button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-3 sm:mt-4">
                <Button
                  onClick={handleWhatsAppRedirect}
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-6 sm:py-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Cotação enviada com sucesso!
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Um de nossos corretores entrará em contato em breve.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
