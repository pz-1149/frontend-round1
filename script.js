// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Theme Toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});
