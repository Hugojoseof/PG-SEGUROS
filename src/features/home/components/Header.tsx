import { useState, useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import { Menu, X, Phone, ChevronDown, User, Building2 } from "lucide-react";
import TopBar from "@/shared/components/TopBar";
import DropdownMenu from "@/shared/components/DropdownMenu";

interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
  isMegaMenu?: boolean;
  megaMenuItems?: {
    title: string;
    icon: React.ReactNode;
    items: string[];
  }[];
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { 
      id: "inicio", 
      label: "Início",
      href: "#inicio"
    },
    { 
      id: "servicos", 
      label: "Serviços",
      href: "#servicos",
      hasDropdown: true,
      isMegaMenu: true,
      megaMenuItems: [
        {
          title: "Pessoal",
          icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />,
          items: [
            "Seguro Auto",
            "Consórcio",
            "Seguro de Vida",
            "Seguro Residencial"
          ]
        },
        {
          title: "Empresarial",
          icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />,
          items: [
            "Seguro de Vida Empresarial",
            "Seguro Empresarial",
            "Plano de Saúde Empresarial",
            "Seguro Frota"
          ]
        }
      ]
    },
    { 
      id: "quem-somos", 
      label: "Quem Somos",
      href: "#quem-somos"
    },
    { 
      id: "depoimentos", 
      label: "Depoimentos",
      href: "#depoimentos"
    },
    { 
      id: "contato", 
      label: "Contato",
      href: "#contato"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Detectar seção ativa
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const handleServiceSelect = (service: string) => {
    // Aqui você pode adicionar lógica específica para cada serviço
    console.log(`Serviço selecionado: ${service}`);
    
    // Exemplo: scroll para seção de serviços
    scrollToSection("servicos");
    setHoveredDropdown(null);
    setHoveredService(null);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5584998501948?text=Olá! Gostaria de fazer uma cotação de seguro.", "_blank");
  };

  const toggleMobileDropdown = (itemId: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemId ? null : itemId);
  };

  return (
    <>
      <TopBar />
      <header className={`bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/PG_LOGO.png" 
                alt="PG Seguros - Corretora de Seguros" 
                className="h-8 sm:h-10 lg:h-12 w-auto" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {navItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown(item.id)}
                  onMouseLeave={() => {
                    setHoveredDropdown(null);
                    setHoveredService(null);
                  }}
                >
                  <button
                    className={`font-medium transition-colors duration-200 flex items-center group text-sm xl:text-base ${
                      activeSection === item.id 
                        ? "text-primary border-b-2 border-primary" 
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => !item.hasDropdown && scrollToSection(item.id)}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-200 ${
                        hoveredDropdown === item.id ? "rotate-180" : ""
                      }`} />
                    )}
                  </button>
                  
                  {/* Mega Menu para Serviços */}
                  {item.isMegaMenu && hoveredDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1 w-[400px] xl:w-[500px] bg-white rounded-lg shadow-xl border border-gray-100 py-4 sm:py-6 z-50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-6">
                        {item.megaMenuItems?.map((category, index) => (
                          <div key={index} className="space-y-3 sm:space-y-4">
                            <div className="flex items-center space-x-2 sm:space-x-3 pb-2 sm:pb-3 border-b border-gray-100">
                              <div className="text-primary p-1 sm:p-1.5 bg-primary/10 rounded-lg">
                                {category.icon}
                              </div>
                              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                {category.title}
                              </h3>
                            </div>
                            <div className="space-y-1">
                              {category.items.map((service, serviceIndex) => (
                                <button
                                  key={serviceIndex}
                                  className={`w-full text-left text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-all duration-200 flex items-center group ${
                                    hoveredService === service
                                      ? "text-primary bg-primary/5 border-l-2 border-primary"
                                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                                  }`}
                                  onMouseEnter={() => setHoveredService(service)}
                                  onMouseLeave={() => setHoveredService(null)}
                                  onClick={() => handleServiceSelect(service)}
                                >
                                  <span className="flex-1">{service}</span>
                                  <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-colors duration-200 ${
                                    hoveredService === service 
                                      ? "bg-primary opacity-100" 
                                      : "bg-gray-300 opacity-0 group-hover:opacity-100"
                                  }`}></div>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 px-4 sm:px-6">
                        <button
                          className="w-full text-center text-xs sm:text-sm font-medium text-primary hover:text-primary/80 hover:bg-primary/5 py-2 sm:py-2.5 rounded-lg transition-all duration-200"
                          onClick={() => {
                            scrollToSection("servicos");
                            setHoveredDropdown(null);
                            setHoveredService(null);
                          }}
                        >
                          Ver todos os serviços →
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Dropdown Menu Normal */}
                  {item.hasDropdown && !item.isMegaMenu && (
                    <DropdownMenu 
                      items={item.dropdownItems || []}
                      isOpen={hoveredDropdown === item.id}
                      onClose={() => setHoveredDropdown(null)}
                    />
                  )}
                </div>
              ))}
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Button 
                className="bg-secondary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-200 shadow-md hover:shadow-lg text-sm xl:text-base"
                onClick={handleWhatsAppClick}
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden xl:inline">Faça sua Cotação</span>
                <span className="xl:hidden">Cotação</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-3 sm:mt-4 py-3 sm:py-4 bg-white rounded-lg shadow-lg border border-gray-100">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <button
                      className={`w-full text-left py-2.5 sm:py-3 px-3 sm:px-4 font-medium transition-colors duration-200 flex items-center justify-between rounded-lg text-sm sm:text-base ${
                        activeSection === item.id
                          ? "text-primary bg-primary/5"
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      }`}
                      onClick={() => {
                        if (item.hasDropdown) {
                          toggleMobileDropdown(item.id);
                        } else {
                          scrollToSection(item.id);
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
                          mobileDropdownOpen === item.id ? "rotate-180" : ""
                        }`} />
                      )}
                    </button>
                    
                    {/* Mobile Mega Menu para Serviços */}
                    {item.isMegaMenu && mobileDropdownOpen === item.id && (
                      <div className="ml-3 sm:ml-4 mt-2 sm:mt-3 space-y-4 sm:space-y-5">
                        {item.megaMenuItems?.map((category, index) => (
                          <div key={index} className="space-y-2 sm:space-y-3">
                            <div className="flex items-center space-x-2 sm:space-x-3 pb-1 sm:pb-2">
                              <div className="text-primary p-0.5 sm:p-1 bg-primary/10 rounded-lg">
                                {category.icon}
                              </div>
                              <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">
                                {category.title}
                              </h3>
                            </div>
                            <div className="ml-6 sm:ml-8 space-y-1 sm:space-y-2">
                              {category.items.map((service, serviceIndex) => (
                                <button
                                  key={serviceIndex}
                                  className="w-full text-left text-xs sm:text-sm text-gray-600 hover:text-primary hover:bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2.5 rounded-lg transition-all duration-200"
                                  onClick={() => {
                                    handleServiceSelect(service);
                                    setIsMobileMenuOpen(false);
                                    setMobileDropdownOpen(null);
                                  }}
                                >
                                  {service}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Mobile Dropdown Normal */}
                    {item.hasDropdown && !item.isMegaMenu && mobileDropdownOpen === item.id && (
                      <div className="ml-3 sm:ml-4 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <button
                            key={index}
                            className="w-full text-left py-2 sm:py-2.5 px-3 sm:px-4 text-xs sm:text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
                            onClick={() => {
                              scrollToSection(item.id);
                            }}
                          >
                            {dropdownItem}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile CTA */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                <Button 
                  className="w-full bg-secondary text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-200 shadow-md text-sm sm:text-base"
                  onClick={handleWhatsAppClick}
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Faça sua Cotação
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;