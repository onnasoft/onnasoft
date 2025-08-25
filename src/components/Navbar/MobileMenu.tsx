"use server";

import Link from "next/link";

const HIDE_BLOG = process.env.NEXT_PUBLIC_HIDE_BLOG === "true";

const translations = {
  en: {
    products: "Products",
    services: "Services",
    whyUs: "Why Us",
    blog: "Blog",
    contact: "Contact",
    getStarted: "Get started today",
    getStartedDescription: "Available now: deploy or purchase our enterprise-ready solution.",
    productItems: [
      { name: "CRM", description: "Manage customer relationships." },
      { name: "Sales", description: "Automate your sales cycle." },
      { name: "Invoicing", description: "Create and send invoices easily." },
      { name: "Inventory", description: "Control your stock in real time." },
      { name: "Accounting", description: "Keep your accounting integrated." },
      { name: "Projects", description: "Manage tasks and teams." },
      { name: "Purchasing", description: "Optimize your procurement process." },
      {
        name: "Human Resources",
        description: "Manage your staff efficiently.",
      },
    ],
    serviceItems: [
      {
        name: "Web Development",
        description: "Modern and efficient web apps.",
      },
      { name: "API Integration", description: "Seamless system connections." },
      { name: "Big Data", description: "Large-scale data analysis." },
      { name: "Data Science", description: "Predictive and smart analytics." },
      { name: "IT Outsourcing", description: "On-demand IT talent." },
      { name: "Cloud Migration", description: "Secure cloud transitions." },
      {
        name: "Business Process Automation",
        description: "Automate repetitive tasks and boost efficiency.",
      },
      {
        name: "IT Consulting",
        description: "Strategy and IT project guidance.",
      },
    ],
  },
  es: {
    products: "Productos",
    services: "Servicios",
    whyUs: "Por qué nosotros",
    blog: "Blog",
    contact: "Contacto",
    getStarted: "Comienza hoy",
    getStartedDescription: "Disponible ahora: despliega o compra nuestra solución lista para empresas.",
    productItems: [
      { name: "CRM", description: "Gestiona relaciones con clientes" },
      { name: "Ventas", description: "Automatiza tu ciclo de ventas" },
      { name: "Facturación", description: "Crea y envía facturas fácilmente" },
      { name: "Inventario", description: "Controla tu stock en tiempo real" },
      { name: "Contabilidad", description: "Lleva tu contabilidad integrada" },
      { name: "Proyectos", description: "Gestiona tareas y equipos" },
      { name: "Compras", description: "Optimiza tu proceso de adquisiciones" },
      {
        name: "Recursos Humanos",
        description: "Administra tu personal eficientemente",
      },
    ],
    serviceItems: [
      {
        name: "Desarrollo Web",
        description: "Apps web modernas y eficientes.",
      },
      {
        name: "Integración API",
        description: "Sistemas conectados sin fricción.",
      },
      { name: "Big Data", description: "Análisis de datos a gran escala." },
      {
        name: "Ciencia de Datos",
        description: "Predicción y análisis inteligente.",
      },
      { name: "Outsourcing IT", description: "Talento TI bajo demanda." },
      {
        name: "Migración a la Nube",
        description: "Transición segura a la nube.",
      },
      {
        name: "Automatización de Procesos",
        description: "Automatiza tareas repetitivas y mejora la eficiencia.",
      },
      {
        name: "Consultoría IT",
        description: "Estrategia y guía para tus proyectos IT.",
      },
    ],
  },
  // ... otros idiomas (manteniendo las mismas traducciones)
};

const productHrefs = [
  "/odoo/odoo-as-a-crm-boost-your-sales-with-an-integrated-platform",
  "/odoo/odoo-sales-accelerate-your-end-to-end-business-process",
  "/odoo/odoo-invoicing-automate-your-accounting-from-sales-to-collections",
  "/odoo/odoo-inventory-total-control-of-your-stock-in-real-time",
  "/odoo/odoo-accounting-simplify-your-financial-management-with-automation-and-total-control",
  "/odoo/odoo-projects-agile-and-collaborative-management-for-productive-teams",
  "/odoo/odoo-purchasing-optimize-your-purchases-with-automated-and-intelligent-processes",
  "/odoo/odoo-human-resources-centralize-talent-management-and-improve-productivity",
];

const serviceHrefs = [
  "/web-development/custom-web-development-create-modern-fast-and-scalable-applications",
  "/api-integration/api-integration-connect-your-systems-and-automate-key-processes",
  "/big-data/big-data-convert-large-amounts-of-data-into-intelligent-decisions",
  "/data-science/data-science-anticipate-the-future-and-make-decisions-based-on-evidence",
  "/it-outsourcing/it-outsourcing-expand-your-team-with-specialized-talent-without-complications",
  "/cloud-migration/cloud-migration-safe-and-efficient-transition-to-modern-infrastructure",
  "/case-studies/business-process-automation-scalability-and-precision-with-tailored-solutions",
  "/it-outsourcing/it-consulting-technology-strategy-for-the-sustainable-growth-of-your-company",
];

interface MobileMenuProps {
  readonly language: string;
}

export default async function MobileMenu({ language }: MobileMenuProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="lg:hidden mobile-menu">
      <div className="bg-white shadow-lg border-t">
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
          {/* Products with submenu */}
          <div className="relative">
            <input
              type="checkbox"
              id="products-toggle"
              className="products-toggle absolute opacity-0 pointer-events-none"
            />

            <label
              htmlFor="products-toggle"
              className="products-header flex items-center justify-between py-2 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <span className="font-medium text-xl">{t.products}</span>
              <svg
                className="chevron w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>

            <div className="products-submenu ml-4">
              {t.productItems.map((product, index) => (
                <Link
                  key={product.name}
                  href={`/${language}${productHrefs[index]}`}
                  className="menu-item block py-2 px-4 rounded-md transition-all duration-200"
                >
                  <div className="font-medium text-gray-800">
                    {product.name}
                  </div>
                </Link>
              ))}
              
              {/* Get Started Today Section - Solo para productos */}
              <div className="mt-2 pt-2 border-t border-gray-200">
                <Link
                  href={`https://comunity.onnasoft.us?lang=${language === "es" ? "es" : "en"}`}
                  target="_blank"
                  className="block p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="font-bold text-gray-900 text-sm">
                    {t.getStarted}
                  </div>
                  <div className="text-gray-600 text-xs mt-1">
                    {t.getStartedDescription}
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="submenu-divider"></div>

          {/* Services with submenu */}
          <div className="relative">
            <input
              type="checkbox"
              id="services-toggle"
              className="services-toggle absolute opacity-0 pointer-events-none"
            />

            <label
              htmlFor="services-toggle"
              className="services-header flex items-center justify-between py-2 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <span className="font-medium text-xl">{t.services}</span>
              <svg
                className="chevron w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>

            <div className="services-submenu ml-4">
              {t.serviceItems.map((service, index) => (
                <Link
                  key={service.name}
                  href={`/${language}${serviceHrefs[index]}`}
                  className="menu-item block py-2 px-4 rounded-md transition-all duration-200"
                >
                  <div className="font-medium text-gray-800">
                    {service.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="submenu-divider"></div>

          {/* Other menu items */}
          <Link
            href={`/${language}/company/why-choose-onnasoft-technology-tailored-to-you-results-scaled-to-your-needs`}
            className="block py-2 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            {t.whyUs}
          </Link>

          {!HIDE_BLOG && (
            <Link
              href={`/${language}/blog`}
              className="block py-2 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              {t.blog}
            </Link>
          )}

          <Link
            href={`/${language}/contact`}
            className="block py-3 px-4 bg-primary text-white rounded-md font-medium transition-all duration-300 hover:bg-primary/90 text-center mt-4"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </div>
  );
}