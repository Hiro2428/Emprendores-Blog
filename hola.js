// script.js

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar un mensaje de bienvenida al usuario
    function showWelcomeMessage() {
        alert("¡Bienvenido al Blog de Emprendedores! Esperamos que encuentres información valiosa.");
    }

    // Llama a la función para mostrar el mensaje de bienvenida
    showWelcomeMessage();

    // Función para manejar el desplazamiento suave al hacer clic en enlaces de navegación
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const targetId = this.getAttribute("href"); // Obtiene el destino del enlace
            const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo

            // Desplazamiento suave hacia el elemento objetivo
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Función para mostrar/ocultar el menú de navegación en dispositivos móviles
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active"); // Alterna la clase 'active' para mostrar/ocultar el menú
        });
    }
});
