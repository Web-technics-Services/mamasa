(function () {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (!toggle || !menu) {
        return;
    }

    function closeMenu() {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
    }

    toggle.addEventListener('click', function () {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        menu.classList.toggle('open', !isOpen);
    });

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (event) {
        if (!menu.classList.contains('open') || menu.contains(event.target) || toggle.contains(event.target)) {
            return;
        }
        closeMenu();
    });
})();
