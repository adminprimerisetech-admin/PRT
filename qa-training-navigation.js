(function () {
  const path = a => { try { return new URL(a.href, location.href).pathname.replace(/\/$/, ''); } catch { return ''; } };
  function ensure() {
    document.querySelectorAll('header').forEach(header => {
      [...header.querySelectorAll('a[href]')].filter(a => path(a) === '/contact').forEach(contact => {
        const parent = contact.parentElement;
        const links = [...parent.children].filter(a => a.matches('a[href]'));
        if (!links.some(a => path(a) === '/services') || links.some(a => path(a) === '/qa-training')) return;
        const link = contact.cloneNode(false);
        link.removeAttribute('aria-current'); link.removeAttribute('data-status');
        link.classList.remove('active','text-primary');
        link.href = '/qa-training/'; link.textContent = 'QA Training';
        parent.insertBefore(link, contact);
      });
    });
  }
  new MutationObserver(ensure).observe(document.documentElement, {childList:true,subtree:true,attributes:true,attributeFilter:['href']});
  ensure();
  document.addEventListener('DOMContentLoaded', ensure);
  document.addEventListener('click', function(event) {
    const a = event.target.closest && event.target.closest('a[href]');
    if (!a || path(a) !== '/qa-training' || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); event.stopImmediatePropagation(); location.assign('/qa-training/');
  }, true);
})();
