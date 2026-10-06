import Image from "next/image";
import { site, whatsappApiPath } from "@/lib/site";

export function Hero() {
  const cta = whatsappApiPath;

  return (
    <section id="inicio" className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-paper-2" />
      <div className="pointer-events-none absolute bottom-24 left-[-6rem] h-56 w-56 rounded-full bg-[#f0d4d2]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="mb-6 text-[12px] uppercase tracking-[0.28em] text-gold">
              {site.headline} · {site.city}
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Yenifer Denis
              <span className="italic text-moss"> Duarte Leiva</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={cta}
                className="bg-moss px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-moss-deep"
              >
                Quiero una sesión a domicilio
              </a>
              <a
                href="#servicios"
                className="border border-ink/15 px-6 py-3.5 text-sm text-ink transition-colors hover:border-ink/40"
              >
                Ver qué ofrece
              </a>
            </div>
          </div>

          <div className="mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-moss/12" />
              <div className="absolute -inset-1 rounded-full ring-1 ring-moss/25" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full bg-paper-2 shadow-[0_18px_50px_rgba(92,48,58,0.18)] md:h-72 md:w-72 lg:h-80 lg:w-80">
                <Image
                  src={site.portrait}
                  alt={`${site.name}, kinesióloga`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 224px"
                  className="object-cover object-[center_12%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {site.education.map((item, index) => (
            <article
              key={item.title}
              className="border border-line bg-paper-2/80 px-6 py-7 md:px-8 md:py-8"
            >
              <p className="font-display text-sm text-leaf">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-2xl leading-snug text-ink md:text-[1.7rem]">
                {item.title}
              </h2>
              <p className="mt-3 text-[15px] text-ink-soft">{item.place}</p>
              <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-gold">
                {item.status}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
