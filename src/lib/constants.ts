import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Equipo", href: "#team" },
  { label: "Clientes", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  // twitter: "https://twitter.com",
};

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ferzconsultoria.com";
