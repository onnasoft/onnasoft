import React from "react";
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
  SiPytorch,
  SiApachespark,
  SiAmazonwebservices,
  SiMetabase,
  SiWebrtc,
  SiCloudflare,
  SiAuth0,
  SiGoogle,
  SiSonarqube,
  SiSocketdotio,
  SiStripe,
  SiMercadopago,
  SiJest,
  SiTestinglibrary,
  SiDocker,
  SiRabbitmq,
  SiRedis,
  SiAmazoncloudwatch,
} from "react-icons/si";
import {
  FaShieldAlt,
  FaNetworkWired,
  FaCode,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaMicrosoft,
  FaMoneyBillWave,
  FaLayerGroup,
} from "react-icons/fa";
import { IoMdApps } from "react-icons/io";
import { GiHexagonalNut } from "react-icons/gi";

const TechStack: React.FC = () => {
  const technologies = [
    {
      category: "Languages",
      items: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400 text-2xl" />,
          tooltip: "Programming language for interactive web development",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600 text-2xl" />,
          tooltip: "Statically typed JavaScript for greater robustness",
        },
        {
          name: "Python",
          icon: <SiPython className="text-blue-400 text-2xl" />,
          tooltip:
            "Versatile language for backend, data science, and automation",
        },
        {
          name: "Go",
          icon: <SiGo className="text-cyan-500 text-2xl" />,
          tooltip: "Compiled high-performance language for distributed systems",
        },
        {
          name: "SQL",
          icon: <SiPostgresql className="text-blue-700 text-2xl" />,
          tooltip: "Standard language for managing relational databases",
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        {
          name: "NestJS",
          icon: <SiNestjs className="text-red-500 text-2xl" />,
          tooltip:
            "Progressive framework for building server-side applications",
        },
        {
          name: "Next.JS",
          icon: <SiNextdotjs className="text-black dark:text-white text-2xl" />,
          tooltip: "React framework for static and dynamic web apps",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-600 text-2xl" />,
          tooltip: "CSS framework for fast, responsive design",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-cyan-400 text-2xl" />,
          tooltip: "Utility-first CSS framework for custom designs",
        },
        {
          name: "PySpark",
          icon: <SiApachespark className="text-red-600 text-2xl" />,
          tooltip: "Framework for distributed processing of large data volumes",
        },
        {
          name: "PyTorch",
          icon: <SiPytorch className="text-orange-600 text-2xl" />,
          tooltip: "Machine learning library for computer vision and NLP",
        },
      ],
    },
    {
      category: "API Technologies",
      items: [
        {
          name: "REST APIs",
          icon: <FaCode className="text-green-500 text-2xl" />,
          tooltip: "Architecture for HTTP-based web services",
        },
        {
          name: "SOAP",
          icon: <FaExchangeAlt className="text-blue-500 text-2xl" />,
          tooltip: "Protocol for structured web service communication",
        },
        {
          name: "GraphQL",
          icon: <IoMdApps className="text-pink-500 text-2xl" />,
          tooltip: "Query language for APIs with precise data retrieval",
        },
      ],
    },
    {
      category: "Payment Gateways",
      items: [
        {
          name: "Stripe",
          icon: <SiStripe className="text-purple-500 text-2xl" />,
          tooltip: "Online payment platform for e-commerce",
        },
        {
          name: "MercadoPago",
          icon: <SiMercadopago className="text-blue-400 text-2xl" />,
          tooltip: "Leading payment solution in Latin America",
        },
        {
          name: "PayPal",
          icon: <FaMoneyBillWave className="text-blue-600 text-2xl" />,
          tooltip: "Global platform for online financial transactions",
        },
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        {
          name: "Unit Testing",
          icon: <SiJest className="text-red-500 text-2xl" />,
          tooltip: "Tests that validate individual components",
        },
        {
          name: "Integration Testing",
          icon: <SiTestinglibrary className="text-blue-500 text-2xl" />,
          tooltip: "Tests that validate component interactions",
        },
        {
          name: "SonarQube",
          icon: <SiSonarqube className="text-red-400 text-2xl" />,
          tooltip: "Platform for continuous code quality inspection",
        },
        {
          name: "Test Automation",
          icon: <SiJest className="text-green-500 text-2xl" />,
          tooltip: "Automated testing for continuous delivery",
        },
        {
          name: "Socket.dev",
          icon: (
            <SiSocketdotio className="text-black dark:text-white text-2xl" />
          ),
          tooltip:
            "Platform for detecting vulnerabilities in open source dependencies",
        },
      ],
    },
    {
      category: "Architecture",
      items: [
        {
          name: "Hexagonal",
          icon: <GiHexagonalNut className="text-orange-500 text-2xl" />,
          tooltip:
            "Architecture that decouples business logic from external tech",
        },
        {
          name: "Microservices",
          icon: <FaLayerGroup className="text-blue-500 text-2xl" />,
          tooltip:
            "Distributed architecture with independent, scalable services",
        },
        {
          name: "Event-Driven",
          icon: <SiRabbitmq className="text-orange-400 text-2xl" />,
          tooltip: "Architecture based on asynchronous event processing",
        },
        {
          name: "CQRS",
          icon: <FaExchangeAlt className="text-purple-500 text-2xl" />,
          tooltip: "Command Query Responsibility Segregation pattern",
        },
      ],
    },
    {
      category: "Infrastructure & Tools",
      items: [
        {
          name: "AWS",
          icon: <SiAmazonwebservices className="text-orange-400 text-2xl" />,
          tooltip: "Amazon cloud computing platform",
        },
        {
          name: "Cloudflare",
          icon: <SiCloudflare className="text-orange-500 text-2xl" />,
          tooltip: "Network and security services for web applications",
        },
        {
          name: "Docker",
          icon: <SiDocker className="text-blue-500 text-2xl" />,
          tooltip: "Platform to containerize and distribute applications",
        },
        {
          name: "Redis",
          icon: <SiRedis className="text-red-500 text-2xl" />,
          tooltip: "In-memory data store for caching and messaging",
        },
        {
          name: "Metabase",
          icon: <SiMetabase className="text-blue-500 text-2xl" />,
          tooltip: "Business intelligence and data visualization tool",
        },
      ],
    },
    {
      category: "Monitoring & Auditing",
      items: [
        {
          name: "AWS CloudWatch",
          icon: <SiAmazoncloudwatch className="text-orange-400 text-2xl" />,
          tooltip: "Monitoring and observability for AWS resources and apps",
        },
        {
          name: "AWS CloudTrail",
          icon: <SiAmazonwebservices className="text-orange-400 text-2xl" />,
          tooltip: "Activity auditing and compliance tracking in AWS",
        },
        {
          name: "AWS Config",
          icon: <SiAmazonwebservices className="text-orange-400 text-2xl" />,
          tooltip: "Resource configuration and compliance evaluation in AWS",
        },
      ],
    },
    {
      category: "Authentication & Security",
      items: [
        {
          name: "OAuth",
          icon: <SiAuth0 className="text-red-500 text-2xl" />,
          tooltip: "Standard protocol for secure authorization",
        },
        {
          name: "Google Auth",
          icon: <SiGoogle className="text-green-500 text-2xl" />,
          tooltip: "Authentication using Google accounts",
        },
        {
          name: "Microsoft Auth",
          icon: <FaMicrosoft className="text-blue-500 text-2xl" />,
          tooltip: "Authentication using Microsoft accounts",
        },
        {
          name: "PCI DSS",
          icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
          tooltip: "Security standard for processing card payments",
        },
      ],
    },
    {
      category: "Colombian Standards",
      items: [
        {
          name: "DIAN",
          icon: <FaFileInvoiceDollar className="text-yellow-600 text-2xl" />,
          tooltip: "Colombian tax authority’s e-invoicing system",
        },
        {
          name: "Electronic Invoicing",
          icon: <FaFileInvoiceDollar className="text-green-600 text-2xl" />,
          tooltip:
            "Implementation of electronic invoicing as per Colombian law",
        },
      ],
    },
    {
      category: "Real-time Technologies",
      items: [
        {
          name: "WebSockets",
          icon: <FaNetworkWired className="text-green-600 text-2xl" />,
          tooltip: "Protocol for real-time bidirectional communication",
        },
        {
          name: "WebRTC",
          icon: <SiWebrtc className="text-blue-400 text-2xl" />,
          tooltip: "Technology for peer-to-peer communication in browsers",
        },
        {
          name: "MCP",
          icon: <FaNetworkWired className="text-purple-600 text-2xl" />,
          tooltip: "Messaging protocol for distributed systems",
        },
      ],
    },
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Technology Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies and frameworks to deliver
            robust, scalable, and innovative solutions.
          </p>
        </div>

        <div className="space-y-12">
          {technologies.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-gray-800 dark:text-gray-200">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-3 bg-primary bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
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
