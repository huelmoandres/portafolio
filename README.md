# Portafolio Personal de Andrés Huelmo

Este proyecto es un portafolio personal desarrollado con Next.js 15 y Tailwind CSS, diseñado para mostrar mis habilidades, proyectos y experiencia como desarrollador web.

## Características

- **Diseño Responsivo**: Adaptado a todos los tamaños de pantalla
- **Secciones Completas**: Hero, Sobre Mí, Habilidades, Proyectos y Contacto
- **Formulario de Contacto**: Con validación mediante Zod y envío de correos con Resend
- **Optimizado para SEO**: Metadatos y estructura semántica
- **Modo Claro/Oscuro**: Soporte para cambio de tema

## Tecnologías Utilizadas

- **Next.js 15**: Framework de React con App Router
- **TypeScript**: Para tipado estático y mejor desarrollo
- **Tailwind CSS**: Para estilos y diseño responsivo
- **Zod**: Validación de formularios
- **Resend**: Servicio para envío de correos electrónicos
- **Lucide React**: Iconos vectoriales

## Estructura del Proyecto

\`\`\`
├── app/                  # Directorio principal de Next.js App Router
│   ├── api/              # API Routes para el backend
│   │   └── send/         # Endpoint para envío de correos
│   ├── globals.css       # Estilos globales
│   ├── layout.tsx        # Layout principal de la aplicación
│   └── page.tsx          # Página principal
├── components/           # Componentes React reutilizables
│   ├── about.tsx         # Sección Sobre Mí
│   ├── contact.tsx       # Formulario de contacto
│   ├── footer.tsx        # Pie de página
│   ├── hero.tsx          # Sección principal/hero
│   ├── navbar.tsx        # Barra de navegación
│   ├── projects.tsx      # Sección de proyectos
│   └── skills.tsx        # Sección de habilidades
├── lib/                  # Utilidades y funciones auxiliares
│   ├── constants.tsx      # Constantes y datos reutilizables
│   ├── email-template.ts # Plantilla para correos electrónicos
│   └── form-utils.ts     # Utilidades para formularios
├── public/               # Archivos estáticos
│   ├── cv.pdf            # Curriculum Vitae
│   └── images/           # Imágenes del sitio
│       ├── profile/      # Fotos de perfil
│       └── projects/     # Imágenes de proyectos
└── types/                # Definiciones de tipos TypeScript
    ├── contact.ts        # Tipos para el formulario de contacto
    ├── project.ts        # Tipos para proyectos
    └── skill.ts          # Tipos para habilidades
\`\`\`

## Configuración

### Requisitos Previos

- Node.js 18.0 o superior
- npm o yarn

### Instalación

1. Clona el repositorio:
   \`\`\`bash
   git clone https://github.com/tu-usuario/portafolio.git
   cd portafolio
   \`\`\`

2. Instala las dependencias:
   \`\`\`bash
   npm install
   # o
   yarn install
   \`\`\`

3. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
   \`\`\`
   RESEND_API_KEY=tu_api_key_de_resend
   \`\`\`

4. Inicia el servidor de desarrollo:
   \`\`\`bash
   npm run dev
   # o
   yarn dev
   \`\`\`

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue

Este proyecto está optimizado para ser desplegado en Vercel:

1. Sube tu código a un repositorio de GitHub.
2. Conéctalo a Vercel.
3. Configura las variables de entorno en el panel de Vercel.
4. ¡Listo! Tu portafolio estará en línea.

## Personalización

### Datos Personales

Puedes modificar tus datos personales, proyectos y habilidades en el archivo `lib/constants.tsx`.

### Imágenes

Reemplaza las imágenes en la carpeta `public/images/` con tus propias imágenes.

### Estilos

Los estilos principales se pueden modificar en:
- `app/globals.css` para estilos globales
- `tailwind.config.ts` para personalizar los colores y temas

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o sugerencia, no dudes en contactarme:

- Email: huelmoandres@gmail.com
- LinkedIn: [linkedin.com/in/andres-huelmo-rijo](https://linkedin.com/in/andres-huelmo-rijo)
