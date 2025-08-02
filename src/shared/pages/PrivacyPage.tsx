import { ArrowLeft, Shield, Lock, Eye, Database, Users, Mail, Phone, MessageCircle, Instagram, CheckCircle, AlertTriangle, Clock, Key, FileText } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';

const PrivacyPage = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const contactItems = [
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Email",
      value: "privacidade@pgseguros.com",
      action: () => window.open("mailto:privacidade@pgseguros.com", "_blank")
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

  const dataTypes = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dados Pessoais",
      items: ["Nome completo", "Email", "Telefone", "Endereço", "CPF/CNPJ"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Dados de Navegação",
      items: ["IP do dispositivo", "Cookies", "Histórico de páginas", "Tempo de permanência"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Dados de Seguro",
      items: ["Informações do veículo", "Histórico de sinistros", "Coberturas contratadas"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const rights = [
    "Acessar seus dados pessoais",
    "Corrigir informações incorretas",
    "Excluir dados desnecessários",
    "Portabilidade dos dados",
    "Revogar consentimento",
    "Solicitar explicações sobre o uso"
  ];

  const securityMeasures = [
    "Criptografia de dados em trânsito e em repouso",
    "Controle de acesso rigoroso",
    "Monitoramento contínuo de segurança",
    "Backup regular e seguro",
    "Treinamento da equipe em proteção de dados",
    "Auditorias regulares de segurança"
  ];

  const dataUses = [
    "Fornecer cotações de seguro personalizadas",
    "Processar solicitações e contratos",
    "Enviar comunicações sobre nossos serviços",
    "Melhorar a experiência do usuário",
    "Cumprir obrigações legais",
    "Prevenir fraudes e garantir segurança"
  ];

  const sharingCases = [
    "Com seguradoras parceiras para processamento de cotações e contratos",
    "Com prestadores de serviços que nos auxiliam (sempre com contratos de proteção)",
    "Quando exigido por lei ou ordem judicial",
    "Com seu consentimento explícito"
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
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Política de Privacidade
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              PG Seguros - Compromisso com a proteção de seus dados
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 -mt-8 sm:-mt-12 lg:-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 xl:p-16">
            
            {/* Introduction */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <Shield className="w-8 h-8 mr-4 text-blue-600" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Nosso Compromisso com a Privacidade</h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  A PG Seguros valoriza e respeita sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Estamos comprometidos em proteger seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis.
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <Database className="w-8 h-8 mr-4 text-blue-600" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Dados que Coletamos</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Coletamos apenas os dados necessários para fornecer nossos serviços e melhorar sua experiência:
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {dataTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center text-white mr-3 sm:mr-4`}>
                        {type.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{type.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {type.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700 text-sm sm:text-base">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Use Data */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <Eye className="w-8 h-8 mr-4 text-blue-600" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Como Usamos seus Dados</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {dataUses.map((use, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 bg-blue-50 rounded-xl sm:rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm sm:text-base">{use}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Proteção de Dados</h3>
                </div>
                <p className="text-green-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Implementamos medidas rigorosas de segurança para proteger suas informações:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  {securityMeasures.map((measure, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-green-100 text-sm sm:text-base">{measure}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <Users className="w-8 h-8 mr-4 text-blue-600" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Seus Direitos</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Conforme a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 bg-purple-50 rounded-xl sm:rounded-2xl border border-purple-200 hover:border-purple-300 transition-all duration-300">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{right}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <Shield className="w-8 h-8 mr-4 text-blue-600" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Compartilhamento de Dados</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto:
              </p>
              <div className="space-y-3 sm:space-y-4">
                {sharingCases.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 bg-orange-50 rounded-xl sm:rounded-2xl border border-orange-100">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <Mail className="w-8 h-8 mr-4 text-blue-600" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Contato sobre Privacidade</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {contactItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="group relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-500 text-left overflow-hidden min-h-[200px] sm:min-h-[220px]"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-2 sm:mb-3">
                        <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide group-hover:text-purple-600 transition-colors duration-300">
                          {item.label}
                        </p>
                      </div>
                      <div className="mb-3 sm:mb-4 flex-1">
                        <p className="text-gray-900 font-bold text-sm sm:text-base group-hover:text-purple-700 transition-colors duration-300 break-all leading-tight">
                          {item.value}
                        </p>
                      </div>
                      
                      {/* Action Indicator */}
                      <div className="flex items-center text-purple-600 group-hover:text-purple-700 transition-colors duration-300 mt-auto">
                        <span className="text-xs sm:text-sm font-medium">Clique para contatar</span>
                        <div className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-purple-300/50 transition-all duration-500"></div>
                  </button>
                ))}
              </div>

              {/* Additional Privacy Contact Info */}
              <div className="mt-8 sm:mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-purple-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-4 sm:mb-6">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Exercer seus Direitos LGPD
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
                    Para solicitar acesso, correção, exclusão ou portabilidade dos seus dados pessoais, entre em contato conosco através dos canais abaixo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button
                      onClick={() => window.open("https://wa.me/5584998501948?text=Olá! Gostaria de exercer meus direitos LGPD sobre meus dados pessoais.", "_blank")}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      WhatsApp Rápido
                    </button>
                    <button
                      onClick={() => window.open("mailto:privacidade@pgseguros.com?subject=Solicitação de Direitos LGPD", "_blank")}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Email Formal
                    </button>
                  </div>
                </div>
              </div>

              {/* Privacy Rights Quick Guide */}
              <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 sm:mb-6">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Guia Rápido - Seus Direitos
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
                    Conheça seus principais direitos conforme a Lei Geral de Proteção de Dados (LGPD):
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { title: "Acesso", desc: "Solicitar informações sobre seus dados", icon: <Eye className="w-5 h-5" /> },
                    { title: "Correção", desc: "Atualizar dados incorretos ou incompletos", icon: <CheckCircle className="w-5 h-5" /> },
                    { title: "Exclusão", desc: "Remover dados desnecessários", icon: <AlertTriangle className="w-5 h-5" /> },
                    { title: "Portabilidade", desc: "Transferir dados para outro serviço", icon: <Database className="w-5 h-5" /> },
                    { title: "Revogação", desc: "Cancelar consentimento dado", icon: <Lock className="w-5 h-5" /> },
                    { title: "Oposição", desc: "Contestar o uso de dados", icon: <Shield className="w-5 h-5" /> }
                  ].map((right, index) => (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {right.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{right.title}</h4>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <FileText className="w-8 h-8 mr-4 text-blue-600" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Atualizações da Política</h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                Esta política pode ser atualizada periodicamente. Alterações significativas serão comunicadas através de nosso site ou email. Recomendamos revisar esta política regularmente.
              </p>
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
                  <Key className="w-4 h-4 text-blue-600" />
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

export default PrivacyPage; 