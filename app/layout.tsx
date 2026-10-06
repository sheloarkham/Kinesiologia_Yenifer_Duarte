import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.shortName} · ${site.profession} a domicilio`,
  description: `${site.name}, kinesióloga. ${site.tagline}`,
  openGraph: {
    title: `${site.shortName} · Kinesiología a domicilio`,
    description: site.tagline,
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body
        className={`${display.variable} ${sans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
