document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const themeToggle = document.getElementById('themeToggle');

  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      navbarToggler.setAttribute('aria-expanded', String(!isExpanded));
    });
  }

  const applyTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (!themeToggle) {
      return;
    }

    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    themeToggle.title = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';

    const icon = themeToggle.querySelector('.theme-icon');
    const label = themeToggle.querySelector('.theme-label');

    if (icon) {
      icon.className = isDark ? 'bi bi-sun-fill theme-icon' : 'bi bi-moon-stars-fill theme-icon';
    }

    if (label) {
      label.textContent = isDark ? 'Claro' : 'Oscuro';
    }
  };

  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }
});
