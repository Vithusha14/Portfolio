export function getNavbarOffset() {
  const header = document.querySelector('[data-nav-header]');
  if (header) return header.offsetHeight + 8;

  const nav = document.querySelector('nav');
  return nav ? nav.offsetHeight + 8 : 72;
}

export function scrollToTop({ smooth = true } = {}) {
  const behavior = smooth ? 'smooth' : 'auto';

  window.scrollTo({ top: 0, left: 0, behavior });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}

export function scrollToSection(id, { smooth = true, delay = 0 } = {}) {
  const run = () => {
    if (!id || id === 'home') {
      scrollToTop({ smooth });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - getNavbarOffset();
    const behavior = smooth ? 'smooth' : 'auto';

    window.scrollTo({ top: Math.max(0, top), left: 0, behavior });
    window.history.replaceState(null, '', `#${id}`);
  };

  if (delay > 0) {
    window.setTimeout(run, delay);
    return;
  }

  run();
}
