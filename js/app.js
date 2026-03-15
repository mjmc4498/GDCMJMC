/**
 * Módulos DAMA-DMBOK — Gobierno de Datos y Gobierno Corporativo
 * Iconos SVG con paleta del sistema (cian / azul / índigo)
 */

const modules = [
    {
        id: 1,
        title: "Gobierno de Datos",
        desc: "Marco estratégico para la gestión formal de los datos corporativos.",
        color: "#06b6d4",
        link: "modules/01-gobierno.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>`
    },
    {
        id: 2,
        title: "Arquitectura de Datos",
        desc: "Diseño de estructuras y flujos de datos en la organización.",
        color: "#818cf8",
        link: "modules/02-arquitectura.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="9" y="14" width="6" height="7"/>
            <line x1="5.5" y1="10" x2="12" y2="14"/><line x1="18.5" y1="10" x2="12" y2="14"/>
        </svg>`
    },
    {
        id: 3,
        title: "Modelado de Datos",
        desc: "Técnicas de diseño conceptual, lógico y físico de modelos de datos.",
        color: "#34d399",
        link: "modules/03-modelado.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>`
    },
    {
        id: 4,
        title: "Almacenamiento de Datos",
        desc: "Gestión de bases de datos, infraestructura y operaciones de almacenamiento.",
        color: "#f59e0b",
        link: "modules/04-almacenamiento.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
            <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>`
    },
    {
        id: 5,
        title: "Seguridad de Datos",
        desc: "Políticas y controles para proteger la confidencialidad e integridad.",
        color: "#f43f5e",
        link: "modules/05-seguridad.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
        </svg>`
    },
    {
        id: 6,
        title: "Integración de Datos",
        desc: "Flujos ETL, interoperabilidad y consolidación entre sistemas heterogéneos.",
        color: "#06b6d4",
        link: "modules/06-integracion.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
            <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
            <line x1="4" y1="4" x2="9" y2="9"/>
        </svg>`
    },
    {
        id: 7,
        title: "Documentos y Contenido",
        desc: "Gestión de información no estructurada y flujos de contenido corporativo.",
        color: "#a78bfa",
        link: "modules/07-documentos.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
        </svg>`
    },
    {
        id: 8,
        title: "Datos Maestros y de Referencia",
        desc: "Gestión de la fuente única de verdad para entidades críticas del negocio.",
        color: "#22d3ee",
        link: "modules/08-maestros.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>`
    },
    {
        id: 9,
        title: "Data Warehousing y BI",
        desc: "Inteligencia de negocio, análisis dimensional y toma de decisiones basada en datos.",
        color: "#10b981",
        link: "modules/09-dwbi.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
            <line x1="2" y1="20" x2="22" y2="20"/>
        </svg>`
    },
    {
        id: 10,
        title: "Gestión de Metadatos",
        desc: "Gobernanza de los datos sobre datos: catálogos, linaje y semántica.",
        color: "#f97316",
        link: "modules/10-metadatos.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
        </svg>`
    },
    {
        id: 11,
        title: "Calidad de Datos",
        desc: "Dimensiones, métricas y mejora continua para garantizar datos confiables.",
        color: "#34d399",
        link: "modules/11-calidad.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>`
    },
    {
        id: 12,
        title: "Big Data e Inteligencia",
        desc: "Ecosistemas distribuidos, analítica avanzada y gobierno en entornos de alto volumen.",
        color: "#818cf8",
        link: "modules/12-bigdata.html",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('moduleGrid');

    modules.forEach(m => {
        const progress = getProgress(m.id);
        const isComplete = progress === 100;

        const card = document.createElement('div');
        card.className = 'module-card animate-fade';
        card.style.setProperty('--module-color', m.color);

        card.innerHTML = `
            <div class="module-card-body">
                <!-- Number badge -->
                <div class="module-num-badge">${String(m.id).padStart(2,'0')}</div>

                <!-- Icon wrapper -->
                <div class="module-icon-wrap" style="--module-color:${m.color}">
                    ${m.svg}
                </div>

                <!-- Title & desc -->
                <h3 class="module-card-title">${m.title}</h3>
                <p class="module-card-desc">${m.desc}</p>

                <!-- Completion badge -->
                ${isComplete ? `<div class="module-complete-badge">✓ Aprobado</div>` : ''}
            </div>

            <div class="module-card-footer">
                <!-- Progress bar -->
                <div class="progress-container">
                    <div class="progress-header">
                        <span>Progreso</span>
                        <span class="progress-pct" style="color:${m.color}">${progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width:${progress}%; background: linear-gradient(90deg, ${m.color}99, ${m.color})"></div>
                    </div>
                </div>

                <a href="${m.link}" class="module-btn ${isComplete ? 'module-btn--done' : ''}" style="--module-color:${m.color}">
                    ${isComplete ? '↩ Repasar' : 'Empezar →'}
                </a>
            </div>
        `;

        grid.appendChild(card);
    });

    // Show cert section if all done
    let done = 0;
    modules.forEach(m => { if (getProgress(m.id) === 100) done++; });
    const certSection = document.getElementById('cert-section');
    if (done === 12 && certSection) certSection.style.display = 'block';

    // Reset button
    const btnReset = document.getElementById('btn-reset-all');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (confirm('¿Seguro que deseas reiniciar TODO tu progreso? Esta acción no se puede deshacer.')) {
                for (let i = 1; i <= 12; i++) localStorage.removeItem(`module_${i}_progress`);
                localStorage.removeItem('course_completed');
                window.location.reload();
            }
        });
    }
});

function getProgress(moduleId) {
    const p = localStorage.getItem(`module_${moduleId}_progress`);
    return p ? parseInt(p) : 0;
}
