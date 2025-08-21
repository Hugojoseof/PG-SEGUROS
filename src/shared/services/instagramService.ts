import { InstagramPost, InstagramServiceConfig } from '@/types/instagram';
import { BaseService } from './base/BaseService';

class InstagramService extends BaseService {
  private supabaseUrl: string;
  private config: InstagramServiceConfig;

  constructor(config?: Partial<InstagramServiceConfig>) {
    super();
    this.config = {
      maxPosts: 4,
      ...config
    };
    // URL da Supabase Function (será configurada via variável de ambiente)
    this.supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
  }

  async getRecentPosts(): Promise<InstagramPost[]> {
    // Se não há URL do Supabase configurada, usar fallback
    if (!this.supabaseUrl) {
      console.warn('❌ VITE_SUPABASE_URL não configurado, usando posts de fallback');
      return this.getFallbackPosts();
    }

    try {
      console.log('🔍 Buscando posts via Supabase Function...');
      
      // Chamar a Supabase Function em vez da API direta
      const response = await fetch(
        `${this.supabaseUrl}/functions/v1/instagram-posts?maxPosts=${this.config.maxPosts}`
      );

      if (response.ok) {
        const data = await response.json();
        
        if (data.success && data.posts && data.posts.length > 0) {
          console.log(`✅ ${data.posts.length} posts carregados via Supabase Function (${data.source})`);
          return data.posts;
        } else {
          console.warn('⚠️ Nenhum post retornado pela Supabase Function');
          return this.getFallbackPosts();
        }
      } else {
        console.warn(`⚠️ Erro na Supabase Function: ${response.status} ${response.statusText}`);
        return this.getFallbackPosts();
      }
      
    } catch (error) {
      console.error('❌ Erro ao buscar posts via Supabase Function:', error);
      return this.getFallbackPosts();
    }
  }

  private formatPost(post: any): InstagramPost {
    return {
      id: post.id,
      caption: post.caption || 'Post do Instagram',
      media_url: post.media_url || post.thumbnail_url || this.getDefaultImage(),
      permalink: post.permalink || `https://www.instagram.com/p/${post.id}/`,
      timestamp: post.timestamp,
      media_type: post.media_type || 'IMAGE',
      like_count: post.like_count || Math.floor(Math.random() * 50) + 20,
      comments_count: post.comments_count || Math.floor(Math.random() * 10) + 2
    };
  }

  private getDefaultImage(): string {
    // Usar uma imagem mais apropriada para seguros
    return 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center';
  }

  formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Agora mesmo';
    } else if (diffInHours < 24) {
      return `${diffInHours}h atrás`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d atrás`;
    }
  }

  getFallbackPosts(): InstagramPost[] {
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

  // Método para verificar se a Supabase Function está funcionando
  async checkApiStatus(): Promise<boolean> {
    if (!this.supabaseUrl) {
      return false;
    }

    try {
      const response = await fetch(
        `${this.supabaseUrl}/functions/v1/instagram-posts?maxPosts=1`
      );
      return response.ok;
    } catch (error) {
      return false;
    }
  }
}

export const instagramService = new InstagramService();
export type { InstagramPost }; 