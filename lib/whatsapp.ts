export const WHATSAPP_NUMBER = (
  process.env.WHATSAPP_NUMBER ?? "56939673374"
).replace(/\D/g, "");

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Yenifer, quiero contactarme para agendar una sesión de kinesiología a domicilio.";

export type WhatsAppContact = {
  nombre?: string;
  comuna?: string;
  mensaje?: string;
};

const FIELD_LIMITS = {
  nombre: 80,
  comuna: 80,
  mensaje: 400,
} as const;

function sanitizeField(value: string | undefined, max: number): string | undefined {
  if (!value) return undefined;

  const clean = value
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!clean) return undefined;
  return clean.slice(0, max);
}

export function buildWhatsAppMessage({
  nombre,
  comuna,
  mensaje,
}: WhatsAppContact): string {
  const name = sanitizeField(nombre, FIELD_LIMITS.nombre);
  const area = sanitizeField(comuna, FIELD_LIMITS.comuna);
  const note = sanitizeField(mensaje, FIELD_LIMITS.mensaje);

  if (!name && !area && !note) {
    return DEFAULT_WHATSAPP_MESSAGE;
  }

  const parts = [
    name
      ? `Hola Yenifer, soy ${name} y quiero contactarme para agendar una sesión de kinesiología a domicilio.`
      : DEFAULT_WHATSAPP_MESSAGE,
    area ? `Vivo en ${area}.` : "",
    note ? `Motivo: ${note}` : "",
  ].filter(Boolean);

  return parts.join(" ");
}

export function buildWhatsAppUrl(contact: WhatsAppContact = {}): string {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!number) {
    throw new Error("WhatsApp number is not configured.");
  }

  const text = encodeURIComponent(buildWhatsAppMessage(contact));
  return `https://wa.me/${number}?text=${text}`;
}
