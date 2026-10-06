export type EducationItem = {
  title: string;
  place: string;
  status: string;
};

export type ServiceItem = {
  number: string;
  title: string;
  text: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  profession: string;
  headline: string;
  tagline: string;
  city: string;
  coverage: string;
  education: EducationItem[];
  portrait: string;
  whatsapp: string;
  email: string;
  instagram: string;
};

export const site: SiteConfig = {
  name: "Yenifer Denis Duarte Leiva",
  shortName: "Yenifer Duarte",
  profession: "Kinesióloga",
  headline: "Kinesiología a domicilio",
  tagline:
    "Rehabilitación personalizada en tu casa, con la cercanía de una atención individual y el respaldo de la práctica clínica.",
  city: "Santiago",
  coverage:
    "Atención a domicilio en Santiago, con prioridad en La Florida y comunas cercanas.",
  portrait: "/yenifer-duarte.jpg",
  education: [
    {
      title: "Kinesióloga",
      place: "Universidad Católica Silva Henríquez",
      status: "Título profesional",
    },
    {
      title: "Magíster en Rehabilitación Musculoesquelética",
      place: "Universidad Andrés Bello",
      status: "En curso",
    },
  ],
  whatsapp: process.env.WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "56939673374",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
};

export const whatsappApiPath = "/api/whatsapp";

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Kinesiología a domicilio",
    text: "La sesión ocurre en tu casa. Menos traslado, más constancia y un tratamiento pensado para el espacio donde te mueves todos los días.",
  },
  {
    number: "02",
    title: "Rehabilitación musculoesquelética",
    text: "Dolor, lesión o limitación de movimiento. Evaluación y plan de ejercicios para recuperar función con seguridad.",
  },
  {
    number: "03",
    title: "Acompañamiento post operatorio",
    text: "Recuperación progresiva después de una cirugía, con seguimiento cercano y ajustes según cómo evoluciona tu cuerpo.",
  },
  {
    number: "04",
    title: "Movilidad y autonomía en el hogar",
    text: "Trabajo orientado a adultos mayores o personas que necesitan moverse con más seguridad dentro de su propia casa.",
  },
];

export const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Conversamos tu caso",
    text: "Me escribes, me cuentas qué te pasa y coordinamos día, horario y comuna.",
  },
  {
    number: "02",
    title: "Evaluación en tu domicilio",
    text: "Voy a tu casa, evalúo movilidad, dolor y objetivos, y te explico el plan con claridad.",
  },
  {
    number: "03",
    title: "Sesiones en tu espacio",
    text: "Trabajamos en tu living, pieza o el lugar que tengas. El plan se ajusta a tu evolución.",
  },
];
