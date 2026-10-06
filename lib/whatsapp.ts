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

export function buildWhatsAppMessage({
  nombre,
  comuna,
  mensaje,
}: WhatsAppContact): string {
  const name = nombre?.trim();
  const area = comuna?.trim();
  const note = mensaje?.trim();

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
  const text = encodeURIComponent(buildWhatsAppMessage(contact));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
