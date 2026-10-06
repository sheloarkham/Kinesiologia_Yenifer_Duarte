# Yenifer Duarte · Kinesiología a domicilio

Sitio de contacto profesional de **Yenifer Denis Duarte Leiva**, kinesióloga. Muestra su formación, los servicios a domicilio y lleva a WhatsApp para agendar.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

Pensado para subirlo a **Vercel** (plan gratis). El repo es [sheloarkham/Kinesiologia_Yenifer_Duarte](https://github.com/sheloarkham/Kinesiologia_Yenifer_Duarte).

## WhatsApp

El número se configura con `WHATSAPP_NUMBER` (por defecto `56939673374`).

- `GET /api/whatsapp` abre el chat con un mensaje listo.
- El formulario hace `POST /api/whatsapp` y arma el mensaje con nombre, comuna y motivo.

Copia `.env.example` a `.env.local` si quieres cambiar el número sin tocar el código.

## Contenido

Textos, servicios y datos de contacto están en `lib/site.ts`. La foto está en `public/yenifer-duarte.jpg`.
