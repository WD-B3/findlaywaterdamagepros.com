(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) { return; }
  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
    document.documentElement.style.overflow = open && window.innerWidth <= 900 ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); } });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) { setOpen(false); } });
})();
