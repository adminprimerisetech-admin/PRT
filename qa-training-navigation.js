document.addEventListener('click', function(event) {
  const a=event.target.closest && event.target.closest('a[href]');
  if (!a || new URL(a.href, location.href).pathname.replace(/\/$/, '') !== '/qa-training') return;
  if(event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault(); event.stopImmediatePropagation();
  location.assign('/qa-training/');
}, true);
