import type { PortfolioData } from "./types";

const GH = "https://github.com/jmainamercy/";

export const DATA: PortfolioData = {
  email: "jmainamercy@gmail.com",
  github: GH,
  linkedin: "https://www.linkedin.com/in/mercy-maina-jerotich/",
  resume:
    "https://drive.google.com/file/d/1Js2gyqN67-3OpfyZQtQX8C4zb1A7b_qh/view?usp=sharing",

  facts: [
    [
      "Education",
      "AkiraChix codeHive 2026",
      "Diploma in Information Technology. An intensive software engineering programme centred on practical development, technical problem-solving and collaborative projects.",
    ],
    [
      "Experience",
      "Equity Bank",
      "Completed a six-month internship from February to August 2022 as a Customer Relationship Manager. The role involved customer service, cashier operations, understanding customer needs and resolving enquiries.",
    ],
    [
      "Principle",
      "Test early",
      "Testing is part of development, not an afterthought. Early validation helps uncover problems while they are still easier to investigate and fix.",
    ],
    [
      "Principle",
      "Understand failures",
      "When something breaks, investigate the underlying cause instead of only fixing the visible symptom.",
    ],
  ],

  expertise: [
    [
      "Backend Engineering",
      "Building backend applications and services, designing REST APIs, modelling relational data and implementing authentication, authorization and application logic.",
      [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Pydantic",
        "JWT",
        "OAuth2",
      ],
      ["API development", "Database design", "Authentication"],
    ],
    [
      "AI & Machine Learning",
      "Building intelligent application features with document retrieval, semantic search, language models and computer vision.",
      [
        "Python",
        "YOLOv8",
        "Sentence Transformers",
        "ChromaDB",
        "Google Gemini",
        "RAG",
      ],
      ["Computer vision", "Information retrieval", "Embeddings"],
    ],
    [
      "Quality Assurance",
      "Validating application behaviour through functional and automated testing, API checks, edge-case analysis and systematic defect investigation.",
      ["Pytest", "Playwright", "Cypress", "Postman", "Jest"],
      ["Test automation", "Regression testing", "Defect investigation"],
    ],
    [
      "Mobile Development",
      "Developing cross-platform mobile applications with Flutter, managing application state and integrating backend services.",
      ["Flutter", "Dart", "Provider", "Firebase Cloud Messaging", "REST APIs"],
      ["Cross-platform development", "State management", "API integration"],
    ],
  ],

  projects: [
    {
      name: "KNode",
      tag: "AI-powered funding matchmaking",
      shot: "backend · AI · matching",
      desc: "An AI-powered funding matchmaking platform that helps African nonprofit organisations discover relevant opportunities and assess their suitability using structured requirements and organisational evidence.",
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Gemini File Search",
        "RAG",
      ],
      role: "Backend Engineer (team project)",
      mine: [
        "Developed backend functionality using FastAPI and Python.",
        "Contributed to the matching engine that evaluates organisations against funding opportunities.",
        "Worked with PostgreSQL database structures and SQLAlchemy models.",
        "Implemented matching functionality involving organisation capabilities, opportunity requirements, eligibility assessment and match scores.",
        "Integrated Google Gemini File Search into document retrieval and evidence-processing workflows.",
        "Worked on retrieval governance, including distinguishing supporting evidence from missing or unavailable information.",
        "Contributed to backend workflows that connect matching results with their supporting evidence.",
        "Authored the backend section of the team's technical documentation, covering architecture, APIs, database design, authentication, security, matching and testing.",
        "Created the documentation home and overview pages and improved dark-mode logo visibility and styling.",
      ],
      problem:
        "Nonprofit organisations can struggle to identify suitable funding opportunities and demonstrate how their capabilities meet funder requirements. KNode addresses this through structured opportunity intelligence and evidence-based matchmaking.",
      decisions: [
        "Used FastAPI to build API functionality and keep backend responsibilities organised.",
        "Used PostgreSQL for structured organisation, opportunity and matching data.",
        "Combined structured requirement assessment with document retrieval instead of relying on keyword similarity alone.",
        "Kept missing or unavailable evidence distinct from confirmed eligibility failures.",
      ],
      challenges: [
        "Combining structured opportunity requirements with information retrieved from organisational documents.",
        "Avoiding incorrect eligibility conclusions when supporting evidence is incomplete or unavailable.",
        "Keeping matching outcomes connected to the evidence used to produce them.",
      ],
      informationalWebsite: "https://alya-informational-website.vercel.app/",
      informationalWebsiteLabel: "Informational website",
      app: "https://alya-frontend-1-bmmr2ohps-jmainamercys-projects.vercel.app/",
      appLabel: "Web application",
      repo: "https://github.com/akirachix/alya-technical-documentation",
      repoLabel: "Technical documentation",
      demo: "https://www.figma.com/design/PTzmcNxKd5TkdVwGEDjJQH/alya--final-project",
      demoLabel: "Figma design",
      images: [
        {
          file: "images/alya/matching-results.png",
          caption: "Ranked funding opportunities for an organisation",
        },
      ],
    },

    {
      name: "Ishuko",
      tag: "Agricultural marketplace",
      shot: "mobile · backend · computer vision",
      desc: "A digital agricultural marketplace connecting farmers and buyers, with produce grading, pickup coordination and payment functionality.",
      tech: [
        "Flutter",
        "Dart",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "YOLOv8",
        "Flutterwave",
        "LocationIQ",
        "Firebase Cloud Messaging",
      ],
      role: "Software Engineer — research, design, mobile, backend and ML (team project)",
      mine: [
        "Conducted primary and secondary research with farmers, cooperatives and buyers to understand barriers in agricultural trading.",
        "Translated research findings into user flows, wireframes and high-fidelity interfaces in Figma.",
        "Developed Flutter application features using Dart and an MVVM-Service architecture, including profiles, product management, orders and checkout.",
        "Built REST API functionality with FastAPI and a layered backend architecture.",
        "Designed PostgreSQL data models using SQLAlchemy and Pydantic.",
        "Implemented JWT authentication and role-based access control.",
        "Integrated Flutterwave payment functionality, including the project's escrow workflow.",
        "Integrated LocationIQ for pickup location management and Firebase Cloud Messaging for notifications.",
        "Developed a YOLOv8 maize-grading model exposed through a REST API, achieving approximately 70% accuracy in the project implementation.",
        "Performed API and functional testing using Postman.",
      ],
      problem:
        "Farmers face challenges connecting with buyers, communicating produce quality and completing secure transactions. Ishuko brings marketplace, grading, pickup and payment workflows into one mobile application.",
      decisions: [
        "Used Flutter to build the cross-platform mobile application.",
        "Used FastAPI and PostgreSQL for backend services and application data.",
        "Separated application state and service responsibilities through an MVVM-Service structure.",
        "Exposed the YOLOv8 grading model through an API so the mobile application could use its predictions.",
      ],
      challenges: [
        "Connecting mobile application workflows to backend authentication and business logic.",
        "Integrating external services for payments, location and notifications.",
        "Making a computer-vision model accessible to the application through a REST API.",
      ],
      informationalWebsite:
        "https://tech-dex-informational-website.vercel.app/",
      informationalWebsiteLabel: "Informational website",
      repo: "https://akirachix.github.io/TechDex_Technical_Documentation/",
      repoLabel: "Technical documentation",
      demo: "https://www.figma.com/design/kFwvSYf4f5FjE8uUzDdbl5/TechDex?m=auto&t=WMONF6KpWwv5sBIx-1",
      demoLabel: "Figma design",
    },

    {
      name: "Retail POS API",
      tag: "Point-of-sale backend",
      shot: "backend · inventory · checkout",
      desc: "A retail point-of-sale backend API for product management, inventory tracking, checkout, payment transactions, customer records and loyalty points.",
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Pydantic v2",
        "OAuth2",
        "JWT",
      ],
      role: "Backend Developer",
      mine: [
        "Developed REST API endpoints for products, inventory, sales, payments and customer loyalty.",
        "Designed relational database models using PostgreSQL and SQLAlchemy.",
        "Organised the backend using a Router-Service-Repository architecture to separate routes, business logic and data access.",
        "Implemented OAuth2 password authentication and JWT-based endpoint protection.",
        "Used Pydantic v2 to validate incoming data and structure API responses.",
        "Implemented checkout calculations with Python Decimal to avoid floating-point rounding errors in monetary transactions.",
        "Supported split payments within the checkout workflow.",
        "Implemented stock updates and loyalty-point tracking.",
      ],
      problem:
        "Retail operations depend on accurate inventory, dependable checkout workflows and consistent transaction records. This API provides backend functionality for those core operations.",
      decisions: [
        "Separated HTTP handling, business logic and database access through Router-Service-Repository layers.",
        "Used Decimal rather than binary floating-point values for monetary calculations.",
        "Used Pydantic schemas to validate request data and shape responses.",
        "Protected application endpoints with token-based authentication.",
      ],
      challenges: [
        "Maintaining monetary accuracy across checkout and split-payment calculations.",
        "Keeping inventory updates consistent with sales and checkout operations.",
        "Structuring the API so business rules remain separate from route handlers and database operations.",
      ],
      repo: GH + "pos_system",
    },

    {
      name: "Kenya Law GBV RAG",
      tag: "Retrieval-augmented generation",
      shot: "AI · embeddings · source citations",
      desc: "A retrieval-augmented generation system that uses Kenyan legal and policy documents to answer questions about gender-based violence with references to supporting source passages.",
      tech: [
        "Python",
        "Sentence Transformers",
        "ChromaDB",
        "LLM",
        "Google Colab",
      ],
      role: "AI/ML Engineer",
      mine: [
        "Collected and prepared relevant legal and policy documents for the retrieval pipeline.",
        "Cleaned and divided documents into smaller text chunks for retrieval.",
        "Generated text embeddings using Sentence Transformers.",
        "Stored document embeddings in ChromaDB for semantic search.",
        "Built a retrieval pipeline to identify relevant passages for user questions.",
        "Integrated an LLM to generate answers grounded in retrieved document content.",
        "Included source references so supporting legal passages could be traced.",
        "Tested the end-to-end pipeline in Google Colab.",
      ],
      problem:
        "Finding relevant information in lengthy legal and policy documents can be difficult. This project explores how semantic retrieval and language models can make that information easier to access while retaining links to original sources.",
      decisions: [
        "Used semantic embeddings to retrieve passages by meaning rather than exact keyword matches.",
        "Used ChromaDB for vector storage and similarity search.",
        "Grounded generated answers in retrieved passages to reduce unsupported responses.",
        "Included source references to improve traceability.",
      ],
      challenges: [
        "Preparing legal documents for retrieval while retaining useful context.",
        "Retrieving relevant passages for questions phrased in natural language.",
        "Keeping generated answers connected to the source material.",
      ],
      repo: GH + "GBV_RAG",
    },

    {
      name: "Automated Exercise",
      tag: "QA automation",
      shot: "Cypress · functional · regression testing",
      desc: "A Cypress automation project that validates essential e-commerce user journeys, including authentication, navigation, product interactions and checkout.",
      tech: ["Cypress", "JavaScript", "Node.js"],
      role: "QA Automation Engineer",
      mine: [
        "Analysed application requirements and user workflows to identify important test scenarios.",
        "Automated registration and login workflows.",
        "Created tests for navigation, product interactions and checkout functionality.",
        "Covered positive and negative scenarios to validate behaviour under different conditions.",
        "Added assertions for interface elements, validation messages and expected application states.",
        "Investigated failed tests and reproduced unexpected behaviour.",
        "Documented identified defects and used regression testing to validate application changes.",
        "Structured reusable test cases to improve maintainability.",
      ],
      problem:
        "Essential e-commerce workflows need to behave consistently. Automated tests help detect unexpected behaviour and regressions before they affect users.",
      decisions: [
        "Used Cypress to automate browser-based user interactions.",
        "Included positive and negative scenarios rather than testing only successful workflows.",
        "Used assertions to validate expected application behaviour.",
        "Organised reusable test cases to support regression testing.",
      ],
      challenges: [
        "Identifying meaningful negative scenarios beyond the normal user journey.",
        "Investigating failed tests to distinguish application defects from test-related issues.",
      ],
      repo: GH + "automated-exercise-cypress",
    },

    {
      name: "Flutter Uniqlo",
      tag: "E-commerce mobile application",
      shot: "Flutter · authentication · shopping cart",
      desc: "A Flutter e-commerce application inspired by UNIQLO, featuring user authentication, product browsing, shopping cart management and persistent user sessions.",
      tech: ["Flutter", "Dart", "Provider", "REST APIs", "SharedPreferences"],
      role: "Mobile Developer",
      mine: [
        "Developed login, registration and password recovery screens.",
        "Implemented product browsing, cart and user profile functionality.",
        "Used Provider and ChangeNotifier for authentication and cart state management.",
        "Integrated REST endpoints using the HTTP package.",
        "Implemented access and refresh token handling.",
        "Used SharedPreferences to persist session information between application launches.",
        "Implemented cart operations, including adding products, updating quantities, removing items and calculating totals.",
        "Separated application state management from API communication using ViewModel and service layers.",
      ],
      problem:
        "A mobile shopping application needs a consistent experience across authentication, product discovery and cart management, including when users return to the app.",
      decisions: [
        "Used Provider and ChangeNotifier to manage application state.",
        "Separated API communication into service classes.",
        "Used SharedPreferences for local session persistence.",
        "Kept cart operations in reusable state-management logic.",
      ],
      challenges: [
        "Managing authentication state across application sessions.",
        "Keeping cart quantities and totals consistent as users update their selections.",
        "Separating API communication from presentation and state management.",
      ],
      repo: GH + "flutter-uniqlo",
    },
  ],

  experiments: [
    {
      name: "Camera Puzzle Game",
      kind: "Additional project · game development",
      desc: "An interactive puzzle game that uses camera functionality as part of the gameplay experience.",
      tech: [],
      role: "Creator",
      problem:
        "Explores the use of camera interaction within a puzzle-based game.",
      decisions: [],
      challenges: [],
      repo: GH + "Camera-Puzzle-App",
    },
  ],

  principles: [
    "Understand the problem before choosing a technical solution.",
    "Consider edge cases, not just the expected user journey.",
    "Investigate the root cause of failures rather than treating symptoms.",
    "Design maintainable systems with clear separation of responsibilities.",
    "Use testing throughout development to improve software reliability.",
    "Build with evidence, validate assumptions and keep learning.",
  ],

  toolkit: {
    Languages: ["Python", "Dart", "JavaScript", "SQL", "HTML", "CSS"],
    Backend: [
      "FastAPI",
      "SQLAlchemy",
      "Pydantic",
      "REST APIs",
      "JWT",
      "OAuth2",
    ],
    Databases: ["PostgreSQL", "ChromaDB", "DuckDB"],
    "AI/ML": ["YOLOv8", "Sentence Transformers", "Google Gemini", "RAG"],
    Testing: ["Pytest", "Playwright", "Cypress", "Jest", "Postman"],
    Mobile: ["Flutter", "Dart", "Provider", "Firebase Cloud Messaging"],
    Web: ["React.js", "Next.js"],
    Tools: [
      "Git",
      "GitHub",
      "Docker",
      "Jira",
      "Figma",
      "Google Colab",
      "Jupyter Notebook",
      "Flutterwave",
      "LocationIQ",
      "dbt",
    ],
  },

  timeline: [
    {
      title: "AkiraChix — codeHive 2026",
      sub: "Diploma in Information Technology",
      label: "Education",
      note: "February 2026 - November 2026. An intensive software engineering programme involving practical software development, technical problem-solving and collaborative projects.",
    },
    {
      title: "Equity Bank",
      sub: "Customer Relationship Manager Intern",
      label: "Experience",
      note: "February 2022 - August 2022. Worked in customer service, cashier operations, customer relationship management and problem-solving.",
    },
  ],
};
