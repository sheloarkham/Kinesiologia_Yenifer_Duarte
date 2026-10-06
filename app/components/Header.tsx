"use client";

import Image from "next/image";
import { useState } from "react";
import { site, whatsappApiPath } from "@/lib/site";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#formacion", label: "Formación" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const cta = whatsappApiPath;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-moss/25">
            <Image
              src={site.portrait}
              alt={site.shortName}
              fill
              sizes="40px"
              className="object-cover object-[center_12%]"
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-[15px] text-ink">
              {site.shortName}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              {site.profession}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={cta}
            className="bg-moss px-4 py-2 text-[13px] font-medium text-paper transition-colors hover:bg-moss-deep"
          >
            Agendar
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-line lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menú</span>
            <span className="flex w-4 flex-col gap-1">
              <span className="block h-px bg-ink" />
              <span className="block h-px bg-ink" />
              <span className="block h-px bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-paper px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-sm text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
