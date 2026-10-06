import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicios" className="border-t border-line px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Servicios</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Atención kinésica donde estás, no donde te acomoda el traslado.
          </h2>
        </div>

        <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="bg-paper p-7 md:p-9">
              <p className="font-display text-sm text-leaf">{service.number}</p>
              <h3 className="mt-4 font-display text-2xl text-ink">{service.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
