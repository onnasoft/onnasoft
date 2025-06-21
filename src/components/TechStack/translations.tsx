export const translations = {
  es: {
    title: "Nuestro Stack Tecnológico",
    description:
      "Utilizamos tecnologías y frameworks de vanguardia para ofrecer soluciones robustas, escalables e innovadoras.",
    technologies: [
      {
        category: "Lenguajes",
        items: {
          JavaScript: {
            name: "JavaScript",
            description:
              "Lenguaje de programación para desarrollo web interactivo",
          },
          TypeScript: {
            name: "TypeScript",
            description: "JavaScript tipado para mayor robustez",
          },
          Python: {
            name: "Python",
            description:
              "Lenguaje versátil para backend, ciencia de datos y automatización",
          },
          Go: {
            name: "Go",
            description:
              "Lenguaje compilado de alto rendimiento para sistemas distribuidos",
          },
          SQL: {
            name: "SQL",
            description:
              "Lenguaje estándar para gestión de bases de datos relacionales",
          },
        },
      },
      {
        category: "Frameworks y Librerías",
        items: {
          NestJS: {
            name: "NestJS",
            description:
              "Framework progresivo para construir aplicaciones del lado del servidor",
          },
          "Next.JS": {
            name: "Next.JS",
            description:
              "Framework de React para apps web estáticas y dinámicas",
          },
          Bootstrap: {
            name: "Bootstrap",
            description: "Framework CSS para diseño responsivo rápido",
          },
          Tailwind: {
            name: "Tailwind",
            description:
              "Framework CSS basado en utilidades para diseños personalizados",
          },
          PySpark: {
            name: "PySpark",
            description:
              "Framework para procesamiento distribuido de grandes volúmenes de datos",
          },
          PyTorch: {
            name: "PyTorch",
            description:
              "Librería de machine learning para visión computacional y NLP",
          },
        },
      },
      {
        category: "Tecnologías API",
        items: {
          "REST APIs": {
            name: "REST APIs",
            description: "Arquitectura para servicios web basados en HTTP",
          },
          SOAP: {
            name: "SOAP",
            description:
              "Protocolo para comunicación estructurada de servicios web",
          },
          GraphQL: {
            name: "GraphQL",
            description:
              "Lenguaje de consultas para APIs con recuperación precisa de datos",
          },
        },
      },
      {
        category: "Pasarelas de Pago",
        items: {
          Stripe: {
            name: "Stripe",
            description: "Plataforma de pagos en línea para e-commerce",
          },
          MercadoPago: {
            name: "MercadoPago",
            description: "Solución de pagos líder en Latinoamérica",
          },
          PayPal: {
            name: "PayPal",
            description:
              "Plataforma global para transacciones financieras en línea",
          },
        },
      },
      {
        category: "Pruebas y Calidad",
        items: {
          UnitTesting: {
            name: "Pruebas Unitarias",
            description: "Pruebas que validan componentes individuales",
          },
          "Integration Testing": {
            name: "Pruebas de Integración",
            description: "Pruebas que validan la interacción entre componentes",
          },
          SonarQube: {
            name: "SonarQube",
            description:
              "Plataforma para inspección continua de calidad del código",
          },
          "Test Automation": {
            name: "Automatización de Pruebas",
            description: "Pruebas automatizadas para entrega continua",
          },
          SocketDev: {
            name: "Socket.dev",
            description:
              "Plataforma para detectar vulnerabilidades en dependencias open source",
          },
        },
      },
      {
        category: "Arquitectura",
        items: {
          Hexagonal: {
            name: "Hexagonal",
            description:
              "Arquitectura que desacopla la lógica de negocio de la tecnología externa",
          },
          Microservices: {
            name: "Microservicios",
            description:
              "Arquitectura distribuida con servicios independientes y escalables",
          },
          "Event-Driven": {
            name: "Orientada a Eventos",
            description:
              "Arquitectura basada en procesamiento asíncrono de eventos",
          },
          CQRS: {
            name: "CQRS",
            description: "Patrón de separación entre comandos y consultas",
          },
        },
      },
      {
        category: "Infraestructura y Herramientas",
        items: {
          AWS: {
            name: "AWS",
            description: "Plataforma de computación en la nube de Amazon",
          },
          Cloudflare: {
            name: "Cloudflare",
            description: "Servicios de red y seguridad para aplicaciones web",
          },
          Docker: {
            name: "Docker",
            description:
              "Plataforma para contenerizar y distribuir aplicaciones",
          },
          Redis: {
            name: "Redis",
            description: "Almacenamiento en memoria para caché y mensajería",
          },
          Metabase: {
            name: "Metabase",
            description:
              "Herramienta de inteligencia de negocios y visualización de datos",
          },
        },
      },
      {
        category: "Monitoreo y Auditoría",
        items: {
          "AWS CloudWatch": {
            name: "AWS CloudWatch",
            description:
              "Monitoreo y observabilidad para recursos y aplicaciones en AWS",
          },
          "AWS CloudTrail": {
            name: "AWS CloudTrail",
            description:
              "Auditoría de actividad y seguimiento de cumplimiento en AWS",
          },
          AWSConfig: {
            name: "AWS Config",
            description:
              "Evaluación de configuración y cumplimiento de recursos en AWS",
          },
        },
      },
      {
        category: "Autenticación y Seguridad",
        items: {
          OAuth: {
            name: "OAuth",
            description: "Protocolo estándar para autorización segura",
          },
          GoogleAuth: {
            name: "Autenticación Google",
            description: "Autenticación mediante cuentas de Google",
          },
          MicrosoftAuth: {
            name: "Autenticación Microsoft",
            description:
              "Autenticación mediante cuentas de Microsoft para acceso seguro a servicios y aplicaciones.",
          },
          PCI_DSS: {
            name: "PCI DSS",
            description:
              "Estándar de seguridad para procesamiento de pagos con tarjeta",
          },
        },
      },
      {
        category: "Normativas Colombianas",
        items: {
          DIAN: {
            name: "DIAN",
            description:
              "Sistema de facturación electrónica de la autoridad tributaria colombiana",
          },
          EInvoicing: {
            name: "Facturación Electrónica",
            description:
              "Implementación de facturación electrónica según la ley colombiana",
          },
        },
      },
      {
        category: "Tecnologías en Tiempo Real",
        items: {
          WebSockets: {
            name: "WebSockets",
            description:
              "Protocolo para comunicación bidireccional en tiempo real",
          },
          WebRTC: {
            name: "WebRTC",
            description:
              "Tecnología para comunicación entre pares en navegadores",
          },
          MCP: {
            name: "MCP",
            description: "Protocolo de mensajería para sistemas distribuidos",
          },
        },
      },
    ],
  },
  en: {
    title: "Our Technology Stack",
    description:
      "We use cutting-edge technologies and frameworks to deliver robust, scalable, and innovative solutions.",
    technologies: [
      {
        category: "Languages",
        items: {
          JavaScript: {
            name: "JavaScript",
            description: "Programming language for interactive web development",
          },
          TypeScript: {
            name: "TypeScript",
            description: "Typed JavaScript for greater robustness",
          },
          Python: {
            name: "Python",
            description:
              "Versatile language for backend, data science, and automation",
          },
          Go: {
            name: "Go",
            description:
              "High-performance compiled language for distributed systems",
          },
          SQL: {
            name: "SQL",
            description: "Standard language for relational database management",
          },
        },
      },
      {
        category: "Frameworks and Libraries",
        items: {
          NestJS: {
            name: "NestJS",
            description:
              "Progressive framework for building server-side applications",
          },
          "Next.JS": {
            name: "Next.JS",
            description: "React framework for static and dynamic web apps",
          },
          Bootstrap: {
            name: "Bootstrap",
            description: "CSS framework for rapid responsive design",
          },
          Tailwind: {
            name: "Tailwind",
            description: "Utility-based CSS framework for custom designs",
          },
          PySpark: {
            name: "PySpark",
            description:
              "Framework for distributed processing of large data volumes",
          },
          PyTorch: {
            name: "PyTorch",
            description: "Machine learning library for computer vision and NLP",
          },
        },
      },
      {
        category: "API Technologies",
        items: {
          "REST APIs": {
            name: "REST APIs",
            description: "Architecture for HTTP-based web services",
          },
          SOAP: {
            name: "SOAP",
            description: "Protocol for structured web service communication",
          },
          GraphQL: {
            name: "GraphQL",
            description: "Query language for APIs with precise data retrieval",
          },
        },
      },
      {
        category: "Payment Gateways",
        items: {
          Stripe: {
            name: "Stripe",
            description: "Online payment platform for e-commerce",
          },
          MercadoPago: {
            name: "MercadoPago",
            description: "Leading payment solution in Latin America",
          },
          PayPal: {
            name: "PayPal",
            description: "Global platform for online financial transactions",
          },
        },
      },
      {
        category: "Testing and Quality",
        items: {
          UnitTesting: {
            name: "Unit Testing",
            description: "Tests that validate individual components",
          },
          "Integration Testing": {
            name: "Integration Testing",
            description: "Tests that validate interaction between components",
          },
          SonarQube: {
            name: "SonarQube",
            description: "Platform for continuous code quality inspection",
          },
          "Test Automation": {
            name: "Test Automation",
            description: "Automated tests for continuous delivery",
          },
          SocketDev: {
            name: "Socket.dev",
            description:
              "Platform to detect vulnerabilities in open source dependencies",
          },
        },
      },
      {
        category: "Architecture",
        items: {
          Hexagonal: {
            name: "Hexagonal",
            description:
              "Architecture that decouples business logic from external technology",
          },
          Microservices: {
            name: "Microservices",
            description:
              "Distributed architecture with independent and scalable services",
          },
          "Event-Driven": {
            name: "Event-Driven",
            description: "Architecture based on asynchronous event processing",
          },
          CQRS: {
            name: "CQRS",
            description: "Pattern separating commands from queries",
          },
        },
      },
      {
        category: "Infrastructure and Tools",
        items: {
          AWS: {
            name: "AWS",
            description: "Amazon's cloud computing platform",
          },
          Cloudflare: {
            name: "Cloudflare",
            description: "Network and security services for web applications",
          },
          Docker: {
            name: "Docker",
            description:
              "Platform for containerizing and distributing applications",
          },
          Redis: {
            name: "Redis",
            description: "In-memory storage for caching and messaging",
          },
          Metabase: {
            name: "Metabase",
            description: "Business intelligence and data visualization tool",
          },
        },
      },
      {
        category: "Monitoring and Auditing",
        items: {
          "AWS CloudWatch": {
            name: "AWS CloudWatch",
            description:
              "Monitoring and observability for AWS resources and applications",
          },
          "AWS CloudTrail": {
            name: "AWS CloudTrail",
            description: "Activity auditing and compliance tracking in AWS",
          },
          AWSConfig: {
            name: "AWS Config",
            description:
              "Configuration assessment and compliance evaluation for AWS resources",
          },
        },
      },
      {
        category: "Authentication and Security",
        items: {
          OAuth: {
            name: "OAuth",
            description: "Standard protocol for secure authorization",
          },
          GoogleAuth: {
            name: "Google Authentication",
            description: "Authentication using Google accounts",
          },
          MicrosoftAuth: {
            name: "Microsoft Authentication",
            description:
              "Authentication using Microsoft accounts for secure access to services and applications",
          },
          PCI_DSS: {
            name: "PCI DSS",
            description: "Security standard for card payment processing",
          },
        },
      },
      {
        category: "Colombian Regulations",
        items: {
          DIAN: {
            name: "DIAN",
            description:
              "Electronic invoicing system of the Colombian tax authority",
          },
          EInvoicing: {
            name: "Electronic Invoicing",
            description:
              "Implementation of electronic invoicing according to Colombian law",
          },
        },
      },
      {
        category: "Real-Time Technologies",
        items: {
          WebSockets: {
            name: "WebSockets",
            description: "Protocol for bidirectional real-time communication",
          },
          WebRTC: {
            name: "WebRTC",
            description:
              "Technology for peer-to-peer communication in browsers",
          },
          MCP: {
            name: "MCP",
            description: "Messaging protocol for distributed systems",
          },
        },
      },
    ],
  },
  fr: {
    title: "Notre Stack Technologique",
    description:
      "Nous utilisons des technologies et frameworks de pointe pour fournir des solutions robustes, évolutives et innovantes.",
    technologies: [
      {
        category: "Langages",
        items: {
          JavaScript: {
            name: "JavaScript",
            description:
              "Langage de programmation pour le développement web interactif",
          },
          TypeScript: {
            name: "TypeScript",
            description: "JavaScript typé pour plus de robustesse",
          },
          Python: {
            name: "Python",
            description:
              "Langage polyvalent pour le backend, la science des données et l'automatisation",
          },
          Go: {
            name: "Go",
            description:
              "Langage compilé haute performance pour les systèmes distribués",
          },
          SQL: {
            name: "SQL",
            description:
              "Langage standard pour la gestion de bases de données relationnelles",
          },
        },
      },
      {
        category: "Frameworks et Bibliothèques",
        items: {
          NestJS: {
            name: "NestJS",
            description:
              "Framework progressif pour construire des applications côté serveur",
          },
          "Next.JS": {
            name: "Next.JS",
            description:
              "Framework React pour applications web statiques et dynamiques",
          },
          Bootstrap: {
            name: "Bootstrap",
            description: "Framework CSS pour un design responsive rapide",
          },
          Tailwind: {
            name: "Tailwind",
            description:
              "Framework CSS basé sur les utilitaires pour des designs personnalisés",
          },
          PySpark: {
            name: "PySpark",
            description:
              "Framework pour le traitement distribué de grands volumes de données",
          },
          PyTorch: {
            name: "PyTorch",
            description:
              "Bibliothèque de machine learning pour la vision par ordinateur et le NLP",
          },
        },
      },
      {
        category: "Technologies API",
        items: {
          "REST APIs": {
            name: "API REST",
            description: "Architecture pour les services web basés sur HTTP",
          },
          SOAP: {
            name: "SOAP",
            description:
              "Protocole pour la communication structurée des services web",
          },
          GraphQL: {
            name: "GraphQL",
            description:
              "Langage de requêtes pour les API avec récupération précise des données",
          },
        },
      },
      {
        category: "Passerelles de Paiement",
        items: {
          Stripe: {
            name: "Stripe",
            description: "Plateforme de paiement en ligne pour le e-commerce",
          },
          MercadoPago: {
            name: "MercadoPago",
            description: "Solution de paiement leader en Amérique Latine",
          },
          PayPal: {
            name: "PayPal",
            description:
              "Plateforme mondiale pour les transactions financières en ligne",
          },
        },
      },
      {
        category: "Tests et Qualité",
        items: {
          UnitTesting: {
            name: "Tests Unitaires",
            description: "Tests qui valident des composants individuels",
          },
          "Integration Testing": {
            name: "Tests d'Intégration",
            description:
              "Tests qui valident l'interaction entre les composants",
          },
          SonarQube: {
            name: "SonarQube",
            description:
              "Plateforme pour l'inspection continue de la qualité du code",
          },
          "Test Automation": {
            name: "Automatisation des Tests",
            description: "Tests automatisés pour la livraison continue",
          },
          SocketDev: {
            name: "Socket.dev",
            description:
              "Plateforme pour détecter les vulnérabilités dans les dépendances open source",
          },
        },
      },
      {
        category: "Architecture",
        items: {
          Hexagonale: {
            name: "Hexagonale",
            description:
              "Architecture qui découple la logique métier de la technologie externe",
          },
          Microservices: {
            name: "Microservices",
            description:
              "Architecture distribuée avec des services indépendants et évolutifs",
          },
          "Event-Driven": {
            name: "Orientée Événements",
            description:
              "Architecture basée sur le traitement asynchrone des événements",
          },
          CQRS: {
            name: "CQRS",
            description:
              "Modèle de séparation entre les commandes et les requêtes",
          },
        },
      },
      {
        category: "Infrastructure et Outils",
        items: {
          AWS: {
            name: "AWS",
            description: "Plateforme de cloud computing d'Amazon",
          },
          Cloudflare: {
            name: "Cloudflare",
            description: "Services réseau et sécurité pour applications web",
          },
          Docker: {
            name: "Docker",
            description:
              "Plateforme pour conteneuriser et distribuer des applications",
          },
          Redis: {
            name: "Redis",
            description: "Stockage en mémoire pour cache et messagerie",
          },
          Metabase: {
            name: "Metabase",
            description:
              "Outil de business intelligence et visualisation de données",
          },
        },
      },
      {
        category: "Surveillance et Audit",
        items: {
          "AWS CloudWatch": {
            name: "AWS CloudWatch",
            description:
              "Surveillance et observabilité pour les ressources et applications AWS",
          },
          "AWS CloudTrail": {
            name: "AWS CloudTrail",
            description: "Audit d'activité et suivi de conformité dans AWS",
          },
          AWSConfig: {
            name: "AWS Config",
            description:
              "Évaluation de configuration et conformité des ressources AWS",
          },
        },
      },
      {
        category: "Authentification et Sécurité",
        items: {
          OAuth: {
            name: "OAuth",
            description: "Protocole standard pour une autorisation sécurisée",
          },
          GoogleAuth: {
            name: "Authentification Google",
            description: "Authentification via les comptes Google",
          },
          MicrosoftAuth: {
            name: "Authentification Microsoft",
            description:
              "Authentification via les comptes Microsoft pour un accès sécurisé aux services et applications",
          },
          PCI_DSS: {
            name: "PCI DSS",
            description:
              "Standard de sécurité pour le traitement des paiements par carte",
          },
        },
      },
      {
        category: "Réglementations Colombiennes",
        items: {
          DIAN: {
            name: "DIAN",
            description:
              "Système de facturation électronique de l'autorité fiscale colombienne",
          },
          EInvoicing: {
            name: "Facturation Électronique",
            description:
              "Mise en œuvre de la facturation électronique selon la loi colombienne",
          },
        },
      },
      {
        category: "Technologies en Temps Réel",
        items: {
          WebSockets: {
            name: "WebSockets",
            description:
              "Protocole pour une communication bidirectionnelle en temps réel",
          },
          WebRTC: {
            name: "WebRTC",
            description:
              "Technologie pour la communication pair-à-pair dans les navigateurs",
          },
          MCP: {
            name: "MCP",
            description: "Protocole de messagerie pour les systèmes distribués",
          },
        },
      },
    ],
  },
  ja: {
    title: "私たちの技術スタック",
    description:
      "堅牢でスケーラブル、革新的なソリューションを提供するために、最先端の技術とフレームワークを使用しています。",
    technologies: [
      {
        category: "プログラミング言語",
        items: {
          JavaScript: {
            name: "JavaScript",
            description: "インタラクティブなWeb開発のためのプログラミング言語",
          },
          TypeScript: {
            name: "TypeScript",
            description: "より堅牢な型付きJavaScript",
          },
          Python: {
            name: "Python",
            description:
              "バックエンド、データサイエンス、自動化のための汎用言語",
          },
          Go: {
            name: "Go",
            description: "分散システム向けの高性能コンパイル言語",
          },
          SQL: {
            name: "SQL",
            description: "リレーショナルデータベース管理のための標準言語",
          },
        },
      },
      {
        category: "フレームワークとライブラリ",
        items: {
          NestJS: {
            name: "NestJS",
            description:
              "サーバーサイドアプリケーション構築のためのプログレッシブフレームワーク",
          },
          "Next.JS": {
            name: "Next.JS",
            description: "静的および動的WebアプリのためのReactフレームワーク",
          },
          Bootstrap: {
            name: "Bootstrap",
            description: "迅速なレスポンシブデザインのためのCSSフレームワーク",
          },
          Tailwind: {
            name: "Tailwind",
            description:
              "カスタムデザインのためのユーティリティベースCSSフレームワーク",
          },
          PySpark: {
            name: "PySpark",
            description: "大規模データ分散処理のためのフレームワーク",
          },
          PyTorch: {
            name: "PyTorch",
            description: "コンピュータビジョンとNLPのための機械学習ライブラリ",
          },
        },
      },
      {
        category: "API技術",
        items: {
          "REST APIs": {
            name: "REST API",
            description: "HTTPベースのWebサービスのためのアーキテクチャ",
          },
          SOAP: {
            name: "SOAP",
            description: "構造化されたWebサービス通信のためのプロトコル",
          },
          GraphQL: {
            name: "GraphQL",
            description: "正確なデータ取得のためのAPIクエリ言語",
          },
        },
      },
      {
        category: "決済ゲートウェイ",
        items: {
          Stripe: {
            name: "Stripe",
            description: "eコマースのためのオンライン決済プラットフォーム",
          },
          MercadoPago: {
            name: "MercadoPago",
            description: "ラテンアメリカで主要な決済ソリューション",
          },
          PayPal: {
            name: "PayPal",
            description: "オンライン金融取引のためのグローバルプラットフォーム",
          },
        },
      },
      {
        category: "テストと品質",
        items: {
          UnitTesting: {
            name: "単体テスト",
            description: "個々のコンポーネントを検証するテスト",
          },
          "Integration Testing": {
            name: "結合テスト",
            description: "コンポーネント間の相互作用を検証するテスト",
          },
          SonarQube: {
            name: "SonarQube",
            description: "コード品質を継続的に検査するプラットフォーム",
          },
          "Test Automation": {
            name: "テスト自動化",
            description: "継続的デリバリーのための自動化テスト",
          },
          SocketDev: {
            name: "Socket.dev",
            description:
              "オープンソース依存関係の脆弱性を検出するプラットフォーム",
          },
        },
      },
      {
        category: "アーキテクチャ",
        items: {
          Hexagonal: {
            name: "ヘキサゴナル",
            description: "ビジネスロジックと外部技術を分離するアーキテクチャ",
          },
          Microservices: {
            name: "マイクロサービス",
            description:
              "独立してスケーラブルなサービスを持つ分散アーキテクチャ",
          },
          "Event-Driven": {
            name: "イベント駆動",
            description: "非同期イベント処理に基づくアーキテクチャ",
          },
          CQRS: {
            name: "CQRS",
            description: "コマンドとクエリを分離するパターン",
          },
        },
      },
      {
        category: "インフラストラクチャとツール",
        items: {
          AWS: {
            name: "AWS",
            description: "Amazonのクラウドコンピューティングプラットフォーム",
          },
          Cloudflare: {
            name: "Cloudflare",
            description:
              "Webアプリケーションのためのネットワークとセキュリティサービス",
          },
          Docker: {
            name: "Docker",
            description:
              "アプリケーションをコンテナ化して配布するプラットフォーム",
          },
          Redis: {
            name: "Redis",
            description:
              "キャッシュとメッセージングのためのインメモリストレージ",
          },
          Metabase: {
            name: "Metabase",
            description: "ビジネスインテリジェンスとデータ可視化ツール",
          },
        },
      },
      {
        category: "監視と監査",
        items: {
          "AWS CloudWatch": {
            name: "AWS CloudWatch",
            description: "AWSリソースとアプリケーションの監視と可観測性",
          },
          "AWS CloudTrail": {
            name: "AWS CloudTrail",
            description: "AWS内のアクティビティ監査とコンプライアンス追跡",
          },
          AWSConfig: {
            name: "AWS Config",
            description: "AWSリソースの設定評価とコンプライアンス評価",
          },
        },
      },
      {
        category: "認証とセキュリティ",
        items: {
          OAuth: {
            name: "OAuth",
            description: "安全な認可のための標準プロトコル",
          },
          GoogleAuth: {
            name: "Google認証",
            description: "Googleアカウントを使用した認証",
          },
          MicrosoftAuth: {
            name: "Microsoft認証",
            description:
              "サービスとアプリケーションへの安全なアクセスのためのMicrosoftアカウント認証",
          },
          PCI_DSS: {
            name: "PCI DSS",
            description: "カード決済処理のためのセキュリティ標準",
          },
        },
      },
      {
        category: "コロンビア規制",
        items: {
          DIAN: {
            name: "DIAN",
            description: "コロンビア税務当局の電子請求書システム",
          },
          EInvoicing: {
            name: "電子請求書",
            description: "コロンビア法に基づく電子請求書の実装",
          },
        },
      },
      {
        category: "リアルタイム技術",
        items: {
          WebSockets: {
            name: "WebSocket",
            description: "双方向リアルタイム通信のためのプロトコル",
          },
          WebRTC: {
            name: "WebRTC",
            description: "ブラウザ間のピアツーピア通信技術",
          },
          MCP: {
            name: "MCP",
            description: "分散システムのためのメッセージングプロトコル",
          },
        },
      },
    ],
  },
  zh: {
    title: "我们的技术栈",
    description: "我们采用前沿技术和框架，提供稳健、可扩展且创新的解决方案。",
    technologies: [
      {
        category: "编程语言",
        items: {
          JavaScript: {
            name: "JavaScript",
            description: "用于交互式网页开发的编程语言",
          },
          TypeScript: {
            name: "TypeScript",
            description: "强类型的JavaScript，提高代码健壮性",
          },
          Python: {
            name: "Python",
            description: "适用于后端、数据科学和自动化的多用途语言",
          },
          Go: {
            name: "Go",
            description: "面向分布式系统的高性能编译型语言",
          },
          SQL: {
            name: "SQL",
            description: "关系型数据库管理的标准语言",
          },
        },
      },
      {
        category: "框架与库",
        items: {
          NestJS: {
            name: "NestJS",
            description: "用于构建服务端应用的渐进式框架",
          },
          "Next.JS": {
            name: "Next.JS",
            description: "用于静态和动态网页应用的React框架",
          },
          Bootstrap: {
            name: "Bootstrap",
            description: "快速实现响应式设计的CSS框架",
          },
          Tailwind: {
            name: "Tailwind",
            description: "基于实用程序的CSS框架，支持定制化设计",
          },
          PySpark: {
            name: "PySpark",
            description: "用于大规模数据分布式处理的框架",
          },
          PyTorch: {
            name: "PyTorch",
            description: "用于计算机视觉和自然语言处理的机器学习库",
          },
        },
      },
      {
        category: "API技术",
        items: {
          "REST APIs": {
            name: "REST API",
            description: "基于HTTP的Web服务架构",
          },
          SOAP: {
            name: "SOAP",
            description: "结构化Web服务通信协议",
          },
          GraphQL: {
            name: "GraphQL",
            description: "可精确获取数据的API查询语言",
          },
        },
      },
      {
        category: "支付网关",
        items: {
          Stripe: {
            name: "Stripe",
            description: "电子商务在线支付平台",
          },
          MercadoPago: {
            name: "MercadoPago",
            description: "拉丁美洲领先的支付解决方案",
          },
          PayPal: {
            name: "PayPal",
            description: "全球在线金融交易平台",
          },
        },
      },
      {
        category: "测试与质量",
        items: {
          UnitTesting: {
            name: "单元测试",
            description: "验证独立组件的测试",
          },
          "Integration Testing": {
            name: "集成测试",
            description: "验证组件间交互的测试",
          },
          SonarQube: {
            name: "SonarQube",
            description: "持续检测代码质量的平台",
          },
          "Test Automation": {
            name: "自动化测试",
            description: "支持持续交付的自动化测试",
          },
          SocketDev: {
            name: "Socket.dev",
            description: "检测开源依赖项漏洞的平台",
          },
        },
      },
      {
        category: "架构设计",
        items: {
          Hexagonal: {
            name: "六边形架构",
            description: "将业务逻辑与外部技术解耦的架构",
          },
          Microservices: {
            name: "微服务",
            description: "由独立可扩展服务组成的分布式架构",
          },
          "Event-Driven": {
            name: "事件驱动",
            description: "基于异步事件处理的架构",
          },
          CQRS: {
            name: "CQRS",
            description: "命令与查询责任分离模式",
          },
        },
      },
      {
        category: "基础设施与工具",
        items: {
          AWS: {
            name: "AWS",
            description: "亚马逊云计算平台",
          },
          Cloudflare: {
            name: "Cloudflare",
            description: "为Web应用提供网络与安全服务",
          },
          Docker: {
            name: "Docker",
            description: "应用容器化与分发的平台",
          },
          Redis: {
            name: "Redis",
            description: "用于缓存和消息传递的内存存储",
          },
          Metabase: {
            name: "Metabase",
            description: "商业智能与数据可视化工具",
          },
        },
      },
      {
        category: "监控与审计",
        items: {
          "AWS CloudWatch": {
            name: "AWS CloudWatch",
            description: "AWS资源与应用的监控观测服务",
          },
          "AWS CloudTrail": {
            name: "AWS CloudTrail",
            description: "AWS活动审计与合规性追踪",
          },
          AWSConfig: {
            name: "AWS Config",
            description: "AWS资源配置评估与合规性检查",
          },
        },
      },
      {
        category: "认证与安全",
        items: {
          OAuth: {
            name: "OAuth",
            description: "安全授权的标准协议",
          },
          GoogleAuth: {
            name: "Google认证",
            description: "使用Google账户进行认证",
          },
          MicrosoftAuth: {
            name: "Microsoft认证",
            description: "通过Microsoft账户安全访问服务和应用",
          },
          PCI_DSS: {
            name: "PCI DSS",
            description: "银行卡支付处理的安全标准",
          },
        },
      },
      {
        category: "哥伦比亚规范",
        items: {
          DIAN: {
            name: "DIAN",
            description: "哥伦比亚税务局的电子发票系统",
          },
          EInvoicing: {
            name: "电子发票",
            description: "根据哥伦比亚法律实施的电子发票系统",
          },
        },
      },
      {
        category: "实时技术",
        items: {
          WebSockets: {
            name: "WebSocket",
            description: "双向实时通信协议",
          },
          WebRTC: {
            name: "WebRTC",
            description: "浏览器间点对点通信技术",
          },
          MCP: {
            name: "MCP",
            description: "分布式系统的消息传递协议",
          },
        },
      },
    ],
  },
};
