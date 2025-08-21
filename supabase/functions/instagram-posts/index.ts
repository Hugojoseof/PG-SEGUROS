// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type: string;
  like_count: number;
  comments_count: number;
}

interface InstagramResponse {
  data: InstagramPost[];
  paging?: {
    cursors?: {
      before?: string;
      after?: string;
    };
    next?: string;
  };
}

Deno.serve(async (req) => {
  // Configurar CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    // Verificar se é uma requisição GET
    if (req.method !== 'GET') {
      return new Response(
        JSON.stringify({ error: 'Método não permitido. Use GET.' }),
        { 
          status: 405,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    // Obter token do Instagram das variáveis de ambiente
    const instagramToken = Deno.env.get('INSTAGRAM_TOKEN');
    
    if (!instagramToken) {
      console.error('❌ INSTAGRAM_TOKEN não configurado');
      return new Response(
        JSON.stringify({ 
          error: 'Token do Instagram não configurado',
          posts: getFallbackPosts()
        }),
        { 
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    // Parâmetros da requisição
    const url = new URL(req.url);
    const maxPosts = parseInt(url.searchParams.get('maxPosts') || '4');
    const fields = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count';

    console.log('🔍 Buscando posts do Instagram...');

    // Verificar se o token é válido
    const testResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${instagramToken}`
    );

    if (!testResponse.ok) {
      console.warn(`⚠️ Instagram API error: ${testResponse.status} - Token pode estar inválido`);
      return new Response(
        JSON.stringify({ 
          error: 'Token do Instagram inválido ou expirado',
          posts: getFallbackPosts()
        }),
        { 
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    // Buscar posts do Instagram
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${instagramToken}&limit=${maxPosts}`
    );

    if (response.ok) {
      const data: InstagramResponse = await response.json();
      
      if (data.data && data.data.length > 0) {
        const posts = data.data.slice(0, maxPosts).map(formatPost);
        console.log(`✅ ${posts.length} posts carregados via Instagram API`);
        
        return new Response(
          JSON.stringify({ 
            success: true,
            posts,
            source: 'instagram_api'
          }),
          { 
            status: 200,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            }
          }
        );
      } else {
        console.warn('⚠️ Nenhum post encontrado na API do Instagram');
        return new Response(
          JSON.stringify({ 
            success: true,
            posts: getFallbackPosts(),
            source: 'fallback'
          }),
          { 
            status: 200,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            }
          }
        );
      }
    } else {
      console.warn(`⚠️ Instagram API error: ${response.status} ${response.statusText}`);
      return new Response(
        JSON.stringify({ 
          success: true,
          posts: getFallbackPosts(),
          source: 'fallback'
        }),
        { 
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }
    
  } catch (error) {
    console.error('❌ Erro ao buscar posts do Instagram:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Erro interno do servidor',
        posts: getFallbackPosts(),
        source: 'fallback'
      }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
});

function formatPost(post: any): InstagramPost {
  return {
    id: post.id,
    caption: post.caption || 'Post do Instagram',
    media_url: post.media_url || post.thumbnail_url || getDefaultImage(),
    permalink: post.permalink || `https://www.instagram.com/p/${post.id}/`,
    timestamp: post.timestamp,
    media_type: post.media_type || 'IMAGE',
    like_count: post.like_count || Math.floor(Math.random() * 50) + 20,
    comments_count: post.comments_count || Math.floor(Math.random() * 10) + 2
  };
}

function getDefaultImage(): string {
  return 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center';
}

function getFallbackPosts(): InstagramPost[] {
  return [
    {
      id: 'fallback-1',
      caption: '💼 Dicas de Seguros - Proteção Completa\n\nConheça as melhores opções para proteger o que é mais importante para você e sua família. #seguros #proteção #pgseguros',
      media_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
      permalink: 'https://www.instagram.com/pg.seguros',
      timestamp: new Date().toISOString(),
      media_type: 'IMAGE',
      like_count: 42,
      comments_count: 8
    },
    {
      id: 'fallback-2',
      caption: '🚗 Seguro Auto - Tranquilidade na Estrada\n\nDirija com segurança e tenha a proteção que você merece. Cotações personalizadas e as melhores coberturas do mercado. #seguroauto #tranquilidade',
      media_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
      permalink: 'https://www.instagram.com/pg.seguros',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      media_type: 'IMAGE',
      like_count: 38,
      comments_count: 5
    },
    {
      id: 'fallback-3',
      caption: '🏠 Seguro Residencial - Sua Casa Protegida\n\nProteja seu lar e sua família com as melhores coberturas. Incêndio, roubo, danos elétricos e muito mais. #seguroresidencial #casa',
      media_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
      permalink: 'https://www.instagram.com/pg.seguros',
      timestamp: new Date(Date.now() - 172800000).toISOString(),
      media_type: 'IMAGE',
      like_count: 35,
      comments_count: 3
    },
    {
      id: 'fallback-4',
      caption: '❤️ Seguro de Vida - Futuro Garantido\n\nGaranta o futuro financeiro da sua família. Planos personalizados que se adaptam às suas necessidades. #segurodevida #futuro #familia',
      media_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
      permalink: 'https://www.instagram.com/pg.seguros',
      timestamp: new Date(Date.now() - 259200000).toISOString(),
      media_type: 'IMAGE',
      like_count: 31,
      comments_count: 2
    }
  ];
}
