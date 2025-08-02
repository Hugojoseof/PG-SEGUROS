import { ArrowLeft, Mail, Phone, MessageCircle, Instagram, Shield, CheckCircle, AlertTriangle, Clock, Users } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';

const TermsPage = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const contactItems = [
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Email",
      value: "suporte@pgseguros.com",
      action: () => window.open("mailto:suporte@pgseguros.com", "_blank")
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Telefone",
      value: "(84) 99850-1948",
      action: () => window.open("https://wa.me/5584998501948", "_blank")
    },
    {
      icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "WhatsApp",
      value: "(84) 99850-1948",
      action: () => window.open("https://wa.me/5584998501948", "_blank")
    },
    {
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Instagram",
      value: "@pg.seguros",
      action: () => window.open("https://www.instagram.com/pg.seguros", "_blank")
    }
  ];

  const services = [
    "Consultoria em Seguros: Orientação especializada sobre produtos de seguro personalizados",
    "Comparação de Preços: Análise detalhada de diferentes opções de seguro do mercado",
    "Conteúdo Educativo: Informações atualizadas sobre seguros através do Instagram",
    "Suporte ao Cliente: Atendimento personalizado e acompanhamento completo",
    "Gestão de Sinistros: Suporte especializado em caso de ocorrências"
  ];

  const prohibitedUses = [
    "Usar os serviços para atividades ilegais ou fraudulentas",
    "Tentar acessar sistemas, redes ou dados sem autorização",
    "Interferir no funcionamento normal do site ou serviços",
    "Transmitir vírus, malware ou código malicioso",
    "Usar bots, scripts automatizados ou técnicas de scraping",
    "Violar direitos autorais ou propriedade intelectual",
    "Enviar spam ou conteúdo inadequado"
  ];

  const pricingPolicies = [
    { title: "Consultas Iniciais", desc: "Totalmente gratuitas e sem compromisso", icon: <CheckCircle className="w-5 h-5" /> },
    { title: "Serviços Especializados", desc: "Podem ter taxas específicas, sempre informadas previamente", icon: <Shield className="w-5 h-5" /> },
    { title: "Transparência", desc: "Todos os preços são comunicados de forma clara e objetiva", icon: <CheckCircle className="w-5 h-5" /> },
    { title: "Métodos de Pagamento", desc: "Aceitamos diversos formatos para sua conveniência", icon: <CheckCircle className="w-5 h-5" /> },
    { title: "Sem Taxas Ocultas", desc: "Compromisso com a transparência total", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Back Button */}
      <Button
        onClick={handleBackToHome}
        className="fixed top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 hover:bg-white text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">Voltar para Home</span>
        <span className="sm:hidden">Voltar</span>
      </Button>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 mx-auto">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Termos de Serviço
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              PG Seguros - Condições de uso transparentes e seguras
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 -mt-8 sm:-mt-12 lg:-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 xl:p-16">
            
            {/* Acceptance Section */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-1 h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-3 sm:mr-4"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Aceitação dos Termos</h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Ao acessar e utilizar o site da PG Seguros, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Estes termos constituem um acordo legal entre você e a PG Seguros, estabelecendo as condições para o uso de nossos serviços e plataforma digital.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-1 h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-3 sm:mr-4"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Descrição dos Serviços</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                A PG Seguros oferece uma ampla gama de serviços especializados em seguros:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm sm:text-base">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Acceptable Use */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-1 h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-red-600 to-pink-600 rounded-full mr-3 sm:mr-4"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Uso Aceitável</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos. É estritamente proibido:
              </p>
              <div className="space-y-3 sm:space-y-4">
                {prohibitedUses.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 bg-red-50 rounded-xl sm:rounded-2xl border border-red-100">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram Integration */}
            <div className="mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Integração com Instagram</h3>
                </div>
                <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Nosso site integra com o Instagram para exibir conteúdo público e manter você informado sobre novidades do mercado de seguros. Ao usar nossos serviços, você concorda que:
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "O conteúdo do Instagram é de responsabilidade dos respectivos autores e criadores",
                    "Respeitamos integralmente os direitos autorais e marcas registradas",
                    "Não nos responsabilizamos pelo conteúdo gerado por terceiros",
                    "Nos reservamos o direito de remover conteúdo inadequado quando identificado"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-blue-100 text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Policy */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-1 h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full mr-3 sm:mr-4"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Política de Preços e Pagamentos</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Nossos serviços seguem uma política de transparência total:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {pricingPolicies.map((item, index) => (
                  <div key={index} className="p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl hover:border-green-300 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="text-green-600 mt-0.5">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-green-800 text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h4>
                        <p className="text-green-700 text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-1 h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-3 sm:mr-4"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Suporte e Contato</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Nossa equipe está sempre disponível para ajudar. Entre em contato conosco através dos canais abaixo:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {contactItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 text-left overflow-hidden min-h-[200px] sm:min-h-[220px]"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-2 sm:mb-3">
                        <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                          {item.label}
                        </p>
                      </div>
                      <div className="mb-3 sm:mb-4 flex-1">
                        <p className="text-gray-900 font-bold text-sm sm:text-base group-hover:text-blue-700 transition-colors duration-300 break-all leading-tight">
                          {item.value}
                        </p>
                      </div>
                      
                      {/* Action Indicator */}
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mt-auto">
                        <span className="text-xs sm:text-sm font-medium">Clique para contatar</span>
                        <div className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-500"></div>
                  </button>
                ))}
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 sm:mb-6">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Atendimento Prioritário
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
                    Para questões urgentes sobre nossos termos de serviço, recomendamos o contato via WhatsApp para resposta mais rápida.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button
                      onClick={() => window.open("https://wa.me/5584998501948?text=Olá! Tenho uma dúvida sobre os termos de serviço da PG Seguros.", "_blank")}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      WhatsApp Rápido
                    </button>
                    <button
                      onClick={() => window.open("mailto:suporte@pgseguros.com?subject=Dúvida sobre Termos de Serviço", "_blank")}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Email Detalhado
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="border-t border-gray-200 pt-6 sm:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1"><strong>Data de vigência:</strong></p>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Janeiro de 2025</p>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1"><strong>Última atualização:</strong></p>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Janeiro de 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage; 