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

const translations = {
  es: {
    title: "Nuestro Stack Tecnológico",
    description:
      "Utilizamos tecnologías y frameworks de vanguardia para ofrecer soluciones robustas, escalables e innovadoras.",
    technologies: [
      {
        category: "Lenguajes",
        items: [
          {
            name: "JavaScript",
            icon: <SiJavascript className="text-2xl" />,
            tooltip: "Lenguaje de programación para desarrollo web interactivo",
          },
          {
            name: "TypeScript",
            icon: <SiTypescript className="text-2xl" />,
            tooltip: "JavaScript tipado para mayor robustez",
          },
          {
            name: "Python",
            icon: <SiPython className="text-2xl" />,
            tooltip:
              "Lenguaje versátil para backend, ciencia de datos y automatización",
          },
          {
            name: "Go",
            icon: <SiGo className="text-2xl" />,
            tooltip:
              "Lenguaje compilado de alto rendimiento para sistemas distribuidos",
          },
          {
            name: "SQL",
            icon: <SiPostgresql className="text-2xl" />,
            tooltip:
              "Lenguaje estándar para gestión de bases de datos relacionales",
          },
        ],
      },
      {
        category: "Frameworks y Librerías",
        items: [
          {
            name: "NestJS",
            icon: <SiNestjs className="text-2xl" />,
            tooltip:
              "Framework progresivo para construir aplicaciones del lado del servidor",
          },
          {
            name: "Next.JS",
            icon: (
              <SiNextdotjs className="text-2xl" />
            ),
            tooltip: "Framework de React para apps web estáticas y dinámicas",
          },
          {
            name: "Bootstrap",
            icon: <SiBootstrap className="text-2xl" />,
            tooltip: "Framework CSS para diseño responsivo rápido",
          },
          {
            name: "Tailwind",
            icon: <SiTailwindcss className="text-2xl" />,
            tooltip:
              "Framework CSS basado en utilidades para diseños personalizados",
          },
          {
            name: "PySpark",
            icon: <SiApachespark className="text-2xl" />,
            tooltip:
              "Framework para procesamiento distribuido de grandes volúmenes de datos",
          },
          {
            name: "PyTorch",
            icon: <SiPytorch className="text-2xl" />,
            tooltip:
              "Librería de machine learning para visión computacional y NLP",
          },
        ],
      },
      {
        category: "Tecnologías API",
        items: [
          {
            name: "REST APIs",
            icon: <FaCode className="text-2xl" />,
            tooltip: "Arquitectura para servicios web basados en HTTP",
          },
          {
            name: "SOAP",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip:
              "Protocolo para comunicación estructurada de servicios web",
          },
          {
            name: "GraphQL",
            icon: <IoMdApps className="text-2xl" />,
            tooltip:
              "Lenguaje de consultas para APIs con recuperación precisa de datos",
          },
        ],
      },
      {
        category: "Pasarelas de Pago",
        items: [
          {
            name: "Stripe",
            icon: <SiStripe className="text-2xl" />,
            tooltip: "Plataforma de pagos en línea para e-commerce",
          },
          {
            name: "MercadoPago",
            icon: <SiMercadopago className="text-2xl" />,
            tooltip: "Solución de pagos líder en Latinoamérica",
          },
          {
            name: "PayPal",
            icon: <FaMoneyBillWave className="text-2xl" />,
            tooltip:
              "Plataforma global para transacciones financieras en línea",
          },
        ],
      },
      {
        category: "Pruebas y Calidad",
        items: [
          {
            name: "Pruebas Unitarias",
            icon: <SiJest className="text-2xl" />,
            tooltip: "Pruebas que validan componentes individuales",
          },
          {
            name: "Pruebas de Integración",
            icon: <SiTestinglibrary className="text-2xl" />,
            tooltip: "Pruebas que validan la interacción entre componentes",
          },
          {
            name: "SonarQube",
            icon: <SiSonarqube className="text-2xl" />,
            tooltip:
              "Plataforma para inspección continua de calidad del código",
          },
          {
            name: "Automatización de Pruebas",
            icon: <SiJest className="text-2xl" />,
            tooltip: "Pruebas automatizadas para entrega continua",
          },
          {
            name: "Socket.dev",
            icon: (
              <SiSocketdotio className="text-black dark:text-white text-2xl" />
            ),
            tooltip:
              "Plataforma para detectar vulnerabilidades en dependencias open source",
          },
        ],
      },
      {
        category: "Arquitectura",
        items: [
          {
            name: "Hexagonal",
            icon: <GiHexagonalNut className="text-2xl" />,
            tooltip:
              "Arquitectura que desacopla la lógica de negocio de la tecnología externa",
          },
          {
            name: "Microservicios",
            icon: <FaLayerGroup className="text-2xl" />,
            tooltip:
              "Arquitectura distribuida con servicios independientes y escalables",
          },
          {
            name: "Orientada a Eventos",
            icon: <SiRabbitmq className="text-2xl" />,
            tooltip:
              "Arquitectura basada en procesamiento asíncrono de eventos",
          },
          {
            name: "CQRS",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "Patrón de separación entre comandos y consultas",
          },
        ],
      },
      {
        category: "Infraestructura y Herramientas",
        items: [
          {
            name: "AWS",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "Plataforma de computación en la nube de Amazon",
          },
          {
            name: "Cloudflare",
            icon: <SiCloudflare className="text-2xl" />,
            tooltip: "Servicios de red y seguridad para aplicaciones web",
          },
          {
            name: "Docker",
            icon: <SiDocker className="text-2xl" />,
            tooltip: "Plataforma para contenerizar y distribuir aplicaciones",
          },
          {
            name: "Redis",
            icon: <SiRedis className="text-2xl" />,
            tooltip: "Almacenamiento en memoria para caché y mensajería",
          },
          {
            name: "Metabase",
            icon: <SiMetabase className="text-2xl" />,
            tooltip:
              "Herramienta de inteligencia de negocios y visualización de datos",
          },
        ],
      },
      {
        category: "Monitoreo y Auditoría",
        items: [
          {
            name: "AWS CloudWatch",
            icon: <SiAmazoncloudwatch className="text-2xl" />,
            tooltip:
              "Monitoreo y observabilidad para recursos y aplicaciones en AWS",
          },
          {
            name: "AWS CloudTrail",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip:
              "Auditoría de actividad y seguimiento de cumplimiento en AWS",
          },
          {
            name: "AWS Config",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip:
              "Evaluación de configuración y cumplimiento de recursos en AWS",
          },
        ],
      },
      {
        category: "Autenticación y Seguridad",
        items: [
          {
            name: "OAuth",
            icon: <SiAuth0 className="text-2xl" />,
            tooltip: "Protocolo estándar para autorización segura",
          },
          {
            name: "Autenticación Google",
            icon: <SiGoogle className="text-2xl" />,
            tooltip: "Autenticación mediante cuentas de Google",
          },
          {
            name: "Autenticación Microsoft",
            icon: <FaMicrosoft className="text-2xl" />,
            tooltip: "Autenticación mediante cuentas de Microsoft",
          },
          {
            name: "PCI DSS",
            icon: <FaShieldAlt className="text-2xl" />,
            tooltip:
              "Estándar de seguridad para procesamiento de pagos con tarjeta",
          },
        ],
      },
      {
        category: "Normativas Colombianas",
        items: [
          {
            name: "DIAN",
            icon: <FaFileInvoiceDollar className="text-2xl" />,
            tooltip:
              "Sistema de facturación electrónica de la autoridad tributaria colombiana",
          },
          {
            name: "Facturación Electrónica",
            icon: <FaFileInvoiceDollar className="text-2xl" />,
            tooltip:
              "Implementación de facturación electrónica según la ley colombiana",
          },
        ],
      },
      {
        category: "Tecnologías en Tiempo Real",
        items: [
          {
            name: "WebSockets",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "Protocolo para comunicación bidireccional en tiempo real",
          },
          {
            name: "WebRTC",
            icon: <SiWebrtc className="text-2xl" />,
            tooltip: "Tecnología para comunicación entre pares en navegadores",
          },
          {
            name: "MCP",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "Protocolo de mensajería para sistemas distribuidos",
          },
        ],
      },
    ],
  },
  en: {
    title: "Our Technology Stack",
    description:
      "We leverage cutting-edge technologies and frameworks to deliver robust, scalable, and innovative solutions.",
    technologies: [
      {
        category: "Languages",
        items: [
          {
            name: "JavaScript",
            icon: <SiJavascript className="text-2xl" />,
            tooltip: "Programming language for interactive web development",
          },
          {
            name: "TypeScript",
            icon: <SiTypescript className="text-2xl" />,
            tooltip: "Statically typed JavaScript for greater robustness",
          },
          {
            name: "Python",
            icon: <SiPython className="text-2xl" />,
            tooltip:
              "Versatile language for backend, data science, and automation",
          },
          {
            name: "Go",
            icon: <SiGo className="text-2xl" />,
            tooltip:
              "Compiled high-performance language for distributed systems",
          },
          {
            name: "SQL",
            icon: <SiPostgresql className="text-2xl" />,
            tooltip: "Standard language for managing relational databases",
          },
        ],
      },
      {
        category: "Frameworks & Libraries",
        items: [
          {
            name: "NestJS",
            icon: <SiNestjs className="text-2xl" />,
            tooltip:
              "Progressive framework for building server-side applications",
          },
          {
            name: "Next.JS",
            icon: (
              <SiNextdotjs className="text-2xl" />
            ),
            tooltip: "React framework for static and dynamic web apps",
          },
          {
            name: "Bootstrap",
            icon: <SiBootstrap className="text-2xl" />,
            tooltip: "CSS framework for fast, responsive design",
          },
          {
            name: "Tailwind",
            icon: <SiTailwindcss className="text-2xl" />,
            tooltip: "Utility-first CSS framework for custom designs",
          },
          {
            name: "PySpark",
            icon: <SiApachespark className="text-2xl" />,
            tooltip:
              "Framework for distributed processing of large data volumes",
          },
          {
            name: "PyTorch",
            icon: <SiPytorch className="text-2xl" />,
            tooltip: "Machine learning library for computer vision and NLP",
          },
        ],
      },
      {
        category: "API Technologies",
        items: [
          {
            name: "REST APIs",
            icon: <FaCode className="text-2xl" />,
            tooltip: "Architecture for HTTP-based web services",
          },
          {
            name: "SOAP",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "Protocol for structured web service communication",
          },
          {
            name: "GraphQL",
            icon: <IoMdApps className="text-2xl" />,
            tooltip: "Query language for APIs with precise data retrieval",
          },
        ],
      },
      {
        category: "Payment Gateways",
        items: [
          {
            name: "Stripe",
            icon: <SiStripe className="text-2xl" />,
            tooltip: "Online payment platform for e-commerce",
          },
          {
            name: "MercadoPago",
            icon: <SiMercadopago className="text-2xl" />,
            tooltip: "Leading payment solution in Latin America",
          },
          {
            name: "PayPal",
            icon: <FaMoneyBillWave className="text-2xl" />,
            tooltip: "Global platform for online financial transactions",
          },
        ],
      },
      {
        category: "Testing & Quality",
        items: [
          {
            name: "Unit Testing",
            icon: <SiJest className="text-2xl" />,
            tooltip: "Tests that validate individual components",
          },
          {
            name: "Integration Testing",
            icon: <SiTestinglibrary className="text-2xl" />,
            tooltip: "Tests that validate component interactions",
          },
          {
            name: "SonarQube",
            icon: <SiSonarqube className="text-2xl" />,
            tooltip: "Platform for continuous code quality inspection",
          },
          {
            name: "Test Automation",
            icon: <SiJest className="text-2xl" />,
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
            icon: <GiHexagonalNut className="text-2xl" />,
            tooltip:
              "Architecture that decouples business logic from external tech",
          },
          {
            name: "Microservices",
            icon: <FaLayerGroup className="text-2xl" />,
            tooltip:
              "Distributed architecture with independent, scalable services",
          },
          {
            name: "Event-Driven",
            icon: <SiRabbitmq className="text-2xl" />,
            tooltip: "Architecture based on asynchronous event processing",
          },
          {
            name: "CQRS",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "Command Query Responsibility Segregation pattern",
          },
        ],
      },
      {
        category: "Infrastructure & Tools",
        items: [
          {
            name: "AWS",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "Amazon cloud computing platform",
          },
          {
            name: "Cloudflare",
            icon: <SiCloudflare className="text-2xl" />,
            tooltip: "Network and security services for web applications",
          },
          {
            name: "Docker",
            icon: <SiDocker className="text-2xl" />,
            tooltip: "Platform to containerize and distribute applications",
          },
          {
            name: "Redis",
            icon: <SiRedis className="text-2xl" />,
            tooltip: "In-memory data store for caching and messaging",
          },
          {
            name: "Metabase",
            icon: <SiMetabase className="text-2xl" />,
            tooltip: "Business intelligence and data visualization tool",
          },
        ],
      },
      {
        category: "Monitoring & Auditing",
        items: [
          {
            name: "AWS CloudWatch",
            icon: <SiAmazoncloudwatch className="text-2xl" />,
            tooltip: "Monitoring and observability for AWS resources and apps",
          },
          {
            name: "AWS CloudTrail",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "Activity auditing and compliance tracking in AWS",
          },
          {
            name: "AWS Config",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "Resource configuration and compliance evaluation in AWS",
          },
        ],
      },
      {
        category: "Authentication & Security",
        items: [
          {
            name: "OAuth",
            icon: <SiAuth0 className="text-2xl" />,
            tooltip: "Standard protocol for secure authorization",
          },
          {
            name: "Google Auth",
            icon: <SiGoogle className="text-2xl" />,
            tooltip: "Authentication using Google accounts",
          },
          {
            name: "Microsoft Auth",
            icon: <FaMicrosoft className="text-2xl" />,
            tooltip: "Authentication using Microsoft accounts",
          },
          {
            name: "PCI DSS",
            icon: <FaShieldAlt className="text-2xl" />,
            tooltip: "Security standard for processing card payments",
          },
        ],
      },
      {
        category: "Real-time Technologies",
        items: [
          {
            name: "WebSockets",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "Protocol for real-time bidirectional communication",
          },
          {
            name: "WebRTC",
            icon: <SiWebrtc className="text-2xl" />,
            tooltip: "Technology for peer-to-peer communication in browsers",
          },
          {
            name: "MCP",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "Messaging protocol for distributed systems",
          },
        ],
      },
    ],
  },
  fr: {
    title: "Notre Stack Technologique",
    description:
      "Nous utilisons des technologies et des frameworks de pointe pour fournir des solutions robustes, évolutives et innovantes.",
    technologies: [
      {
        category: "Langages",
        items: [
          {
            name: "JavaScript",
            icon: <SiJavascript className="text-2xl" />,
            tooltip:
              "Langage de programmation pour le développement web interactif",
          },
          {
            name: "TypeScript",
            icon: <SiTypescript className="text-2xl" />,
            tooltip: "JavaScript typé statiquement pour plus de robustesse",
          },
          {
            name: "Python",
            icon: <SiPython className="text-2xl" />,
            tooltip:
              "Langage polyvalent pour backend, data science et automatisation",
          },
          {
            name: "Go",
            icon: <SiGo className="text-2xl" />,
            tooltip: "Langage compilé performant pour systèmes distribués",
          },
          {
            name: "SQL",
            icon: <SiPostgresql className="text-2xl" />,
            tooltip:
              "Langage standard pour gérer les bases de données relationnelles",
          },
        ],
      },
      {
        category: "Frameworks & Bibliothèques",
        items: [
          {
            name: "NestJS",
            icon: <SiNestjs className="text-2xl" />,
            tooltip: "Framework progressif pour applications côté serveur",
          },
          {
            name: "Next.JS",
            icon: (
              <SiNextdotjs className="text-2xl" />
            ),
            tooltip:
              "Framework React pour applications web statiques et dynamiques",
          },
          {
            name: "Bootstrap",
            icon: <SiBootstrap className="text-2xl" />,
            tooltip: "Framework CSS pour design rapide et responsive",
          },
          {
            name: "Tailwind",
            icon: <SiTailwindcss className="text-2xl" />,
            tooltip: "Framework CSS utility-first pour designs personnalisés",
          },
          {
            name: "PySpark",
            icon: <SiApachespark className="text-2xl" />,
            tooltip:
              "Framework pour traitement distribué de gros volumes de données",
          },
          {
            name: "PyTorch",
            icon: <SiPytorch className="text-2xl" />,
            tooltip:
              "Bibliothèque d'apprentissage automatique pour vision et NLP",
          },
        ],
      },
      {
        category: "Technologies API",
        items: [
          {
            name: "REST APIs",
            icon: <FaCode className="text-2xl" />,
            tooltip: "Architecture pour services web basés sur HTTP",
          },
          {
            name: "SOAP",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "Protocole pour communication structurée des services web",
          },
          {
            name: "GraphQL",
            icon: <IoMdApps className="text-2xl" />,
            tooltip:
              "Langage de requête API pour récupération précise des données",
          },
        ],
      },
      {
        category: "Passerelles de paiement",
        items: [
          {
            name: "Stripe",
            icon: <SiStripe className="text-2xl" />,
            tooltip: "Plateforme de paiement en ligne pour e-commerce",
          },
          {
            name: "MercadoPago",
            icon: <SiMercadopago className="text-2xl" />,
            tooltip: "Solution de paiement leader en Amérique latine",
          },
          {
            name: "PayPal",
            icon: <FaMoneyBillWave className="text-2xl" />,
            tooltip: "Plateforme mondiale de transactions financières en ligne",
          },
        ],
      },
      {
        category: "Tests & Qualité",
        items: [
          {
            name: "Tests Unitaires",
            icon: <SiJest className="text-2xl" />,
            tooltip: "Tests validant les composants individuels",
          },
          {
            name: "Tests d’Intégration",
            icon: <SiTestinglibrary className="text-2xl" />,
            tooltip: "Tests validant les interactions entre composants",
          },
          {
            name: "SonarQube",
            icon: <SiSonarqube className="text-2xl" />,
            tooltip: "Plateforme d’inspection continue de la qualité du code",
          },
          {
            name: "Automatisation des Tests",
            icon: <SiJest className="text-2xl" />,
            tooltip: "Tests automatisés pour livraison continue",
          },
          {
            name: "Socket.dev",
            icon: (
              <SiSocketdotio className="text-black dark:text-white text-2xl" />
            ),
            tooltip:
              "Plateforme pour détecter les vulnérabilités des dépendances open source",
          },
        ],
      },
      {
        category: "Architecture",
        items: [
          {
            name: "Hexagonale",
            icon: <GiHexagonalNut className="text-2xl" />,
            tooltip:
              "Architecture découplant la logique métier de la tech externe",
          },
          {
            name: "Microservices",
            icon: <FaLayerGroup className="text-2xl" />,
            tooltip:
              "Architecture distribuée avec services indépendants et scalables",
          },
          {
            name: "Event-Driven",
            icon: <SiRabbitmq className="text-2xl" />,
            tooltip:
              "Architecture basée sur le traitement asynchrone d’événements",
          },
          {
            name: "CQRS",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "Pattern Command Query Responsibility Segregation",
          },
        ],
      },
      {
        category: "Infrastructure & Outils",
        items: [
          {
            name: "AWS",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "Plateforme cloud computing d’Amazon",
          },
          {
            name: "Cloudflare",
            icon: <SiCloudflare className="text-2xl" />,
            tooltip: "Services réseau et sécurité pour applications web",
          },
          {
            name: "Docker",
            icon: <SiDocker className="text-2xl" />,
            tooltip:
              "Plateforme de containerisation et distribution d’applications",
          },
          {
            name: "Redis",
            icon: <SiRedis className="text-2xl" />,
            tooltip: "Stockage en mémoire pour cache et messagerie",
          },
          {
            name: "Metabase",
            icon: <SiMetabase className="text-2xl" />,
            tooltip:
              "Outil d’intelligence d’affaires et de visualisation de données",
          },
        ],
      },
      {
        category: "Monitoring & Audit",
        items: [
          {
            name: "AWS CloudWatch",
            icon: <SiAmazoncloudwatch className="text-2xl" />,
            tooltip: "Monitoring et observabilité des ressources et apps AWS",
          },
          {
            name: "AWS CloudTrail",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "Audit d’activité et suivi de conformité sur AWS",
          },
          {
            name: "AWS Config",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip:
              "Évaluation de configuration et conformité des ressources AWS",
          },
        ],
      },
      {
        category: "Authentification & Sécurité",
        items: [
          {
            name: "OAuth",
            icon: <SiAuth0 className="text-2xl" />,
            tooltip: "Protocole standard pour autorisation sécurisée",
          },
          {
            name: "Google Auth",
            icon: <SiGoogle className="text-2xl" />,
            tooltip: "Authentification via comptes Google",
          },
          {
            name: "Microsoft Auth",
            icon: <FaMicrosoft className="text-2xl" />,
            tooltip: "Authentification via comptes Microsoft",
          },
          {
            name: "PCI DSS",
            icon: <FaShieldAlt className="text-2xl" />,
            tooltip:
              "Norme de sécurité pour traitement des paiements par carte",
          },
        ],
      },
      {
        category: "Technologies Temps Réel",
        items: [
          {
            name: "WebSockets",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip:
              "Protocole de communication bidirectionnelle en temps réel",
          },
          {
            name: "WebRTC",
            icon: <SiWebrtc className="text-2xl" />,
            tooltip:
              "Technologie de communication peer-to-peer dans les navigateurs",
          },
          {
            name: "MCP",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "Protocole de messagerie pour systèmes distribués",
          },
        ],
      },
    ],
  },
  ja: {
    title: "私たちの技術スタック",
    description:
      "堅牢でスケーラブル、革新的なソリューションを提供するために、最先端の技術とフレームワークを活用しています。",
    technologies: [
      {
        category: "言語",
        items: [
          {
            name: "JavaScript",
            icon: <SiJavascript className="text-2xl" />,
            tooltip: "インタラクティブなウェブ開発のためのプログラミング言語",
          },
          {
            name: "TypeScript",
            icon: <SiTypescript className="text-2xl" />,
            tooltip: "堅牢性を高めた静的型付きJavaScript",
          },
          {
            name: "Python",
            icon: <SiPython className="text-2xl" />,
            tooltip: "バックエンド、データサイエンス、自動化に適した多用途言語",
          },
          {
            name: "Go",
            icon: <SiGo className="text-2xl" />,
            tooltip: "分散システム向けの高性能コンパイル言語",
          },
          {
            name: "SQL",
            icon: <SiPostgresql className="text-2xl" />,
            tooltip: "リレーショナルデータベース管理の標準言語",
          },
        ],
      },
      {
        category: "フレームワーク＆ライブラリ",
        items: [
          {
            name: "NestJS",
            icon: <SiNestjs className="text-2xl" />,
            tooltip:
              "サーバーサイドアプリケーション構築のためのプログレッシブフレームワーク",
          },
          {
            name: "Next.JS",
            icon: (
              <SiNextdotjs className="text-2xl" />
            ),
            tooltip: "静的および動的ウェブアプリのためのReactフレームワーク",
          },
          {
            name: "Bootstrap",
            icon: <SiBootstrap className="text-2xl" />,
            tooltip: "高速でレスポンシブなデザインのためのCSSフレームワーク",
          },
          {
            name: "Tailwind",
            icon: <SiTailwindcss className="text-2xl" />,
            tooltip:
              "カスタムデザイン向けのユーティリティファーストCSSフレームワーク",
          },
          {
            name: "PySpark",
            icon: <SiApachespark className="text-2xl" />,
            tooltip: "大規模データの分散処理フレームワーク",
          },
          {
            name: "PyTorch",
            icon: <SiPytorch className="text-2xl" />,
            tooltip:
              "コンピュータビジョンと自然言語処理のための機械学習ライブラリ",
          },
        ],
      },
      {
        category: "API技術",
        items: [
          {
            name: "REST API",
            icon: <FaCode className="text-2xl" />,
            tooltip: "HTTPベースのウェブサービスのアーキテクチャ",
          },
          {
            name: "SOAP",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "構造化されたウェブサービス通信のためのプロトコル",
          },
          {
            name: "GraphQL",
            icon: <IoMdApps className="text-2xl" />,
            tooltip: "正確なデータ取得のためのAPIクエリ言語",
          },
        ],
      },
      {
        category: "決済ゲートウェイ",
        items: [
          {
            name: "Stripe",
            icon: <SiStripe className="text-2xl" />,
            tooltip: "Eコマース向けオンライン決済プラットフォーム",
          },
          {
            name: "MercadoPago",
            icon: <SiMercadopago className="text-2xl" />,
            tooltip: "ラテンアメリカでの主要な決済ソリューション",
          },
          {
            name: "PayPal",
            icon: <FaMoneyBillWave className="text-2xl" />,
            tooltip: "グローバルなオンライン金融取引プラットフォーム",
          },
        ],
      },
      {
        category: "テスト＆品質",
        items: [
          {
            name: "ユニットテスト",
            icon: <SiJest className="text-2xl" />,
            tooltip: "個々のコンポーネントを検証するテスト",
          },
          {
            name: "統合テスト",
            icon: <SiTestinglibrary className="text-2xl" />,
            tooltip: "コンポーネント間の連携を検証するテスト",
          },
          {
            name: "SonarQube",
            icon: <SiSonarqube className="text-2xl" />,
            tooltip: "継続的なコード品質検査プラットフォーム",
          },
          {
            name: "テスト自動化",
            icon: <SiJest className="text-2xl" />,
            tooltip: "継続的デリバリーのための自動化テスト",
          },
          {
            name: "Socket.dev",
            icon: (
              <SiSocketdotio className="text-black dark:text-white text-2xl" />
            ),
            tooltip: "オープンソース依存関係の脆弱性検出プラットフォーム",
          },
        ],
      },
      {
        category: "アーキテクチャ",
        items: [
          {
            name: "ヘキサゴナル",
            icon: <GiHexagonalNut className="text-2xl" />,
            tooltip: "ビジネスロジックを外部技術から切り離すアーキテクチャ",
          },
          {
            name: "マイクロサービス",
            icon: <FaLayerGroup className="text-2xl" />,
            tooltip: "独立してスケーラブルなサービスによる分散アーキテクチャ",
          },
          {
            name: "イベント駆動",
            icon: <SiRabbitmq className="text-2xl" />,
            tooltip: "非同期イベント処理に基づくアーキテクチャ",
          },
          {
            name: "CQRS",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "コマンドクエリ責務分離パターン",
          },
        ],
      },
      {
        category: "インフラ＆ツール",
        items: [
          {
            name: "AWS",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "Amazonのクラウドコンピューティングプラットフォーム",
          },
          {
            name: "Cloudflare",
            icon: <SiCloudflare className="text-2xl" />,
            tooltip: "ウェブアプリのためのネットワーク＆セキュリティサービス",
          },
          {
            name: "Docker",
            icon: <SiDocker className="text-2xl" />,
            tooltip: "アプリケーションのコンテナ化と配布プラットフォーム",
          },
          {
            name: "Redis",
            icon: <SiRedis className="text-2xl" />,
            tooltip: "キャッシュとメッセージングのためのインメモリデータストア",
          },
          {
            name: "Metabase",
            icon: <SiMetabase className="text-2xl" />,
            tooltip: "ビジネスインテリジェンスとデータ可視化ツール",
          },
        ],
      },
      {
        category: "モニタリング＆監査",
        items: [
          {
            name: "AWS CloudWatch",
            icon: <SiAmazoncloudwatch className="text-2xl" />,
            tooltip: "AWSリソースとアプリの監視と可観測性",
          },
          {
            name: "AWS CloudTrail",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "AWSにおける活動監査とコンプライアンス追跡",
          },
          {
            name: "AWS Config",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "AWSリソースの設定とコンプライアンス評価",
          },
        ],
      },
      {
        category: "認証＆セキュリティ",
        items: [
          {
            name: "OAuth",
            icon: <SiAuth0 className="text-2xl" />,
            tooltip: "安全な認可のための標準プロトコル",
          },
          {
            name: "Google認証",
            icon: <SiGoogle className="text-2xl" />,
            tooltip: "Googleアカウントによる認証",
          },
          {
            name: "Microsoft認証",
            icon: <FaMicrosoft className="text-2xl" />,
            tooltip: "Microsoftアカウントによる認証",
          },
          {
            name: "PCI DSS",
            icon: <FaShieldAlt className="text-2xl" />,
            tooltip: "カード決済処理のためのセキュリティ標準",
          },
        ],
      },
      {
        category: "リアルタイム技術",
        items: [
          {
            name: "WebSockets",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "双方向リアルタイム通信のためのプロトコル",
          },
          {
            name: "WebRTC",
            icon: <SiWebrtc className="text-2xl" />,
            tooltip: "ブラウザ間のピアツーピア通信技術",
          },
          {
            name: "MCP",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "分散システムのためのメッセージングプロトコル",
          },
        ],
      },
    ],
  },
  zh: {
    title: "我们的技术栈",
    description: "我们利用尖端技术和框架来提供强大、可扩展和创新的解决方案。",
    technologies: [
      {
        category: "编程语言",
        items: [
          {
            name: "JavaScript",
            icon: <SiJavascript className="text-2xl" />,
            tooltip: "用于交互式网页开发的编程语言",
          },
          {
            name: "TypeScript",
            icon: <SiTypescript className="text-2xl" />,
            tooltip: "增强类型安全的静态类型JavaScript",
          },
          {
            name: "Python",
            icon: <SiPython className="text-2xl" />,
            tooltip: "适用于后端、数据科学和自动化的多功能语言",
          },
          {
            name: "Go",
            icon: <SiGo className="text-2xl" />,
            tooltip: "用于分布式系统的高性能编译语言",
          },
          {
            name: "SQL",
            icon: <SiPostgresql className="text-2xl" />,
            tooltip: "关系数据库管理的标准语言",
          },
        ],
      },
      {
        category: "框架与库",
        items: [
          {
            name: "NestJS",
            icon: <SiNestjs className="text-2xl" />,
            tooltip: "用于构建服务器端应用的渐进式框架",
          },
          {
            name: "Next.JS",
            icon: (
              <SiNextdotjs className="text-2xl" />
            ),
            tooltip: "用于静态和动态网页应用的React框架",
          },
          {
            name: "Bootstrap",
            icon: <SiBootstrap className="text-2xl" />,
            tooltip: "快速响应式设计的CSS框架",
          },
          {
            name: "Tailwind",
            icon: <SiTailwindcss className="text-2xl" />,
            tooltip: "面向自定义设计的实用工具优先CSS框架",
          },
          {
            name: "PySpark",
            icon: <SiApachespark className="text-2xl" />,
            tooltip: "大规模数据分布式处理框架",
          },
          {
            name: "PyTorch",
            icon: <SiPytorch className="text-2xl" />,
            tooltip: "用于计算机视觉和自然语言处理的机器学习库",
          },
        ],
      },
      {
        category: "API技术",
        items: [
          {
            name: "REST API",
            icon: <FaCode className="text-2xl" />,
            tooltip: "基于HTTP的网络服务架构",
          },
          {
            name: "SOAP",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "结构化的网络服务通信协议",
          },
          {
            name: "GraphQL",
            icon: <IoMdApps className="text-2xl" />,
            tooltip: "精准数据查询的API语言",
          },
        ],
      },
      {
        category: "支付网关",
        items: [
          {
            name: "Stripe",
            icon: <SiStripe className="text-2xl" />,
            tooltip: "电商在线支付平台",
          },
          {
            name: "MercadoPago",
            icon: <SiMercadopago className="text-2xl" />,
            tooltip: "拉美领先的支付解决方案",
          },
          {
            name: "PayPal",
            icon: <FaMoneyBillWave className="text-2xl" />,
            tooltip: "全球在线金融交易平台",
          },
        ],
      },
      {
        category: "测试与质量",
        items: [
          {
            name: "单元测试",
            icon: <SiJest className="text-2xl" />,
            tooltip: "验证单个组件的测试",
          },
          {
            name: "集成测试",
            icon: <SiTestinglibrary className="text-2xl" />,
            tooltip: "验证组件间协作的测试",
          },
          {
            name: "SonarQube",
            icon: <SiSonarqube className="text-2xl" />,
            tooltip: "持续代码质量检测平台",
          },
          {
            name: "测试自动化",
            icon: <SiJest className="text-2xl" />,
            tooltip: "持续交付的自动化测试",
          },
          {
            name: "Socket.dev",
            icon: (
              <SiSocketdotio className="text-black dark:text-white text-2xl" />
            ),
            tooltip: "开源依赖漏洞检测平台",
          },
        ],
      },
      {
        category: "架构",
        items: [
          {
            name: "六边形架构",
            icon: <GiHexagonalNut className="text-2xl" />,
            tooltip: "将业务逻辑与外部技术隔离的架构",
          },
          {
            name: "微服务",
            icon: <FaLayerGroup className="text-2xl" />,
            tooltip: "独立可扩展服务的分布式架构",
          },
          {
            name: "事件驱动",
            icon: <SiRabbitmq className="text-2xl" />,
            tooltip: "基于异步事件处理的架构",
          },
          {
            name: "CQRS",
            icon: <FaExchangeAlt className="text-2xl" />,
            tooltip: "命令查询职责分离模式",
          },
        ],
      },
      {
        category: "基础设施与工具",
        items: [
          {
            name: "AWS",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "亚马逊的云计算平台",
          },
          {
            name: "Cloudflare",
            icon: <SiCloudflare className="text-2xl" />,
            tooltip: "网站网络与安全服务",
          },
          {
            name: "Docker",
            icon: <SiDocker className="text-2xl" />,
            tooltip: "应用容器化与分发平台",
          },
          {
            name: "Redis",
            icon: <SiRedis className="text-2xl" />,
            tooltip: "缓存与消息传递内存数据存储",
          },
          {
            name: "Metabase",
            icon: <SiMetabase className="text-2xl" />,
            tooltip: "商业智能与数据可视化工具",
          },
        ],
      },
      {
        category: "监控与审计",
        items: [
          {
            name: "AWS CloudWatch",
            icon: <SiAmazoncloudwatch className="text-2xl" />,
            tooltip: "AWS资源与应用监控",
          },
          {
            name: "AWS CloudTrail",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "AWS活动审计与合规追踪",
          },
          {
            name: "AWS Config",
            icon: <SiAmazonwebservices className="text-2xl" />,
            tooltip: "AWS资源配置与合规评估",
          },
        ],
      },
      {
        category: "认证与安全",
        items: [
          {
            name: "OAuth",
            icon: <SiAuth0 className="text-2xl" />,
            tooltip: "安全授权标准协议",
          },
          {
            name: "Google认证",
            icon: <SiGoogle className="text-2xl" />,
            tooltip: "通过Google账户认证",
          },
          {
            name: "Microsoft认证",
            icon: <FaMicrosoft className="text-2xl" />,
            tooltip: "通过Microsoft账户认证",
          },
          {
            name: "PCI DSS",
            icon: <FaShieldAlt className="text-2xl" />,
            tooltip: "支付卡行业数据安全标准",
          },
        ],
      },
      {
        category: "实时技术",
        items: [
          {
            name: "WebSockets",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "双向实时通信协议",
          },
          {
            name: "WebRTC",
            icon: <SiWebrtc className="text-2xl" />,
            tooltip: "浏览器间点对点通信技术",
          },
          {
            name: "MCP",
            icon: <FaNetworkWired className="text-2xl" />,
            tooltip: "分布式系统消息传递协议",
          },
        ],
      },
    ],
  },
};

interface TechnologyProps {
  readonly language: string;
}

const TechStack: React.FC<TechnologyProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-16">
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
                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
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
