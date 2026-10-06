import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-ink-soft">
            {site.profession} · {site.headline}
          </p>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-ink-soft">
          Sitio de contacto profesional. La información es orientativa y no
          reemplaza una evaluación kinésica.
        </p>
      </div>
    </footer>
  );
}
