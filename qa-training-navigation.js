(function(){
const path=a=>{try{return new URL(a.href,location.href).pathname.replace(/\/$/,'')}catch{return ''}};
const isQA=a=>['/qa-training','/qa-training.html','/qa-training/index.html'].includes(path(a));
function linkFrom(a){const n=a.cloneNode(false);n.removeAttribute('aria-current');n.removeAttribute('data-status');n.classList.remove('active','text-primary');n.href='/qa-training.html';n.textContent='QA Training';return n;}
function ensure(){
document.querySelectorAll('header').forEach(h=>{h.querySelectorAll('a[href]').forEach(c=>{if(path(c)!='/contact')return;const p=c.parentElement,links=[...p.children].filter(a=>a.matches('a[href]'));if(!links.some(a=>path(a)==='/services'))return;const q=links.find(isQA);if(!q)p.insertBefore(linkFrom(c),c);else if(q.getAttribute('href')!='/qa-training.html')q.href='/qa-training.html';});});
document.querySelectorAll('footer li').forEach(li=>{const a=[...li.children].find(a=>a.matches('a[href]')&&path(a)==='/services');if(!a)return;const list=li.parentElement;let q=[...list.querySelectorAll('a[href]')].find(isQA);if(!q){q=linkFrom(a);const row=li.cloneNode(false);row.append(q);li.after(row);}else if(q.parentElement===li){const row=li.cloneNode(false);row.append(q);li.after(row);}if(q.getAttribute('href')!='/qa-training.html')q.href='/qa-training.html';});
}
new MutationObserver(ensure).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['href']});ensure();document.addEventListener('DOMContentLoaded',ensure);
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href]');if(!a||!isQA(a)||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();e.stopImmediatePropagation();location.assign('/qa-training.html');},true);
})();