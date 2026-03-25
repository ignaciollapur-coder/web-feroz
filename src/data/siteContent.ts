import type { Service, TeamMember, Testimonial, ClientLogo } from "@/types";

// ─── HERO ──────────────────────────────────────────────────────────────────────
export const HERO = {
  headline: "Transformamos desafíos complejos en resultados concretos",
  subheadline:
    "FERZ es una consultora especializada en estrategia, operaciones y transformación organizacional para empresas que quieren crecer de manera sostenible.",
  ctaPrimary: { label: "Hablemos", href: "#contact" },
  ctaSecondary: { label: "Nuestros servicios", href: "#services" },
};

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    icon: "BarChart3",
    title: "Investigación de Mercado",
    description:
      "Si necesitas entender mejor a tus clientes, saber qué valoran, cómo deciden o por qué eligen (o no) tu producto, te ayudamos a investigar con profundidad y rigor para reducir la incertidumbre antes de decidir",
  },
  {
    icon: "Settings2",
    title: "Estudios de factibilidad",
    description:
      "Si estás evaluando lanzar un nuevo producto, ingresar a un mercado o invertir en una oportunidad y necesitás saber si realmente es viable, analizamos la demanda, el contexto y los riesgos para que decidas con mayor claridad.",
  },
];

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const ABOUT = {
  headline: "Quiénes somos",
  body: [
    "FERZ es una consultora de gestión fundada con la convicción de que las mejores soluciones nacen de la combinación entre rigor analítico y conocimiento profundo del negocio.",
    "Trabajamos junto a líderes y equipos en proyectos que requieren claridad estratégica, agilidad de ejecución y acompañamiento cercano. No dejamos decks: dejamos resultados.",
  ],
  stat1: { value: "+50", label: "proyectos completados" },
  stat2: { value: "12", label: "industrias atendidas" },
  stat3: { value: "98%", label: "clientes que nos recomiendan" },
};

// ─── TEAM ─────────────────────────────────────────────────────────────────────
export const TEAM: TeamMember[] = [
  {
    name: "Alba Massó del VAlle",
    role: "Socio fundador",
    bio: "Más de 15 años de experiencia en consultoría estratégica y transformación de negocios en América Latina.",
    photo: "/images/team/alba-perfil.jpg",
  },
  {
    name: "Ignacio Llapur",
    role: "Socia",
    bio: "Especialista en operaciones y gestión del cambio con trayectoria en empresas líderes del sector financiero e industrial.",
    photo: "/images/team/ignacio-perfil.jpg",
    objectPosition: "center 30%",
  },
  {
    name: "Santiago Vidoz",
    role: "Director de proyectos",
    bio: "Experto en desarrollo comercial y expansión de mercados con foco en resultados medibles y sostenibles.",
    photo: "/images/team/santi-perfil.jpg",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "FERZ nos ayudó a ver con claridad el camino a seguir en un momento de alta incertidumbre. Su acompañamiento fue clave para tomar decisiones con confianza.",
    author: "Martin Prez",
    role: "CEO",
    company: "Empresa S.A.",
  },
  {
    quote:
      "El equipo de FERZ combinó un análisis muy riguroso con una capacidad de ejecución que pocas consultoras tienen. Recomendaría trabajar con ellos sin dudarlo.",
    author: "Nombre Apellido",
    role: "Directora de Operaciones",
    company: "Empresa S.A.",
  },
  {
    quote:
      "Logramos resultados que no creíamos posibles en el plazo que habíamos definido. FERZ fue un socio estratégico real, no solo un consultor externo.",
    author: "Nombre Apellido",
    role: "Gerente General",
    company: "Empresa S.A.",
  },
];

// ─── CLIENT LOGOS ─────────────────────────────────────────────────────────────
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Cliente 1", src: "/images/logos/client-1.svg" },
  { name: "Cliente 2", src: "/images/logos/client-2.svg" },
  { name: "Cliente 3", src: "/images/logos/client-3.svg" },
  { name: "Cliente 4", src: "/images/logos/client-4.svg" },
  { name: "Cliente 5", src: "/images/logos/client-5.svg" },
];

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const CONTACT = {
  headline: "Hablemos de tu proyecto",
  subheadline:
    "Completá el formulario y nos comunicamos en menos de 24 horas.",
  email: "contacto@ferzconsultoria.com",
  serviceOptions: [
    "Estrategia y planificación",
    "Mejora operacional",
    "Transformación organizacional",
    "Desarrollo comercial",
    "Otro",
  ],
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: "Estrategia con propósito. Resultados concretos.",
  copyright: `© ${new Date().getFullYear()} FERZ Consultoría. Todos los derechos reservados.`,
};
