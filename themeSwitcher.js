// themeSwitcher.js
document.getElementById('themeToggle').addEventListener('click', function() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    if (body.classList.toggle('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Kontrollera localStorage vid sidladdning för att sätta rätt tema
window.onload = function() {
    const currentTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
};
