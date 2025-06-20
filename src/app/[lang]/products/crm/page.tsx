"use server";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PostTranslation } from "@/types/models";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";

export interface PostPageProps {
  readonly language: string;
  readonly pathname: string;
  readonly post: string;
  readonly category: string;
}

const PostPage: React.FC<PostPageProps> = async ({
  pathname,
  language,
  post,
  category,
}) => {
  const article: PostTranslation = {
    category: "",
    translatedTitle: "",
    translatedContent: "",
    translatedExcerpt: "",
    slug: "",
    id: 17,
    locale: "",
    createdAt: "",
    updatedAt: "",
    post: {
      author: {
        name: "",
        photo: {
          url: "http://localhost:3200/api/media/file/introduction-to-sql-the-universal-language-for-relational-databases-1.webp",
        },
        linkedIn: "",
      },
      coverImage: {
        url: "http://localhost:3200/api/media/file/introduction-to-sql-the-universal-language-for-relational-databases-1.webp",
        alt: "Introduction to SQL",
      },
    },
  };

  const content = `
# Odoo como CRM: Una Solución Integral para la Gestión de Clientes

Odoo es una plataforma empresarial de código abierto que ofrece un ecosistema de aplicaciones altamente integradas. Entre ellas, su módulo de CRM (Customer Relationship Management) destaca como una solución poderosa para la gestión de relaciones con clientes.

## ¿Qué es un CRM?

Un CRM permite a las empresas gestionar sus interacciones con clientes actuales y potenciales. Su objetivo principal es mejorar las relaciones comerciales, aumentar la retención de clientes y optimizar procesos de ventas.

## Beneficios de Odoo como CRM

### 1. Integración total
Odoo CRM se conecta de forma nativa con otros módulos como Ventas, Facturación, Proyectos y Marketing. Esta integración permite una visión completa del cliente desde una sola plataforma.

### 2. Interfaz intuitiva
Su diseño moderno y amigable permite a los equipos adaptarse rápidamente sin una curva de aprendizaje pronunciada.

### 3. Gestión de oportunidades
Puedes seguir cada oportunidad de venta desde la calificación inicial hasta el cierre, asignando responsables y etapas, y visualizando todo en un tablero tipo kanban.

### 4. Automatización y recordatorios
Automatiza tareas repetitivas, configura seguimientos automáticos, y recibe alertas cuando se necesita una acción.

### 5. Reportes avanzados
Obtén informes en tiempo real sobre el rendimiento del equipo de ventas, oportunidades ganadas y conversiones.

## Casos de uso

- **Empresas B2B** que necesitan seguimiento constante de negociaciones largas.
- **Equipos de ventas** que buscan visibilidad total de su embudo de ventas.
- **Startups** que quieren una solución escalable y flexible sin depender de múltiples herramientas desconectadas.

## Comparativa con otros CRM

| Característica       | Odoo CRM         | HubSpot CRM    | Salesforce     |
|----------------------|------------------|----------------|----------------|
| Integración ERP      | ✔️ Nativa         | ❌ Limitada     | ✔️ Con coste   |
| Código abierto       | ✔️ Sí             | ❌ No           | ❌ No           |
| Costo                | Bajo              | Medio           | Alto            |
| Personalización      | Alta              | Media           | Alta            |

## Conclusión

Odoo CRM es una herramienta potente, flexible y económica que se adapta tanto a pequeñas como grandes empresas. Su capacidad de integrarse completamente con otros módulos lo convierte en una opción ideal para quienes buscan una solución centralizada y eficaz.

---

¿Listo para implementar Odoo como CRM en tu negocio? ¡Contáctanos y te ayudamos a comenzar!`

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} pathname={pathname} />
      <main className="animate-fade-in-down">
        <div className="mt-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="lg:col-span-3">
            <div className="mb-4">
              <span className="inline-flex items-center bg-primary-light text-white px-3 py-0.5 rounded-full text-sm font-medium">
                <i className="fas fa-cloud mr-2"></i>{" "}
                {article.category || "General"}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.translatedTitle}
            </h1>

            <div className="relative h-64 overflow-hidden rounded-lg mb-6">
              <Image
                src={article?.post?.coverImage?.url || ""}
                alt={article?.post?.coverImage?.alt || "Cover Image"}
                width={1024}
                height={768}
                className="absolute top-[-20%] left-0 w-full h-auto object-cover"
              />
            </div>

            <ReactMarkdown
              remarkPlugins={[
                remarkGfm,
                remarkBreaks,
                remarkMath,
                remarkDirective,
                remarkFrontmatter,
              ]}
              rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>

        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default PostPage;
