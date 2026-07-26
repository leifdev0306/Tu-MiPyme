// ======================================================
// Tu MiPyme - Landing Page Script
// ======================================================

// Smooth scrolling para los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80; // altura del nav sticky
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Detectar la versión de la app desde el archivo de releases (opcional)
    // Aquí puedes añadir lógica para mostrar la versión dinámicamente si quieres.
    // Por ahora, usamos un texto fijo.
});