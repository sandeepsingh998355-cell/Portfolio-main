document.addEventListener('DOMContentLoaded', () => {
  if (typeof Typed !== 'undefined') {
    new Typed('#typed-text', {
      strings: ['Web Developer.', 'Web Designer.'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1200,
      loop: true,
    });
  }

  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) topBtn.style.display = 'block';
      else topBtn.style.display = 'none';
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});