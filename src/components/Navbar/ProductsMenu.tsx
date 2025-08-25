import Link from "next/link";

const translations = {
  en: {
    getStarted: "Get started today",
    getStartedDescription:
      "Available now: deploy or purchase our enterprise-ready solution.",
    products: "Products",
    items: [
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
  },
  es: {
    getStarted: "Comienza hoy",
    getStartedDescription:
      "Disponible ahora: despliega o compra nuestra solución lista para empresas.",
    products: "Productos",
    items: [
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
  },
  fr: {
    getStarted: "Commencez dès aujourd'hui",
    getStartedDescription:
      "Disponible maintenant : déployez ou achetez notre solution prête pour les entreprises.",
    products: "Produits",
    items: [
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
      { name: "Achats", description: "Optimisez votre processus d’achat." },
      {
        name: "Ressources Humaines",
        description: "Gérez votre personnel efficacement.",
      },
    ],
  },
  ja: {
    getStarted: "今日から始めましょう",
    getStartedDescription:
      "今すぐ利用可能：エンタープライズ向けのソリューションを展開または購入してください。",
    products: "製品",
    items: [
      { name: "CRM", description: "顧客関係を管理します。" },
      { name: "販売", description: "販売サイクルを自動化します。" },
      { name: "請求", description: "簡単に請求書を作成・送信。" },
      { name: "在庫", description: "リアルタイムで在庫を管理。" },
      { name: "会計", description: "会計を統合して管理。" },
      { name: "プロジェクト", description: "タスクとチームを管理。" },
      { name: "購買", description: "購買プロセスを最適化。" },
      { name: "人事", description: "スタッフを効率的に管理。" },
    ],
  },
  zh: {
    getStarted: "今天就开始",
    getStartedDescription: "现在就可以使用：部署或购买我们的企业级解决方案。",
    products: "产品",
    items: [
      { name: "CRM", description: "管理客户关系。" },
      { name: "销售", description: "自动化销售流程。" },
      { name: "开票", description: "轻松创建和发送发票。" },
      { name: "库存", description: "实时控制库存。" },
      { name: "会计", description: "保持会计集成。" },
      { name: "项目", description: "管理任务和团队。" },
      { name: "采购", description: "优化采购流程。" },
      { name: "人力资源", description: "高效管理员工。" },
    ],
  },
};

const hrefs = [
  "/odoo/odoo-as-a-crm-boost-your-sales-with-an-integrated-platform",
  "/odoo/odoo-sales-accelerate-your-end-to-end-business-process",
  "/odoo/odoo-invoicing-automate-your-accounting-from-sales-to-collections",
  "/odoo/odoo-inventory-total-control-of-your-stock-in-real-time",
  "/odoo/odoo-accounting-simplify-your-financial-management-with-automation-and-total-control",
  "/odoo/odoo-projects-agile-and-collaborative-management-for-productive-teams",
  "/odoo/odoo-purchasing-optimize-your-purchases-with-automated-and-intelligent-processes",
  "/odoo/odoo-human-resources-centralize-talent-management-and-improve-productivity",
];

interface ProductsMenuProps {
  readonly language: string;
}

export default async function ProductsMenu({ language }: ProductsMenuProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  return (
    <div className="relative group">
      <button className="flex items-center nav-link group-hover:text-primary">
        {t.products}
        <svg
          className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute z-10 mt-1 left-1/2 transform -translate-x-1/2 min-w-[650px] rounded-md bg-white ring-1 ring-slate-200 ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="grid grid-cols-2 p-2">
          {t.items.map((item, i) => (
            <Link
              prefetch={false}
              key={item.name}
              href={`/${language}${hrefs[i]}`}
              className="block px-4 py-2 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="text-gray-900 font-medium">{item.name}</div>
              <div className="text-gray-500 text-sm">{item.description}</div>
            </Link>
          ))}
        </div>
        <div className="p-2 pt-0 pb-4">
          <Link
            href={`https://comunity.onnasoft.us?lang=${language === "es" ? "es" : "en"}`}
            target="_blank"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            <div className="text-gray-900 font-bold">{t.getStarted}</div>
            <div className="text-gray-500 text-sm font-bold">
              {t.getStartedDescription}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
