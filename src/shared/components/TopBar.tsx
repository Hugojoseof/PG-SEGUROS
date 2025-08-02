import { Phone, Clock, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-white text-xs py-1.5 sm:py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
        <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-3 sm:space-x-4 lg:space-x-6">
          <span className="flex items-center hover:text-secondary transition-colors duration-200 cursor-pointer text-xs sm:text-sm">
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
            <span className="hidden sm:inline">+55 84 99850-1948</span>
            <span className="sm:hidden">(84) 99850-1948</span>
          </span>
          <span className="flex items-center text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
            <span className="hidden sm:inline">Atendimento 24h</span>
            <span className="sm:hidden">24h</span>
          </span>
          <span className="flex items-center text-xs sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
            <span className="hidden lg:inline">São Miguel, RN</span>
            <span className="lg:hidden">São Miguel</span>
          </span>
        </div>
        <div className="flex items-center justify-center sm:justify-end space-x-3 sm:space-x-4 lg:space-x-6">
          <span className="flex items-center hover:text-secondary transition-colors duration-200 cursor-pointer text-xs sm:text-sm">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
            <span className="hidden md:inline">contato@pgseguros.com.br</span>
            <span className="md:hidden">contato@pgseguros.com.br</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 