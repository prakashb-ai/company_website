const toggleThemeButton = document.getElementById('radix-:r0:');

// Load saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

toggleThemeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

  // Save user preference
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});