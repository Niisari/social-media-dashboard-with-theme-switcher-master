const toggleBtn = document.getElementById('toggle__button');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});


const filter = () => {
  const isDarkTheme = document.documentElement.classList.contains('dark-theme');
  const socialContents = document.querySelectorAll('.social__content, .overview__content');

  socialContents.forEach(content => {
    if (isDarkTheme) {
      content.classList.add('dark-filter');
    } else {
      content.classList.remove('dark-filter');
    }
  });
};

toggleBtn.addEventListener('click', filter);

// Initial filter application
filter();