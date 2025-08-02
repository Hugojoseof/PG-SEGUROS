import { InstagramPost, InstagramServiceConfig } from '@/types/instagram';
import { BaseService } from './base/BaseService';

class InstagramService extends BaseService {
  private accessToken: string;
  private config: InstagramServiceConfig;

  constructor(config?: Partial<InstagramServiceConfig>) {
    super();
    this.config = {
      accessToken: import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || '',
      maxPosts: 4,
      ...config
    };
    this.accessToken = this.config.accessToken;
  }

  async getRecentPosts(): Promise<InstagramPost[]> {
    try {
      // Usar Instagram Basic Display API diretamente
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${this.accessToken}`
      );

      if (response.ok) {
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          const recentPosts = data.data.slice(0, this.config.maxPosts).map(this.formatPost);
          if (import.meta.env.DEV) {
            console.log('Posts carregados via Instagram Basic Display API:', recentPosts.length);
          }
          return recentPosts;
        }
      } else {
        if (import.meta.env.DEV) {
          console.error('Instagram Basic Display API error:', response.status, response.statusText);
        }
      }

      if (import.meta.env.DEV) {
        console.log('Nenhum post encontrado, usando fallback');
      }
      return this.getFallbackPosts();
      
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error fetching Instagram posts:', error);
        console.log('Usando posts de fallback devido ao erro');
      }
      return this.getFallbackPosts();
    }
  }

  private formatPost(post: InstagramPost): InstagramPost {
    return {
      id: post.id,
      caption: post.caption || '',
      media_url: post.media_url || post.thumbnail_url || this.getDefaultImage(),
      permalink: post.permalink,
      timestamp: post.timestamp,
      media_type: post.media_type,
      like_count: post.like_count || 0,
      comments_count: post.comments_count || 0
    };
  }

  private getDefaultImage(): string {
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
        id: 'DLLvHzptVig',
        caption: 'Post do Instagram - Última publicação',
        media_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
        permalink: 'https://www.instagram.com/p/DLLvHzptVig/?img_index=1',
        timestamp: new Date().toISOString(),
        media_type: 'IMAGE',
        like_count: 42,
        comments_count: 8
      },
      {
        id: 'C15jgaoNFeN',
        caption: 'Post do Instagram - Penúltima publicação',
        media_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
        permalink: 'https://www.instagram.com/p/C15jgaoNFeN/',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        media_type: 'IMAGE',
        like_count: 38,
        comments_count: 5
      },
      {
        id: 'Co3QVXjtARA',
        caption: 'Post do Instagram - Terceira publicação',
        media_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
        permalink: 'https://www.instagram.com/p/Co3QVXjtARA/?img_index=1',
        timestamp: new Date(Date.now() - 172800000).toISOString(),
        media_type: 'IMAGE',
        like_count: 35,
        comments_count: 3
      },
      {
        id: 'CnW-W54OSRm',
        caption: 'Post do Instagram - Quarta publicação',
        media_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
        permalink: 'https://www.instagram.com/p/CnW-W54OSRm/',
        timestamp: new Date(Date.now() - 259200000).toISOString(),
        media_type: 'IMAGE',
        like_count: 31,
        comments_count: 2
      }
    ];
  }
}

export const instagramService = new InstagramService();
export type { InstagramPost }; 