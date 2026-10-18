document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');

    // --- Lógica de Tema (Dark/Light) ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // --- Lógica de Idioma (PT/EN) ---
    const currentLang = localStorage.getItem('lang') || 'lang-pt';
    document.body.className = currentLang;

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('lang-pt')) {
                document.body.className = 'lang-en';
                localStorage.setItem('lang', 'lang-en');
            } else {
                document.body.className = 'lang-pt';
                localStorage.setItem('lang', 'lang-pt');
            }
        });
    }
});