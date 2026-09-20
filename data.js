/* Datos editables compartidos. El panel administrador guarda sus cambios en localStorage. */
const CNS_DEFAULT_DATA = {
  projects: [
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80', title: 'Dashboard Comercial', description: 'Panel claro y rápido para seguir las métricas de tu negocio.' },
    { image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80', title: 'Tienda en Línea', description: 'Experiencia de compra moderna, adaptada a todos los dispositivos.' },
    { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80', title: 'Web Corporativa', description: 'Una presencia digital que comunica confianza y resultados.' }
  ],
  services: [
    { icon: 'fa-solid fa-code', title: 'Desarrollo Web', description: 'Sitios veloces, atractivos y creados a la medida de tu marca.' },
    { icon: 'fa-solid fa-mobile-screen-button', title: 'Diseño Responsivo', description: 'Tu proyecto se verá excelente en celular, tablet y escritorio.' },
    { icon: 'fa-solid fa-wand-magic-sparkles', title: 'UI / UX', description: 'Interfaces simples que ayudan a tus visitantes a avanzar.' },
    { icon: 'fa-solid fa-rocket', title: 'Optimización', description: 'Mejoras de rendimiento para ofrecer una experiencia más fluida.' }
  ],
  programmer: { name: 'Carlos Navarro', photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=700&q=80', bio: 'Programador web apasionado por convertir buenas ideas en experiencias digitales claras, útiles y con personalidad.', skills: 'HTML, CSS, JavaScript, Diseño Responsivo, UI/UX', experience: 'Más de 3 años creando sitios web, paneles y soluciones digitales para emprendedores y negocios.' },
  contact: { email: 'hola@cnsoftware.dev', phone: '+506 8888-8888', whatsapp: 'https://wa.me/50688888888', facebook: 'https://facebook.com', instagram: 'https://instagram.com', linkedin: 'https://linkedin.com', github: 'https://github.com' }
};
function getCNSData() { try { const saved = JSON.parse(localStorage.getItem('cnsoftwareData')); return saved ? { ...CNS_DEFAULT_DATA, ...saved } : CNS_DEFAULT_DATA; } catch (error) { return CNS_DEFAULT_DATA; } }
function saveCNSData(data) { localStorage.setItem('cnsoftwareData', JSON.stringify(data)); }