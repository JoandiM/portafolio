// Inicializar AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Resto del código existente...
    renderProjects();
    
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


const projects = [
    {
        id: 1,
        title: "Portafolio Personal",
        description: "Sitio web responsive para mostrar mis proyectos profesionales con efectos modernos.",
        technologies: "HTML, CSS, JavaScript, Bootstrap",
        imageUrl: "assets/img/portafolio.png",
        githubLink: "#",
        demoLink: "#",
        category: "frontend",
        features: ["Responsive", "Animaciones CSS", "Diseño moderno"]
    },
    {
        id: 2,
        title: "E-commerce",
        description: "Tienda online con carrito de compras y pasarela de pagos integrada.",
        technologies: "React, Node.js, MongoDB",
        imageUrl: "assets/img/acboutique.png",
        githubLink: "#",
        demoLink: "https://acboutiquepc.com/",
        category: "fullstack",
        features: ["Carrito de compras", "Autenticación", "Pasarela de pagos"]
    },
    {
        id: 3,
        title: "E-commerce",
        description: "Tienda online con carrito de compras y realizacion de pedidos, envio de correos",
        technologies: "Laravel, MySQL, Bootstrap, Responsive",
        imageUrl: "assets/img/damguio.png",
        githubLink: "#",
        demoLink: "https://damguio.com/",
        category: "fullstack",
        features: ["Carrito de compras", "Autenticación", "Pasarela de pedidos"]
    },
    {
        id: 4,
        title: "API REST",
        description: "API para gestión de tareas con autenticación JWT y documentación Swagger.",
        technologies: "Laravel, MySQL, JWT",
        imageUrl: "assets/img/apiRest.png",
        githubLink: "#",
        demoLink: "#",
        category: "backend",
        features: ["Autenticación JWT", "CRUD completo", "Documentación"]
    }
];

// Renderizar proyectos con filtros
function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const featuresHTML = project.features.map(feature => 
            `<span class="badge bg-primary me-1 mb-1">${feature}</span>`
        ).join('');
        
        const projectHTML = `
        <div class="col-md-4 mb-4">
            <div class="card project-card h-100" data-category="${project.category}">
                <img src="${project.imageUrl}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="mb-3">${featuresHTML}</div>
                    <p class="text-muted small"><i class="fas fa-code me-1"></i> ${project.technologies}</p>
                </div>
                <div class="card-footer bg-white border-0">
                    <div class="d-flex justify-content-between">
                        <a href="${project.githubLink}" target="_blank" class="btn btn-sm btn-outline-dark">
                            <i class="fab fa-github me-1"></i> Código
                        </a>
                        <a href="${project.demoLink}" target="_blank" class="btn btn-sm btn-primary">
                            <i class="fas fa-external-link-alt me-1"></i> Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += projectHTML;
    });
}

// Filtros de proyectos
document.querySelectorAll('.btn-filter').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        renderProjects(button.dataset.filter);
    });
});

// Efecto partículas
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Manejar el formulario de contacto
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí puedes agregar el código para enviar el formulario
        alert('Mensaje enviado con éxito!');
        this.reset();
    });

    // Función para copiar texto al portapapeles
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const textToCopy = document.getElementById(targetId).textContent;
        
        // Crear elemento temporal para copiar
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Feedback visual
        const originalContent = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i>';
        this.classList.remove('btn-outline-primary');
        this.classList.add('btn-success');
        
        // Restaurar después de 2 segundos
        setTimeout(() => {
            this.innerHTML = originalContent;
            this.classList.remove('btn-success');
            this.classList.add('btn-outline-primary');
        }, 2000);
    });
});



// Función para copiar (similar a la anterior pero adaptada)
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const textToCopy = document.getElementById(targetId).textContent;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i>';
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-success');
            
            setTimeout(() => {
                this.innerHTML = originalContent;
                this.classList.remove('btn-success');
                this.classList.add('btn-outline-primary');
            }, 2000);
        });
    });
});

// Inicializar tooltips para los botones
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});


});

function descargarCV() {
    // Configuración de rutas y nombres
    const url = 'assets/pdf/cv.pdf';
    const nombreArchivo = 'CV_José_Angel_Diaz_FullStack.pdf';
    const btn = document.querySelector('.btn-descargar');
    const originalHTML = btn.innerHTML;

    // Mostrar estado de carga
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparando...';
    btn.disabled = true;

    // Función para restaurar el botón
    const restaurarBoton = (exito = true) => {
        btn.innerHTML = exito 
            ? '<i class="fas fa-check"></i> ¡Listo!' 
            : '<i class="fas fa-exclamation-triangle"></i> Error';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        }, 2000);
    };

    // Verificar primero si el archivo existe
    fetch(url, { method: 'HEAD' })
        .then(response => {
            if (!response.ok) throw new Error('Archivo no encontrado');
            
            // Crear enlace de descarga
            const link = document.createElement('a');
            link.href = url;
            link.download = nombreArchivo;
            link.style.display = 'none';
            
            // Manejar errores del enlace
            link.onerror = () => {
                throw new Error('Error al cargar el archivo');
            };
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Feedback de éxito
            restaurarBoton(true);
        })
        .catch(error => {
            console.error('Error al descargar CV:', error);
            restaurarBoton(false);
            
            // Opción alternativa: abrir en nueva pestaña si falla la descarga
            window.open(url, '_blank');
        });
}