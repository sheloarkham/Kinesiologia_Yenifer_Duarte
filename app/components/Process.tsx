import { site, steps } from "@/lib/site";

export function Process() {
  return (
    <section id="proceso" className="border-t border-line px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Cómo funciona</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Tres pasos para empezar en casa.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">{site.coverage}</p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-line pt-6">
              <p className="font-display text-3xl text-leaf">{step.number}</p>
              <h3 className="mt-5 font-display text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
