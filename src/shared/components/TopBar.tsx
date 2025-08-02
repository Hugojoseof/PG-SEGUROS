import { Phone, Clock, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-white text-xs py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center hover:text-secondary transition-colors duration-200 cursor-pointer">
            <Phone className="w-3 h-3 mr-1.5" />
            (84) 99999-9999
          </span>
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1.5" />
            Atendimento 24h
          </span>
          <span className="flex items-center">
            <MapPin className="w-3 h-3 mr-1.5" />
            São Miguel, RN
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="flex items-center hover:text-secondary transition-colors duration-200 cursor-pointer">
            <Mail className="w-3 h-3 mr-1.5" />
            contato@pgseguros.com.br
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 