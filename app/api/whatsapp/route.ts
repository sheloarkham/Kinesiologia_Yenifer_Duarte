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

export function GET(request: NextRequest) {
  return NextResponse.redirect(
    buildWhatsAppUrl(readContact(request.nextUrl.searchParams)),
  );
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  return NextResponse.redirect(buildWhatsAppUrl(readContact(formData)), 303);
}
