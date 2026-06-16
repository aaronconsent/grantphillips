(function () {
  // ---- Hamburger nav (mobile) ----
  var hdr = document.querySelector('.site-header .wrap');
  var nav = document.querySelector('nav.primary');
  if (hdr && nav) {
    var btn = document.createElement('button');
    btn.className = 'hamburger';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'site-nav');
    btn.innerHTML = '<span></span><span></span><span></span>';
    nav.id = 'site-nav';
    hdr.appendChild(btn);

    function close() {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
    function toggle() {
      var isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('nav-open', isOpen);
    }
    btn.addEventListener('click', toggle);
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 960) close();
    });
  }

  // ---- Footer year ----
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
