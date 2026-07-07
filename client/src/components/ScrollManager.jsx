import { useEffect } from 'react';
import { scrollToSection } from '../utils/scroll';

export default function ScrollManager() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const hash = window.location.hash.slice(1);
    const scrollToInitialTarget = () => {
      if (hash && document.getElementById(hash)) {
        scrollToSection(hash, { smooth: false });
      } else {
        window.scrollTo(0, 0);
        if (hash) {
          window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
        }
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToInitialTarget);
    });

    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) scrollToSection(id);
    };

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const id = href.slice(1);
      if (!document.getElementById(id)) return;

      event.preventDefault();
      scrollToSection(id);
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}
