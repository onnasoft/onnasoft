import React from "react";
import Link from "next/link";
import { translations } from "./translations";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiPostgresql,
  SiNestjs,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiApachespark,
  SiPytorch,
  SiStripe,
  SiMercadopago,
  SiJest,
  SiTestinglibrary,
  SiSonarqube,
  SiSocketdotio,
  SiAmazonwebservices,
  SiCloudflare,
  SiDocker,
  SiRedis,
  SiMetabase,
  SiAmazoncloudwatch,
  SiAuth0,
  SiGoogle,
  SiWebrtc,
  SiRabbitmq,
} from "react-icons/si";

import {
  FaCode,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaLayerGroup,
  FaMicrosoft,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaNetworkWired,
} from "react-icons/fa";

import { IoMdApps } from "react-icons/io";
import { GiHexagonalNut } from "react-icons/gi";

export const techRoutes: Record<string, string> = {
  JavaScript:
    "/web-development/what-is-javascript-and-why-is-it-so-important-for-the-web",
  TypeScript:
    "/web-development/getting-started-with-typescript-a-practical-guide-for-javascript-developers",
  Python:
    "/data-science/boost-your-decisions-with-python-intelligent-data-analysis-for-your-business",
  Go: "/web-development/why-do-we-use-go-at-onnasoft-efficiency-and-scalability-without-complications",
  SQL: "/web-development/why-does-your-company-need-sql",
  NestJS:
    "/web-development/nestjs-the-solid-foundation-for-building-scalable-secure-and-fast-software",
  "Next.JS": "/web-development/nextjs-modern-websites-fast-and-ready-to-grow",
  Bootstrap:
    "/web-development/why-is-bootstrap-still-a-smart-choice-for-your-website",
  Tailwind:
    "/web-development/tailwind-css-unlimited-customization-for-your-website",
  PySpark: "/big-data/pyspark-power-your-decisions-with-big-data",
  PyTorch: "/data-science/boost-your-advanced-analysis-with-pytorch",
  "REST APIs":
    "/api-integration/rest-apis-reliable-connectivity-for-your-business",
  SOAP: "/api-integration/soap-secure-and-structured-business-integrations",
  GraphQL:
    "/api-integration/graphql-precision-and-efficiency-for-your-modern-integrations",
  Stripe:
    "/api-integration/secure-and-fast-payments-with-stripe-the-ideal-solution-for-your-business",
  MercadoPago:
    "/api-integration/easy-cobra-in-latin-america-with-mercadopago-fast-local-and-secure",
  PayPal:
    "/api-integration/simplify-global-payments-with-paypal-trust-and-international-reach",
  UnitTesting: "/web-development/essential-guide-to-unit-testing-improve-the-reliability-of-your-code",
  "Integration Testing": "/web-development/integration-tests-ensuring-your-components-work-together",
  SonarQube:
    "/web-development/improving-code-quality-with-sonarqube-a-preventative-approach-for-professional-development",
  "Test Automation": "",
  SocketDev:
    "/web-development/proactive-security-in-development-with-socketdev-protect-your-code-from-dependencies",
  Hexagonal:
    "/web-development/hexagonal-architecture-the-secret-for-flexible-and-scalable-applications",
  Microservices:
    "/web-development/microservices-modern-technology-for-dynamic-businesses",
  "Event-Driven":
    "/web-development/event-driven-architecture-fast-response-and-automated-processes",
  CQRS: "/web-development/cqrs-more-speed-and-control-in-your-enterprise-applications",
  AWS: "/web-development/aws-cloud-infrastructure-for-businesses-that-want-to-scale-without-limits",
  Cloudflare:
    "/web-development/cloudflare-security-and-speed-for-your-website-without-the-complexity",
  Docker:
    "/web-development/docker-modern-technology-for-stable-and-scalable-applications",
  Redis: "/web-development/redis-speed-and-efficiency-in-real-time",
  Metabase: "/big-data/metabase-intelligent-decisions-based-on-your-data",
  "AWS CloudWatch":
    "/cloud-migration/monitor-your-business-in-real-time-with-aws-cloudwatch",
  "AWS CloudTrail": "/cloud-migration/transparent-audit-with-aws-cloudtrail",
  AWSConfig: "/web-development/aws-config-control-and-compliance",
  OAuth: "/web-development/secure-authentication-with-oauth",
  GoogleAuth:
    "/web-development/smart-integrations-with-google-for-your-business",
  MicrosoftAuth:
    "/web-development/connectivity-and-productivity-with-microsoft-services",
  PCI_DSS:
    "/web-development/pci-dss-compliance-security-of-payments-at-the-heart-of-your-platform",
  DIAN: "/odoo/compliance-with-dian-we-automate-your-electronic-invoicing",
  EInvoicing:
    "/odoo/electronic-invoicing-in-colombia-what-every-company-needs-to-know",
  WebSockets: "/web-development/real-time-communication-with-websockets",
  WebRTC: "/web-development/webrtc-real-time-communication-between-users",
  MCP: "/web-development/distributed-systems-communication-protocol",
};

export const techIcons = {
  JavaScript: <SiJavascript className="text-2xl" />,
  TypeScript: <SiTypescript className="text-2xl" />,
  Python: <SiPython className="text-2xl" />,
  Go: <SiGo className="text-2xl" />,
  SQL: <SiPostgresql className="text-2xl" />,
  NestJS: <SiNestjs className="text-2xl" />,
  "Next.JS": <SiNextdotjs className="text-2xl" />,
  Bootstrap: <SiBootstrap className="text-2xl" />,
  Tailwind: <SiTailwindcss className="text-2xl" />,
  PySpark: <SiApachespark className="text-2xl" />,
  PyTorch: <SiPytorch className="text-2xl" />,
  "REST APIs": <FaCode className="text-2xl" />,
  SOAP: <FaExchangeAlt className="text-2xl" />,
  GraphQL: <IoMdApps className="text-2xl" />,
  Stripe: <SiStripe className="text-2xl" />,
  MercadoPago: <SiMercadopago className="text-2xl" />,
  PayPal: <FaMoneyBillWave className="text-2xl" />,
  UnitTesting: <SiJest className="text-2xl" />,
  "Integration Testing": <SiTestinglibrary className="text-2xl" />,
  SonarQube: <SiSonarqube className="text-2xl" />,
  "Test Automation": <SiJest className="text-2xl" />,
  SocketDev: <SiSocketdotio className="text-black dark:text-white text-2xl" />,
  Hexagonal: <GiHexagonalNut className="text-2xl" />,
  Microservices: <FaLayerGroup className="text-2xl" />,
  "Event-Driven": <SiRabbitmq className="text-2xl" />,
  CQRS: <FaExchangeAlt className="text-2xl" />,
  AWS: <SiAmazonwebservices className="text-2xl" />,
  Cloudflare: <SiCloudflare className="text-2xl" />,
  Docker: <SiDocker className="text-2xl" />,
  Redis: <SiRedis className="text-2xl" />,
  Metabase: <SiMetabase className="text-2xl" />,
  "AWS CloudWatch": <SiAmazoncloudwatch className="text-2xl" />,
  "AWS CloudTrail": <SiAmazonwebservices className="text-2xl" />,
  AWSConfig: <SiAmazonwebservices className="text-2xl" />,
  OAuth: <SiAuth0 className="text-2xl" />,
  GoogleAuth: <SiGoogle className="text-2xl" />,
  MicrosoftAuth: <FaMicrosoft className="text-2xl" />,
  PCI_DSS: <FaShieldAlt className="text-2xl" />,
  DIAN: <FaFileInvoiceDollar className="text-2xl" />,
  EInvoicing: <FaFileInvoiceDollar className="text-2xl" />,
  WebSockets: <FaNetworkWired className="text-2xl" />,
  WebRTC: <SiWebrtc className="text-2xl" />,
  MCP: <FaNetworkWired className="text-2xl" />,
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
                {Object.entries(category.items).map(([key, tech]) => (
                  <div
                    key={tech.name}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:scale-105 duration-300 flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-3 bg-primary-light text-white rounded-full w-14 h-14 flex items-center justify-center">
                      {techIcons[key as keyof typeof techIcons]}
                    </div>
                    <h4 className=" font-bold text-gray-800 dark:text-gray-200">
                      <Link
                        href={`${language}${techRoutes[key]}` || "#"}
                        className="hover:underline"
                      >
                        {tech.name}
                      </Link>
                    </h4>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center w-full">
                      <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        {tech.description}
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
