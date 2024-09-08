/*US 46(Como visitante de la página principal, quiero que los enlaces del menú de navegación me lleven a las secciones correspondientes (Beneficios, Descripción general, Registro, Redes sociales, Sobre Nosotros) para navegar de manera sencilla por la página.)*/ 

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a.nav-link');
    const sections = document.querySelectorAll('section');

    // Función para el scroll suave
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Resaltar el enlace activo
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
          link.classList.add('active');
        }
      });
    });
  });

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

/*FIN US46*/