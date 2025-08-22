import { useState, useEffect, useRef } from "react";
import { Button } from "@/shared/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import TopBar from "@/shared/components/TopBar";
import DropdownMenu from "@/shared/components/DropdownMenu";
import { SERVICES } from "@/shared/constants/services";

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
  const closeTimeoutRef = useRef<number | null>(null);

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
      dropdownItems: SERVICES.map(s => s.title)
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
      
      // Detectar seção ativa - Otimizado para evitar reflow
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Usar getBoundingClientRect para evitar reflow
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementHeight = rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
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
    // Se estiver em uma página de serviço, redirecionar para home + seção
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Se estiver na home, fazer scroll para a seção
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const handleServiceSelect = (service: string) => {
    const s = SERVICES.find(item => item.title === service);
    if (s) {
      window.location.href = `/servicos/${s.key}`;
    } else {
      scrollToSection("servicos");
    }
    setHoveredDropdown(null);
    setHoveredService(null);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5584998501948?text=Olá! Gostaria de fazer uma cotação de seguro.", "_blank");
  };

  const toggleMobileDropdown = (itemId: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemId ? null : itemId);
  };

  const openDropdown = (id: string) => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    setHoveredDropdown(id);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(() => {
      setHoveredDropdown(null);
      setHoveredService(null);
    }, 200);
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
            <div className="flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
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
                  onMouseEnter={() => openDropdown(item.id)}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <button
                    className={`font-medium transition-colors duration-200 flex items-center group text-sm xl:text-base ${
                      activeSection === item.id 
                        ? "text-primary border-b-2 border-primary" 
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => {
                      if (item.hasDropdown) {
                        hoveredDropdown === item.id ? setHoveredDropdown(null) : setHoveredDropdown(item.id);
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-200 ${
                        hoveredDropdown === item.id ? "rotate-180" : ""
                      }`} />
                    )}
                  </button>
                  
                  {/* Dropdown Menu para Serviços */}
                  {item.hasDropdown && hoveredDropdown === item.id && (
                    <div onMouseEnter={() => openDropdown(item.id)} onMouseLeave={scheduleCloseDropdown}>
                      <DropdownMenu 
                        items={item.dropdownItems || []}
                        isOpen={hoveredDropdown === item.id}
                        onClose={() => setHoveredDropdown(null)}
                        onItemSelect={handleServiceSelect}
                      />
                    </div>
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
                    
                    {/* Mobile Dropdown para Serviços */}
                    {item.hasDropdown && mobileDropdownOpen === item.id && (
                      <div className="ml-3 sm:ml-4 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                        {item.dropdownItems?.map((service, index) => (
                          <button
                            key={index}
                            className="w-full text-left py-2 sm:py-2.5 px-3 sm:px-4 text-xs sm:text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
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