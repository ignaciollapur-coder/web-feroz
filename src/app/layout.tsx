import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Headings — closest match to Bower
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FERZ Consultoría | Estrategia y transformación organizacional",
  description:
    "FERZ es una consultora especializada en estrategia, operaciones y transformación organizacional para empresas que quieren crecer de manera sostenible.",
  openGraph: {
    title: "FERZ Consultoría",
    description:
      "Estrategia con propósito. Resultados concretos.",
    url: "https://ferzconsultoria.com",
    siteName: "FERZ Consultoría",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
