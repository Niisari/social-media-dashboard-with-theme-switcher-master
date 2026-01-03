const toggleBtn = document.getElementById('toggle__button');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});
