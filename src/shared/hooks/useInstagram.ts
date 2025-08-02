import { useState, useEffect } from 'react';
import { InstagramPost } from '@/types/instagram';
import { instagramService } from '@/shared/services/instagramService';

interface UseInstagramReturn {
  posts: InstagramPost[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useInstagram = (maxPosts?: number): UseInstagramReturn => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const recentPosts = await instagramService.getRecentPosts();
      setPosts(recentPosts);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao carregar posts';
      setError(errorMessage);
      if (import.meta.env.DEV) {
        console.error('Error fetching Instagram posts:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [maxPosts]);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts
  };
}; 