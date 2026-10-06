import { NextRequest, NextResponse } from "next/server";
import { buildWhatsAppUrl, type WhatsAppContact } from "@/lib/whatsapp";

function readContact(
  data: URLSearchParams | FormData,
): WhatsAppContact {
  const value = (key: string) => {
    const raw = data.get(key);
    return typeof raw === "string" ? raw : undefined;
  };

  return {
    nombre: value("nombre"),
    comuna: value("comuna"),
    mensaje: value("mensaje"),
  };
}

function redirectToWhatsApp(contact: WhatsAppContact, status?: 303) {
  const url = buildWhatsAppUrl(contact);
  if (!url.startsWith("https://wa.me/")) {
    return NextResponse.json({ error: "Destino no permitido." }, { status: 400 });
  }

  return NextResponse.redirect(url, status);
}

export function GET(request: NextRequest) {
  return redirectToWhatsApp(readContact(request.nextUrl.searchParams));
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  return redirectToWhatsApp(readContact(formData), 303);
}
