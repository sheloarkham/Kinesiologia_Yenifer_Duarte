import { site, whatsappApiPath } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-paper-2 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Contacto</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Agenda tu evaluación a domicilio.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Cuéntame tu nombre, comuna y qué te está pasando. El formulario te
            lleva directo a WhatsApp, con el mensaje listo para enviar.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="uppercase tracking-[0.18em] text-gold">Profesional</dt>
              <dd className="mt-1 text-lg text-ink">{site.name}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.18em] text-gold">WhatsApp</dt>
              <dd className="mt-1 text-lg text-ink">+{site.whatsapp}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.18em] text-gold">Zona</dt>
              <dd className="mt-1 text-lg text-ink">{site.coverage}</dd>
            </div>
          </dl>
        </div>

        <form
          action={whatsappApiPath}
          method="POST"
          className="border border-line bg-paper p-6 md:p-8"
        >
          <label className="block text-sm text-ink-soft">
            Nombre
            <input
              required
              name="nombre"
              maxLength={80}
              autoComplete="name"
              className="mt-2 w-full border border-line bg-transparent px-3 py-3 text-ink outline-none focus:border-moss"
              placeholder="Tu nombre"
            />
          </label>
          <label className="mt-5 block text-sm text-ink-soft">
            Comuna
            <input
              required
              name="comuna"
              maxLength={80}
              autoComplete="address-level2"
              className="mt-2 w-full border border-line bg-transparent px-3 py-3 text-ink outline-none focus:border-moss"
              placeholder="La Florida, Puente Alto..."
            />
          </label>
          <label className="mt-5 block text-sm text-ink-soft">
            ¿Qué te gustaría trabajar?
            <textarea
              name="mensaje"
              maxLength={400}
              rows={4}
              className="mt-2 w-full resize-none border border-line bg-transparent px-3 py-3 text-ink outline-none focus:border-moss"
              placeholder="Dolor de rodilla, post operatorio, movilidad..."
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full bg-moss py-3.5 text-sm font-medium text-paper transition-colors hover:bg-moss-deep"
          >
            Escribir por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
