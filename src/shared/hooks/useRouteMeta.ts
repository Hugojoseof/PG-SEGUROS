import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageMetadata } from '@/config/routes/index';

export const useRouteMeta = () => {
  const location = useLocation();

  useEffect(() => {
    const updateMeta = () => {
      const path = location.pathname;
      let meta = pageMetadata.home; // default

      if (path === '/') {
        meta = pageMetadata.home;
      } else if (path === '*') {
        meta = pageMetadata.notFound;
      }

      // Update document title
      document.title = meta.title;

      // Update meta description
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', meta.description);
      } else {
        const metaTag = document.createElement('meta');
        metaTag.name = 'description';
        metaTag.content = meta.description;
        document.head.appendChild(metaTag);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', meta.title);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', meta.description);
      }
    };

    updateMeta();
  }, [location.pathname]);
}; 