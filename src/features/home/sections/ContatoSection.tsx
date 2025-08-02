import { useState, useEffect } from "react";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, ArrowRight, Star, CheckCircle, Users } from "lucide-react";
import { useToast } from "@/shared/hooks/use-toast";
import sheetsService from "@/shared/services/sheetsService";

const ContatoSection = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipoSeguro: "",
    mensagem: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contato");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.nome || !formData.telefone || !formData.tipoSeguro) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Tentar salvar na planilha primeiro
      let saved = await sheetsService.saveQuote({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        tipoSeguro: formData.tipoSeguro,
        mensagem: formData.mensagem || "Gostaria de receber uma cotação personalizada."
      });
      
      console.log("Resultado do Google Sheets:", saved);
      
      // Se não conseguir salvar na planilha, tentar Airtable
      if (!saved) {
        console.log("Tentando Airtable...");
        saved = await sheetsService.saveQuoteToAirtable({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          tipoSeguro: formData.tipoSeguro,
          mensagem: formData.mensagem || "Gostaria de receber uma cotação personalizada."
        });
        console.log("Resultado do Airtable:", saved);
      }
      
      // Se ainda não conseguir, usar método de email
      if (!saved) {
        console.log("Tentando email...");
        saved = await sheetsService.saveQuoteViaEmail({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          tipoSeguro: formData.tipoSeguro,
          mensagem: formData.mensagem || "Gostaria de receber uma cotação personalizada."
        });
        console.log("Resultado do email:", saved);
      }

      console.log("Dados do formulário:", formData);
      console.log("Salvo com sucesso:", saved);
      
      if (saved) {
        // Simular delay de envio
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve para fornecer sua cotação personalizada.",
        });
      } else {
        throw new Error("Falha ao salvar em todos os métodos");
      }

      // Reset form
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        tipoSeguro: "",
        mensagem: "",
      });
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      subtitle: "Ligue agora",
      action: () => window.open("tel:+5511999999999"),
      color: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@pgseguros.com.br",
      subtitle: "Envie um email",
      action: () => window.open("mailto:contato@pgseguros.com.br"),
      color: "from-purple-500 to-pink-500",
      delay: "100ms"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "São Paulo, SP - Brasil",
      subtitle: "Nossa localização",
      action: () => window.open("https://maps.google.com/?q=São+Paulo,+SP"),
      color: "from-emerald-500 to-teal-500",
      delay: "200ms"
    },
  ];

  const trustFactors = [
    { icon: Star, text: "Atendimento 24/7", color: "from-yellow-500 to-orange-500" },
    { icon: CheckCircle, text: "Resposta em até 1h", color: "from-green-500 to-emerald-500" },
    { icon: Users, text: "1000+ clientes atendidos", color: "from-blue-500 to-purple-500" },
  ];

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Estamos prontos para ajudar você a encontrar a <span className="font-semibold text-blue-600">proteção ideal</span>. 
              Entre em contato conosco e receba uma cotação personalizada.
            </p>
          </div>

          {/* Trust Factors */}
          <div className={`flex justify-center gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {trustFactors.map((factor, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-slate-200/50">
                <div className={`w-8 h-8 bg-gradient-to-br ${factor.color} rounded-full flex items-center justify-center`}>
                  <factor.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">{factor.text}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Solicite sua Cotação
                      </h3>
                      <p className="text-slate-600">Preencha o formulário e entraremos em contato</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-slate-700 font-medium">Nome Completo *</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        placeholder="Seu nome completo"
                        className="border-2 border-slate-200 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-slate-700 font-medium">Telefone *</Label>
                        <Input
                          id="telefone"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange("telefone", e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="border-2 border-slate-200 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="seu@email.com"
                          className="border-2 border-slate-200 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipoSeguro" className="text-slate-700 font-medium">Tipo de Seguro *</Label>
                      <Select
                        value={formData.tipoSeguro}
                        onValueChange={(value) => handleInputChange("tipoSeguro", value)}
                      >
                        <SelectTrigger className="border-2 border-slate-200 focus:border-blue-500 transition-colors">
                          <SelectValue placeholder="Selecione o tipo de seguro" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Seguro Auto</SelectItem>
                          <SelectItem value="residencial">Seguro Residencial</SelectItem>
                          <SelectItem value="vida">Seguro de Vida</SelectItem>
                          <SelectItem value="empresarial">Seguro Empresarial</SelectItem>
                          <SelectItem value="consorcio">Consórcio</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-slate-700 font-medium">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange("mensagem", e.target.value)}
                        placeholder="Conte-nos mais sobre suas necessidades..."
                        rows={4}
                        className="border-2 border-slate-200 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <Card
                      key={index}
                      className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer bg-white/95 backdrop-blur-sm"
                      onClick={contact.action}
                      style={{ transitionDelay: contact.delay }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <contact.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 text-lg">{contact.title}</h4>
                            <p className="text-slate-600 font-medium">{contact.info}</p>
                            <p className="text-sm text-slate-500">{contact.subtitle}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Card className="border-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    Prefere falar via WhatsApp?
                  </h4>
                  <p className="mb-8 text-lg opacity-90">
                    Entre em contato direto conosco pelo WhatsApp para um atendimento mais rápido e personalizado.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold group"
                    onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de falar sobre seguros.", "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Horário de Atendimento</h4>
                      <p className="text-slate-600">Estamos aqui para você</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-700">Segunda à Sexta:</span>
                      <span className="font-bold text-slate-900">8h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-700">Sábado:</span>
                      <span className="font-bold text-slate-900">8h às 12h</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-slate-700">Domingo:</span>
                      <span className="font-bold text-slate-900">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;