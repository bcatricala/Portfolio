  //language switch

const langButtons = document.querySelectorAll('.lang');
const translatable = document.querySelectorAll('[data-it]');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;

    // aggiorna stato attivo
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // cambia testi
    translatable.forEach(el => {
      el.textContent = el.dataset[lang];
    });
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


//animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

  //mail
  document.querySelector('.email-link').addEventListener('click', function (e) {
  const isDesktop = window.innerWidth > 768;

  if (isDesktop) {
    e.preventDefault(); // SOLO desktop

    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=benedetta.catricala@gmail.com&su=Contatto%20dal%20Portfolio',
      '_blank',
      'width=600,height=600'
    );
  }
});

  //toggle

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });







