document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');

    // Configura Tema Inicial
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) html.setAttribute('data-theme', currentTheme);

    // Configura Idioma Inicial (Força pt-BR se não houver salvo)
    const currentLang = localStorage.getItem('lang') || 'pt-BR';
    html.setAttribute('lang', currentLang);

    // Botão de Tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = html.getAttribute('data-theme') === 'dark';
            html.setAttribute('data-theme', isDark ? 'light' : 'dark');
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
        });
    }

    // Botão de Idioma
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const isPt = html.getAttribute('lang') === 'pt-BR';
            const newLang = isPt ? 'en' : 'pt-BR';
            html.setAttribute('lang', newLang);
            localStorage.setItem('lang', newLang);
        });
    }
});