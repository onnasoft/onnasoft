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
  fr: {
    products: "Produits",
    services: "Services",
    whyUs: "Pourquoi nous",
    blog: "Blog",
    contact: "Contact",
    productItems: [
      { name: "CRM", description: "Gérez les relations clients." },
      { name: "Ventes", description: "Automatisez votre cycle de ventes." },
      {
        name: "Facturation",
        description: "Créez et envoyez des factures facilement.",
      },
      {
        name: "Inventaire",
        description: "Contrôlez votre stock en temps réel.",
      },
      {
        name: "Comptabilité",
        description: "Gardez votre comptabilité intégrée.",
      },
      { name: "Projets", description: "Gérez tâches et équipes." },
      { name: "Achats", description: "Optimisez votre processus d'achat." },
      {
        name: "Ressources Humaines",
        description: "Gérez votre personnel efficacement.",
      },
    ],
    serviceItems: [
      {
        name: "Développement Web",
        description: "Applications web modernes et efficaces.",
      },
      {
        name: "Intégration d'API",
        description: "Connexion fluide des systèmes.",
      },
      {
        name: "Big Data",
        description: "Analyse de grandes volumes de données.",
      },
      {
        name: "Science des Données",
        description: "Analyse prédictive intelligente.",
      },
      { name: "Externalisation IT", description: "Talents IT à la demande." },
      {
        name: "Migration vers le Cloud",
        description: "Transition cloud sécurisée.",
      },
      {
        name: "Automatisation des Processus",
        description: "Automatisez les tâches et gagnez en efficacité.",
      },
      { name: "Conseil IT", description: "Stratégie et accompagnement IT." },
    ],
  },
  ja: {
    products: "製品",
    services: "サービス",
    whyUs: "選ばれる理由",
    blog: "ブログ",
    contact: "お問い合わせ",
    productItems: [
      { name: "CRM", description: "顧客関係を管理します。" },
      { name: "販売", description: "販売サイクルを自動化します。" },
      { name: "請求", description: "簡単に請求書を作成・送信。" },
      { name: "在庫", description: "リアルタイムで在庫を管理。" },
      { name: "会計", description: "会計を統合して管理。" },
      { name: "プロジェクト", description: "タスクとチームを管理。" },
      { name: "購買", description: "購買プロセスを最適化。" },
      { name: "人事", description: "スタッフを効率的に管理。" },
    ],
    serviceItems: [
      { name: "ウェブ開発", description: "モダンで効率的なWebアプリ。" },
      { name: "API統合", description: "スムーズなシステム接続。" },
      { name: "ビッグデータ", description: "大規模なデータ分析。" },
      { name: "データサイエンス", description: "予測とスマート分析。" },
      { name: "ITアウトソーシング", description: "必要なときにIT人材を提供。" },
      { name: "クラウド移行", description: "安全なクラウド移行。" },
      { name: "業務自動化", description: "繰り返し作業を自動化し効率化。" },
      { name: "ITコンサルティング", description: "戦略とITプロジェクト支援。" },
    ],
  },
  zh: {
    products: "产品",
    services: "服务",
    whyUs: "为何选择我们",
    blog: "博客",
    contact: "联系",
    productItems: [
      { name: "CRM", description: "管理客户关系。" },
      { name: "销售", description: "自动化销售流程。" },
      { name: "开票", description: "轻松创建和发送发票。" },
      { name: "库存", description: "实时控制库存。" },
      { name: "会计", description: "保持会计集成。" },
      { name: "项目", description: "管理任务和团队。" },
      { name: "采购", description: "优化采购流程。" },
      { name: "人力资源", description: "高效管理员工。" },
    ],
    serviceItems: [
      { name: "网站开发", description: "现代高效的网页应用。" },
      { name: "API集成", description: "系统无缝连接。" },
      { name: "大数据", description: "大规模数据分析。" },
      { name: "数据科学", description: "预测和智能分析。" },
      { name: "IT外包", description: "按需提供IT人才。" },
      { name: "云迁移", description: "安全高效的云迁移。" },
      { name: "业务流程自动化", description: "自动化重复任务，提升效率。" },
      { name: "IT咨询", description: "IT项目策略与指导。" },
    ],
  },
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
            href={`/${language}/#why-us`}
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
            href={`/${language}/#contact`}
            className="block py-2 px-4 bg-primary text-white rounded-md font-medium transition-all duration-300 hover:bg-primary/90 text-center mt-4"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </div>
  );
}
