import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Instagram, ExternalLink, Heart, MessageCircle, Share2, ArrowRight, Sparkles, MessageSquare, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { instagramService, InstagramPost } from "@/shared/services/instagramService";
import { useToast } from "@/shared/hooks/use-toast";

const InstagramSection = () => {
  const { toast } = useToast();
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Agora vamos buscar posts reais da API do Instagram
        const recentPosts = await instagramService.getRecentPosts();
        setPosts(recentPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Não foi possível carregar as postagens do Instagram');
        // Em caso de erro, usar posts de fallback
        const fallbackPosts = instagramService.getFallbackPosts();
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 p-2 sm:p-3 rounded-full">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-4 sm:mb-6">
              Conecte-se Conosco
            </h2>
            
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2" />
              <p className="text-base sm:text-xl text-slate-600 font-medium">
                Mais de 1.200 seguidores confiam em nossas dicas
              </p>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 ml-2" />
            </div>
            
            <p className="text-sm sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed px-4">
              Acompanhe nossas dicas exclusivas, promoções especiais e conteúdo valioso sobre seguros. 
              <span className="font-semibold text-purple-600"> Seja o primeiro a saber!</span>
            </p>
          </div>

          {/* Enhanced Instagram Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0 overflow-hidden">
                    <div className="relative">
                      <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"></div>
                      <div className="p-4 sm:p-5">
                        <div className="h-3 sm:h-4 bg-slate-200 rounded animate-pulse mb-2 sm:mb-3"></div>
                        <div className="h-2 sm:h-3 bg-slate-200 rounded animate-pulse mb-1 sm:mb-2"></div>
                        <div className="flex justify-between">
                          <div className="h-2 sm:h-3 w-12 sm:w-16 bg-slate-200 rounded animate-pulse"></div>
                          <div className="h-2 sm:h-3 w-16 sm:w-20 bg-slate-200 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              posts.map((post, index) => {
                const formattedDate = instagramService.formatTimestamp(post.timestamp);
                
                return (
                  <Card 
                    key={post.id} 
                    className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 cursor-pointer bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden"
                    onMouseEnter={() => setHoveredPost(index)}
                    onMouseLeave={() => setHoveredPost(null)}
                    onClick={() => window.open(post.permalink, "_blank")}
                  >
                    <CardContent className="p-0 overflow-hidden">
                      <div className="relative">
                        
                        {/* Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={post.media_url}
                            alt="Instagram post"
                            className="w-full h-48 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            onError={(e) => {
                              // Fallback para imagem padrão se a URL falhar
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center';
                            }}
                          />
                          
                          {/* Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end`}>
                            <div className="p-4 sm:p-6 w-full">
                              <div className="flex items-center justify-center text-white">
                                <div className="flex items-center space-x-2 sm:space-x-3 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                                  <span className="text-xs sm:text-sm font-semibold">@instagram</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-3 sm:p-4">
                          <div className="flex items-center justify-center">
                            <div className="flex items-center text-purple-600 group-hover:text-purple-700 transition-colors">
                              <span className="text-xs sm:text-sm font-medium mr-1 sm:mr-2">Ver no Instagram</span>
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>

          {/* Error message */}
          {error && (
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-orange-600 text-xs sm:text-sm">
                {error} - Mostrando posts de exemplo
              </p>
            </div>
          )}

          {/* Enhanced Call to Action */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600"></div>
              
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="relative p-6 sm:p-8 lg:p-12 text-white">
                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-3 sm:gap-4">
                    <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                      <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">
                      Junte-se à Nossa Comunidade
                    </h3>
                  </div>
                  
                  <p className="text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
                    Receba <span className="font-bold">dicas exclusivas</span>, <span className="font-bold">promoções especiais</span> e 
                    <span className="font-bold"> conteúdo valioso</span> sobre seguros diretamente no seu feed.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <Button
                      size="lg"
                      onClick={() => window.open("https://www.instagram.com/pg.seguros?utm_source=ig_web_button_share_sheet&igsh=b3Q4Y3gyZDdjc3Jq", "_blank")}
                      className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                      Seguir @pg.seguros
                    </Button>
                    

                  </div>
                  
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm opacity-80">
                    <div className="flex items-center">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span>1.200+ seguidores</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span>600+ posts</span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span>Dicas diárias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Social Media Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Instagram,
                name: "Instagram",
                count: "1.200+",
                label: "Seguidores",
                color: "from-pink-500 to-purple-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-purple-50"
              },
              {
                icon: MessageSquare,
                name: "WhatsApp",
                count: "2.000+",
                label: "Conversas",
                color: "from-green-500 to-emerald-600",
                bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
              }
            ].map((platform, index) => (
              <div key={index} className={`${platform.bgColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${platform.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <platform.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">{platform.name}</h4>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-1">
                  {platform.count}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">{platform.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;