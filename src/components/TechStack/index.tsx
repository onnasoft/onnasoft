import React from "react";
import { translations } from "./translations";

export const techRoutes: Record<string, string> = {
  JavaScript: "/web-development/what-is-javascript-and-why-is-it-so-important-for-the-web",
  TypeScript: "/web-development/getting-started-with-typescript-a-practical-guide-for-javascript-developers",
  Python: "/data-science/boost-your-decisions-with-python-intelligent-data-analysis-for-your-business",
  Go: "/web-development/why-do-we-use-go-at-onnasoft-efficiency-and-scalability-without-complications",
  SQL: "/web-development/why-does-your-company-need-sql",
  NestJS: "/web-development/nestjs-the-solid-foundation-for-building-scalable-secure-and-fast-software",
  "Next.JS": "/web-development/nextjs-modern-websites-fast-and-ready-to-grow",
  Bootstrap: "/web-development/why-is-bootstrap-still-a-smart-choice-for-your-website",
  Tailwind: "/web-development/tailwind-css-unlimited-customization-for-your-website",
  PySpark: "/big-data/pyspark-power-your-decisions-with-big-data",
  PyTorch: "/data-science/boost-your-advanced-analysis-with-pytorch",
  "REST APIs": "/api-integration/rest-apis-reliable-connectivity-for-your-business",
  SOAP: "/api-integration/soap-secure-and-structured-business-integrations",
  GraphQL: "/api-integration/graphql-precision-and-efficiency-for-your-modern-integrations",
  Stripe: "/api-integration/secure-and-fast-payments-with-stripe-the-ideal-solution-for-your-business",
  MercadoPago: "/api-integration/easy-cobra-in-latin-america-with-mercadopago-fast-local-and-secure",
  PayPal: "/api-integration/simplify-global-payments-with-paypal-trust-and-international-reach",
  "Pruebas Unitarias": "",
  "Pruebas de Integración": "",
  SonarQube: "/web-development/improving-code-quality-with-sonarqube-a-preventative-approach-for-professional-development",
  "Automatización de Pruebas": "",
  "Socket.dev": "/web-development/proactive-security-in-development-with-socketdev-protect-your-code-from-dependencies",
  Hexagonal: "/web-development/hexagonal-architecture-the-secret-for-flexible-and-scalable-applications",
  Microservicios: "/web-development/microservices-modern-technology-for-dynamic-businesses",
  "Orientada a Eventos": "",
  CQRS: "",
  AWS: "",
  Cloudflare: "",
  Docker: "",
  Redis: "",
  Metabase: "",
  "AWS CloudWatch": "",
  "AWS CloudTrail": "",
  "AWS Config": "",
  OAuth: "",
  "Autenticación Google": "",
  "Autenticación Microsoft": "",
  "PCI DSS": "",
  DIAN: "",
  "Facturación Electrónica": "",
  WebSockets: "",
  WebRTC: "",
  MCP: "",
};

interface TechnologyProps {
  readonly language: string;
}

const TechStack: React.FC<TechnologyProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-16 animate-fade-in-down">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="space-y-12">
          {t.technologies.map((category) => (
            <div key={category.category}>
              <h3 className=" text-2xl font-bold mb-6 text-center md:text-left text-gray-800 dark:text-gray-200">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:scale-105 duration-300 flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-3 bg-primary-light text-white rounded-full w-14 h-14 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h4 className=" font-bold text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </h4>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center w-full">
                      <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        {tech.tooltip}
                        <svg
                          className="absolute text-gray-800 h-2 w-full left-0 top-full"
                          x="0px"
                          y="0px"
                          viewBox="0 0 255 255"
                        >
                          <polygon
                            className="fill-current"
                            points="0,0 127.5,127.5 255,0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
