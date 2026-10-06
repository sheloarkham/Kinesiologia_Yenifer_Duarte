import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="formacion"
      className="border-t border-line bg-moss-deep px-5 py-20 text-paper md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.28em] text-gold">
            Formación
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Dos bases para una rehabilitación más precisa.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {site.education.map((item, index) => (
            <article
              key={item.title}
              className="border border-white/10 bg-white/[0.04] px-7 py-8 md:min-h-[260px] md:px-8"
            >
              <p className="font-display text-4xl text-gold/80">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 font-display text-2xl leading-snug md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base text-paper/75">{item.place}</p>
              <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-gold">
                {item.status}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-3xl text-base leading-relaxed text-paper/80 md:text-lg">
          {site.name} es kinesióloga formada en la Universidad Católica Silva
          Henríquez y hoy cursa un magíster en Rehabilitación Musculoesquelética
          en la Universidad Andrés Bello. Atiende a domicilio para que la
          recuperación ocurra en el lugar donde te mueves todos los días, con un
          plan claro y trato individual.
        </p>
      </div>
    </section>
  );
}
