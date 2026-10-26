export const profile = {
  firstName: 'Antony',
  lastName: 'Ayansi',
  fullName: 'Antony Elio Ayansi Huisa',
  role: 'Analista Full Stack',
  title: 'Ingeniero de Sistemas e Informática | Desarrollador Full Stack',
  location: 'Perú',
  phone: '+51 948 347 640',
  phoneHref: 'tel:+51948347640',
  whatsapp: 'https://wa.me/51948347640',
  email: 'antonyayansi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/antonyayansi/',
  github: 'https://github.com/antonyayansi',
  orcid: 'https://orcid.org/0009-0006-0051-9103',
  cvFile: '/CV_Antony_Ayansi.docx',
  summary:
    'Creo y mejoro sistemas y páginas web desde 2021. Hoy lidero el equipo técnico de Tukuy Soluciones: diseño cómo funciona el producto, lo programo y lo dejo listo para usarse todos los días. Me gusta entregar soluciones claras, seguras y fáciles de mantener.',
};

export const experience = [
  {
    company: 'Tukuy Soluciones S.A.C.',
    role: 'Líder técnico (CTO)',
    period: 'Ago 2025 – Actualidad',
    points: [
      'Dirijo el desarrollo de Tukuy Obra, una app para empresas de construcción: avance de obra, costos, reportes y cuaderno digital.',
      'Decido cómo se arma el producto, cómo se conectan las partes y cómo se publica para que el equipo avance sin fricciones.',
      'Configuro herramientas de gestión (ventas, proyectos y contabilidad) adaptadas a empresas en Perú.',
    ],
  },
  {
    company: 'SIADEG',
    role: 'Desarrollador de interfaces',
    period: 'Jun 2021 – Actualidad',
    points: [
      'Diseño y mantengo las pantallas de sistemas usados por instituciones: formularios, consultas y flujos de trabajo.',
      'Detecto y corrijo fallos para que el sistema siga funcionando con normalidad.',
      'Mejoro funciones administrativas cuidando que la información sea correcta y se pueda rastrear.',
    ],
  },
];

export const projects = [
  {
    title: 'Tukuy Obra',
    tag: 'Producto',
    description:
      'Plataforma de logística y almacén para obras (GoRe Cusco y más): ingresos NEA, salidas, saldo valorizado, heatmap de actividad y reportes. Fundador y responsable frontend.',
    stack: ['Vue', 'Laravel', 'Reportes', 'IA'],
    href: 'https://tukuyobra.pe',
    image: '/projects/tukuy-obra.webp',
    imageAlt: 'Dashboard de Tukuy Obra con métricas y gráficos',
  },
  {
    title: 'SIADEG',
    tag: 'Gobierno',
    description:
      'ERP gubernamental con módulos de presupuesto, logística, almacén, personal, patrimonio y trámite documentario. Desarrollo y mantenimiento de pantallas desde 2021.',
    stack: ['Frontend', 'APIs', 'SQL Server'],
    href: 'https://siadeg.pe',
    image: '/projects/siadeg.webp',
    imageAlt: 'Módulos del sistema SIADEG',
  },
  {
    title: 'SETA',
    tag: 'ERP a medida',
    description:
      'Sistema de seguimiento de contratos y control empresarial: tablero, flujo de caja, reportes por empresa, métricas de monto y ganancia neta, export a Excel.',
    stack: ['Reportes', 'BI', 'Contratos'],
    href: 'https://github.com/antonyayansi',
    image: '/projects/seta-erp.webp',
    imageAlt: 'Reportes SETA con gráfico de contratos',
  },
  {
    title: 'Niubiz Form',
    tag: 'Open source',
    description:
      'Librería y docs para integrar pagos Niubiz en Vue, React y Angular. API clara, seguridad PCI-DSS y soporte de tarjetas y billeteras (Yape, Plin).',
    stack: ['TypeScript', 'Niubiz', 'Docs'],
    href: 'https://docs-niubiz.netlify.app/',
    image: '/projects/niubiz.webp',
    imageAlt: 'Landing de documentación Niubiz Form',
  },
  {
    title: 'Vogui',
    tag: 'IoT + IA',
    description:
      'Dispositivo inclusivo con ESP32-CAM e IA en la nube para describir el entorno en audio a personas con discapacidad visual. Prototipo universitario con impacto social.',
    stack: ['ESP32-CAM', 'GPT-4o mini', 'Accesibilidad'],
    href: 'https://www.researchgate.net/publication/400517565_A_real-time_visual_interpretation_system_for_the_visually_impaired_using_ESP32-CAM_and_cloud-based_AI_Chat-GPT_4_O_mini',
    image: '/projects/vogui.webp',
    imageAlt: 'Demostración del dispositivo Vogui',
  },
];

export const articles = [
  {
    title:
      'A real-time visual interpretation system for the visually impaired using ESP32-CAM and cloud-based AI Chat-GPT 4 O mini',
    venue: 'ICCMA 2025 · 13th International Conference on Control, Mechatronics and Automation',
    year: '2025',
    type: 'Conferencia',
    authors: 'Antony Elio Ayansi Huisa',
    summary:
      'Sistema en tiempo real que interpreta lo que ve una cámara ESP32-CAM y lo explica con IA en la nube (GPT-4o mini), pensado para guiar a personas con discapacidad visual.',
    href: 'https://www.researchgate.net/publication/400517565_A_real-time_visual_interpretation_system_for_the_visually_impaired_using_ESP32-CAM_and_cloud-based_AI_Chat-GPT_4_O_mini',
  },
  {
    title:
      'Integrating Artificial Intelligence and Self-reports for Emotional Recognition and Management in Primary and Secondary Education',
    venue: 'Springer · Lecture Notes in Networks and Systems, vol. 1966 · ICITS',
    year: '2026',
    type: 'Capítulo',
    authors: 'Antony Elio Ayansi Huisa',
    summary:
      'Sistema ALI: combina visión por computadora (FACS), microexpresiones e autoinformes para reconocer emociones en estudiantes de primaria y secundaria en Perú. Más de 75% de precisión en Action Units y 68% de coincidencia con autoinformes.',
    href: 'https://link.springer.com/chapter/10.1007/978-3-032-27538-7_66',
    doi: '10.1007/978-3-032-27538-7_66',
  },
] as const;

export const skillGroups = [
  {
    title: 'Lo que ves',
    items: ['Páginas web', 'Apps modernas', 'Diseño responsive', 'Vue y React', 'Animaciones'],
  },
  {
    title: 'Lo que funciona detrás',
    items: ['Servidores', 'APIs', 'Laravel y Node', 'Python', 'Conexiones entre sistemas'],
  },
  {
    title: 'Datos e infraestructura',
    items: ['Bases de datos', 'Docker', 'Servidores VPS', 'Odoo', 'Control de versiones'],
  },
  {
    title: 'Cómo trabajo',
    items: ['Liderazgo técnico', 'Documentación clara', 'Resolver fallos', 'Pruebas', 'IA como apoyo'],
  },
];

export const education = [
  {
    school: 'Universidad Continental',
    detail: 'Ingeniería de Sistemas e Informática',
    degree: 'Bachiller',
    place: 'Perú',
    href: 'https://ucontinental.edu.pe/',
    logo: '/logos/continental.svg',
    logoAlt: 'Logo Universidad Continental',
  },
  {
    school: 'Instituto Superior Khipu',
    detail: 'Desarrollo de sistemas de información',
    degree: 'Técnico',
    place: 'Cusco, Perú',
    href: 'https://khipu.edu.pe/',
    logo: '/logos/khipu.png',
    logoAlt: 'Logo Instituto Khipu',
  },
];

export const highlights = [
  '1.er lugar en Transformagob Perú',
  '2 artículos científicos publicados',
  'Líder técnico y fundador de producto',
];
