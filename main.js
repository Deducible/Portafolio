const MIEMBROS = [
  {
    id: 0,
    nombre: '[Nombre 01]',
    rol: 'Desarrollo front-end',
    bio: 'Trabaja en la interfaz: lo que el usuario ve y toca. En Psicología con Bel armó el flujo completo de reserva de horas.',
    correo: 'nombre01@pancm.cl',
    ubicacion: 'Santiago, Chile',
    disponibilidad: 'Disponible para trabajos',
    aporte: 'Interfaz y flujo de reserva',
    stack: ['React 19', 'TypeScript', 'Tailwind', 'Vite', 'Figma'],
    experiencia: [
      { anio: '2025', titulo: 'Psicología con Bel', detalle: 'Interfaz pública en React + Tailwind y el selector de horarios.' },
      { anio: '2023—2025', titulo: '[Estudios o trabajo previo]', detalle: 'Reemplaza esto con tu experiencia real.' }
    ]
  },
  {
    id: 1,
    nombre: 'Bastián Orellana',
    foto: 'src/assets/bastian-orellana.png',
    rol: 'Desarrollo full-stack',
    bio: 'Ingeniero en Informática (DUOC UC). Construyó el frontend y la API de Psicología con Bel, y se encargó de seguridad, autenticación y el pipeline de despliegue.',
    correo: 'b.orellana.cv@gmail.com',
    ubicacion: 'Puente Alto, Santiago',
    disponibilidad: 'Disponible para trabajos',
    linkedin: 'https://www.linkedin.com/in/bastianorellanac',
    linkedinLabel: 'linkedin.com/in/bastianorellanac',
    aporte: 'Frontend en React, API en Express/Prisma, autenticación con JWT y 2FA, y CI/CD con GitHub Actions.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'GitHub Actions'],
    experiencia: [
      { anio: '2026', titulo: 'Psicología con Bel', detalle: 'Frontend en React/Vite/Tailwind, API REST con Express y Prisma, JWT + verificación en dos pasos, CI/CD con GitHub Actions y migración a Neon.' },
      { anio: 'Jul—Dic 2024', titulo: 'IGN.Tattoo', detalle: 'Proyecto de título: app móvil (React Native/Expo) y plataforma web para estudios de tatuajes, con API en Node/Express sobre PostgreSQL.' },
      { anio: 'Dic 2024—Feb 2025', titulo: 'Aplicaciones Computacionales SPA (ACL TI)', detalle: 'Práctica full-stack: dashboards con Next.js y Prisma, documentación de API con Swagger.' }
    ]
  },
  {
    id: 2,
    nombre: '[Nombre 03]',
    rol: 'Diseño de producto',
    bio: 'Define qué necesita el proyecto antes de programarlo: conversaciones con el cliente, flujos y pantallas.',
    correo: 'nombre03@pancm.cl',
    ubicacion: 'Santiago, Chile',
    disponibilidad: 'Disponible para trabajos',
    aporte: 'Investigación y diseño de pantallas',
    stack: ['Figma', 'Prototipado', 'Investigación', 'React', 'Tailwind'],
    experiencia: [
      { anio: '2025', titulo: 'Psicología con Bel', detalle: 'Definición del flujo y diseño de las pantallas.' },
      { anio: '2023—2025', titulo: '[Estudios o trabajo previo]', detalle: 'Reemplaza esto con tu experiencia real.' }
    ]
  },
  {
    id: 3,
    nombre: '[Nombre 04]',
    rol: 'Coordinación y pruebas',
    bio: 'Coordina los plazos con quien encarga el proyecto y revisa que todo funcione antes de publicar.',
    correo: 'nombre04@pancm.cl',
    ubicacion: 'Santiago, Chile',
    disponibilidad: 'Disponible para trabajos',
    aporte: 'Coordinación con la clienta y pruebas',
    stack: ['Git', 'GitHub Actions', 'Playwright', 'Soporte'],
    experiencia: [
      { anio: '2025', titulo: 'Psicología con Bel', detalle: 'Coordinación del proyecto y pruebas previas al lanzamiento.' },
      { anio: '2023—2025', titulo: '[Estudios o trabajo previo]', detalle: 'Reemplaza esto con tu experiencia real.' }
    ]
  }
];

const ROTS = [-1.5, 1.2, -0.8, 1.6];

const PROYECTOS = [
  { caso: 'Caso Nº 01', nombre: 'Psicología con Bel', estado: 'Cerrado', resumen: 'Reserva de horas para pacientes y panel privado de agenda para la profesional.', href: 'proyecto.html' },
  { caso: 'Caso Nº 02', nombre: 'Expediente abierto', estado: 'Abierto', resumen: 'Espacio reservado para el siguiente encargo del grupo.', href: 'proyecto.html' }
];

function initDeviceToggle() {
  const shell = document.querySelector('.shell');
  const btnDesktop = document.querySelector('[data-device="desktop"]');
  const btnMobile = document.querySelector('[data-device="mobile"]');
  if (!shell || !btnDesktop || !btnMobile) return;

  const apply = (device) => {
    shell.classList.toggle('mobile', device === 'mobile');
    btnDesktop.classList.toggle('active', device === 'desktop');
    btnMobile.classList.toggle('active', device === 'mobile');
  };

  btnDesktop.addEventListener('click', () => apply('desktop'));
  btnMobile.addEventListener('click', () => apply('mobile'));
  apply('desktop');
}

function renderMemberGrid(container, { wide = false } = {}) {
  if (!container) return;
  container.classList.add('member-grid');
  if (wide) container.classList.add('wide');

  container.innerHTML = MIEMBROS.map((m, i) => {
    const rot = ROTS[i % ROTS.length];
    const avatar = m.foto
      ? `<img class="avatar" src="${m.foto}" alt="${m.nombre}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'pin'}))" />`
      : `<div class="pin"></div>`;
    return `
      <a class="member-card" href="perfil.html?id=${m.id}" style="transform:rotate(${rot}deg)">
        ${avatar}
        <div class="name">${m.nombre}</div>
        <div class="role">${m.rol}</div>
        <div class="link">ver su ficha →</div>
      </a>
    `;
  }).join('');
}

function renderProjectGrid(container) {
  if (!container) return;
  const rots = [-0.9, 0.8];
  container.innerHTML = PROYECTOS.map((p, i) => `
    <a class="project-card" href="${p.href}" style="transform:rotate(${rots[i % rots.length]}deg)">
      <div class="row">
        <div>
          <div class="caso">${p.caso}</div>
          <div class="nombre">${p.nombre}</div>
        </div>
        <span class="estado">${p.estado}</span>
      </div>
      <div class="resumen">${p.resumen}</div>
    </a>
  `).join('');
}

function renderProfile() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id') || 0);
  const m = MIEMBROS.find((x) => x.id === id) || MIEMBROS[0];

  const avatarEl = document.querySelector('[data-profile-avatar]');
  if (avatarEl) {
    if (m.foto) {
      avatarEl.src = m.foto;
      avatarEl.alt = m.nombre;
      avatarEl.style.display = '';
      avatarEl.onerror = () => { avatarEl.style.display = 'none'; };
    } else {
      avatarEl.style.display = 'none';
    }
  }

  const set = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };

  set('[data-profile-nombre]', m.nombre);
  set('[data-profile-rol]', `${m.rol} · integrante de PanCM`);
  set('[data-profile-bio]', m.bio);

  const expEl = document.querySelector('[data-profile-experiencia]');
  if (expEl) {
    expEl.innerHTML = m.experiencia.map((e) => `
      <div class="exp-row">
        <span class="year">${e.anio}</span>
        <span>
          <span class="titulo">${e.titulo}</span>
          <span class="detalle">${e.detalle}</span>
        </span>
      </div>
    `).join('');
  }

  const stackEl = document.querySelector('[data-profile-stack]');
  if (stackEl) {
    stackEl.innerHTML = m.stack.map((s) => `<span>${s}</span>`).join('');
  }

  set('[data-profile-datos]', '');
  const datosEl = document.querySelector('[data-profile-datos]');
  if (datosEl) {
    datosEl.innerHTML = `${m.correo}<br />${m.ubicacion}<br />${m.disponibilidad}`;
  }

  const linkedinEl = document.querySelector('[data-profile-linkedin]');
  if (linkedinEl) {
    if (m.linkedin) {
      linkedinEl.href = m.linkedin;
      linkedinEl.textContent = m.linkedinLabel;
      linkedinEl.style.display = '';
    } else {
      linkedinEl.style.display = 'none';
    }
  }

  set('[data-profile-aporte]', m.aporte);
}

document.addEventListener('DOMContentLoaded', () => {
  initDeviceToggle();
  renderMemberGrid(document.querySelector('[data-member-grid]'));
  renderMemberGrid(document.querySelector('[data-member-grid-wide]'), { wide: true });
  renderProjectGrid(document.querySelector('[data-project-grid]'));
  renderProfile();
});
