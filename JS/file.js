// La parte en que se escribe el texto
document.addEventListener("DOMContentLoaded", function () {
    const text = "DESARROLLADORA WEB FRONTEND";
    let index = 0;
    const speed = 150; // Velocidad de escritura en milisegundos
    const typingTextElement = document.getElementById("typing-text");

    // Comprobar que el elemento existe antes de intentar escribir
    if (typingTextElement) {
        function typeWriter() {
            if (index < text.length) {
                typingTextElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }
});

// Función para aplicar la animación de escala
function animateCard(element) {
    element.classList.add("card-animate");
}

// Función para resetear la animación de escala
function resetAnimation(element) {
    element.classList.remove("card-animate");
}

// Agregar animación de entrada al aparecer en la pantalla
function animacionCards() {
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card-formation");

        if (cards.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    const card = entry.target;
                    if (entry.isIntersecting) {
                        // Alternar animaciones
                        if (index % 2 === 0) {
                            card.classList.add("animate-slide-up");
                        } else {
                            card.classList.add("animate-slide-down");
                        }
                        observer.unobserve(card); // Dejar de observar después de la primera animación
                    }
                });
            }, { threshold: 0.5 });

            cards.forEach((card) => {
                observer.observe(card);
            });
        }
    });
}

// Llamar a la función de animación
animacionCards();





// CARDS

function viewDemo() {
    alert("Abriendo la demo del proyecto...");
}

function viewRepo() {
    alert("Abriendo el repositorio del proyecto...");
}


function mostrarMensajeConfirmacion() {
    // Evita el envío del formulario
    event.preventDefault(); 

    // Muestra el mensaje de confirmación
    document.getElementById("confirmationMessage").style.display = "block";

    // Limpia los campos del formulario
    document.getElementById("contactForm").reset();
}

function enviarCorreo() {
    window.location.href = "mailto:le21-0146@unphu.edu.do";
}


//Funcion cartas en funcionamiento dinamico
// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.card-formation');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Si la tarjeta ya tiene la clase 'active', la quita (oculta la descripción y muestra la imagen)
        if (card.classList.contains('active')) {
            card.classList.remove('active');
        } else {
            // Elimina la clase 'active' de todas las tarjetas
            cards.forEach(c => c.classList.remove('active'));
            
            // Agrega la clase 'active' solo a la tarjeta que se ha hecho clic
            card.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show"); // Alterna la visibilidad del menú
    });
});


// Función para cambiar el modo oscuro
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const tituloCElements = document.querySelectorAll('.tituloC');

    // Verificar el modo guardado en localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        localStorage.setItem('dark-mode', 'enabled');

        
        // Cambiar tituloC a .tituloC-dark
        document.querySelectorAll('.tituloC').forEach(btn => {
            btn.classList.remove('tituloC');
            btn.classList.add('tituloC-dark');
        });


        // Cambiar btn_p a btn_darkMode
        document.querySelectorAll('.btn_p').forEach(btn => {
            btn.classList.remove('btn_p');
            btn.classList.add('btn_darkMode');
        });

        // Cambiar tituloP a tituloDark
        document.querySelectorAll('.tituloP').forEach(titulo => {
            titulo.classList.remove('tituloP');
            titulo.classList.add('tituloDark');
        });

        // Cambiar textoTarjetas a darkTt
        document.querySelectorAll('.textoTarjetas').forEach(titulo => {
            titulo.classList.remove('textoTarjetas');
            titulo.classList.add('darkTt');
        });

        // Cambiar textoT a darkTt2
        document.querySelectorAll('.textoT').forEach(titulo => {
            titulo.classList.remove('textoT');
            titulo.classList.add('darkTt2');
        });
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        localStorage.setItem('dark-mode', null);

        // Cambiar btn_darkMode a btn_p
        document.querySelectorAll('.tituloC-dark').forEach(btn => {
            btn.classList.remove('tituloC-dark');
            btn.classList.add('tituloC');
        });



        // Cambiar btn_darkMode a btn_p
        document.querySelectorAll('.btn_darkMode').forEach(btn => {
            btn.classList.remove('btn_darkMode');
            btn.classList.add('btn_p');
        });

        // Cambiar tituloDark a tituloC
        document.querySelectorAll('.tituloDark').forEach(titulo => {
            titulo.classList.remove('tituloDark');
            titulo.classList.add('tituloC');
        });

        // Cambiar darkTt a textoTarjetas
        document.querySelectorAll('.darkTt').forEach(btn => {
            btn.classList.remove('darkTt');
            btn.classList.add('textoTarjetas');
        });

        // Cambiar darkTt2 a textoT
        document.querySelectorAll('.darkTt2').forEach(titulo => {
            titulo.classList.remove('darkTt2');
            titulo.classList.add('textoT');
        });
    }
});
