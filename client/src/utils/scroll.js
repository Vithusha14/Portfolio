export function getNavbarOffset() {
  const nav = document.querySelector('nav');
  return nav ? nav.offsetHeight + 8 : 88;
}

export function scrollToSection(id, { smooth = true } = {}) {
  if (!id || id === 'home') {
    window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'instant' });
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - getNavbarOffset();
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: smooth ? 'smooth' : 'instant' });
  window.history.replaceState(null, '', `#${id}`);
}
