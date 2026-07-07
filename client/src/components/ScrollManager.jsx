import { useEffect } from 'react';
import { scrollToSection, scrollToTop } from '../utils/scroll';

function applyInitialScroll() {
  const hash = window.location.hash.slice(1);

  if (hash && document.getElementById(hash)) {
    scrollToSection(hash, { smooth: false });
    return;
  }

  scrollToTop({ smooth: false });

  if (hash) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }
}

export default function ScrollManager() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const isMobile = window.matchMedia('(max-width: 1023px)').matches;
    const initialDelay = isMobile ? 120 : 0;

    const scheduleInitialScroll = () => {
      window.setTimeout(applyInitialScroll, initialDelay);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scheduleInitialScroll);
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

    const handlePageShow = (event) => {
      if (!event.persisted) return;
      applyInitialScroll();
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}
