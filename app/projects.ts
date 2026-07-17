export type ProjectType = "design" | "dev";

export interface ProjectBase {
  slug: string;
  type: ProjectType;
  title: string;
  description: string;
  projectGoal: string;
  techStack: string[];
  techDetails: string[];
  image: string;
  link: string;
  linkText: string;
}

export interface DesignMetrics {
  reusability: number;
  consistency: number;
  usability: number;
}

export interface DesignScreen {
  title: string;
  imageUrl: string;
  description: string;
}

export interface DesignComponent {
  title: string;
  imageUrl: string;
  description: string;
  designRationale: string;
}

export interface DesignProject extends ProjectBase {
  type: "design";
  designProcess: string[];
  metrics: DesignMetrics;
  screenGallery: DesignScreen[];
  componentGallery: DesignComponent[];
}

export interface DevMetrics {
  performance: number;
  accessibility: number;
  seo: number;
}

export interface TechStackDetail {
  name: string;
  description: string;
}

export interface DevProject extends ProjectBase {
  type: "dev";
  techStackDetails: TechStackDetail[];
  metrics: DevMetrics;
}

export type Project = DesignProject | DevProject;

export const projects = [
  {
    slug: "polyhistor-travel-platform",
    type: "dev",
    title: "Polyhistor - AI-Powered Travel Planning Platform",
    description:
      "As Founding Engineer, architected a B2B2C travel platform that reduces user planning time by 40% using LLM-driven itinerary generation. Built offline-first sync layer ensuring 100% data integrity in zero-connectivity areas and cut battery consumption by 40% with custom native location engine.",
    projectGoal:
      "Build a production-grade travel planning platform that leverages AI to personalize itineraries while maintaining flawless offline functionality and optimal battery performance.",
    techStack: [
      "React Native (Fabric)",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Apache Kafka",
      "LLMs",
      "TypeScript",
      "Next.js"
    ],
    techStackDetails: [
      {
        name: "React Native (Fabric)",
        description:
          "Built high-performance mobile app with custom native modules for location tracking and offline sync.",
      },
      {
        name: "Node.js & Apache Kafka",
        description:
          "Event-driven architecture handling 2,000+ concurrent users with async processing for LLM requests.",
      },
      {
        name: "PostgreSQL & AWS",
        description:
          "Scalable relational database on AWS RDS with read replicas for high availability.",
      },
      {
        name: "LLM Integration",
        description:
          "Integrated multiple LLM providers for personalized itinerary generation and natural language queries.",
      },
    ],
    metrics: { performance: 95, accessibility: 98, seo: 100 },
    techDetails: [
      "**Reduced Planning Time by 40%:** LLM-driven itinerary generation creates personalized travel plans in seconds.",
      "**100% Data Integrity Offline:** Architected offline-first sync layer with conflict resolution for zero-connectivity areas.",
      "**40% Battery Reduction:** Custom native location engine with intelligent sampling and background optimization.",
      "**Scaled to 2,000+ Concurrent Users:** Event-driven architecture with Apache Kafka for async processing.",
      "**Production AI Agents:** Built multi-agent system for itinerary optimization, budget tracking, and real-time recommendations.",
    ],
    image: "/polyhistor-logo.png",
    link: "https://polyhistor.ai",
    linkText: "Visit Polyhistor",
  },
  {
    slug: "multi-agent-decision-framework",
    type: "dev",
    title: "Multi-Agent Anonymous Decision Framework",
    description:
      "Research project building an ensemble AI system that aggregates responses from multiple LLMs (Claude, Gemini, Perplexity) with anonymization pipeline to eliminate model bias. Evaluates outputs for production-grade reliability in critical decision-making scenarios.",
    projectGoal:
      "Create a framework for unbiased, reliable AI decision-making by aggregating multiple LLM outputs through anonymization and consensus mechanisms.",
    techStack: [
      "Python",
      "Claude API",
      "Gemini API",
      "Perplexity API",
      "Prompt Engineering",
      "LLM Evaluation",
    ],
    techStackDetails: [
      {
        name: "Multi-LLM Orchestration",
        description:
          "Aggregates responses from Claude, Gemini, and Perplexity with weighted scoring based on domain expertise.",
      },
      {
        name: "Anonymization Pipeline",
        description:
          "Strips identifying markers from LLM outputs to eliminate brand bias in evaluation.",
      },
      {
        name: "Consensus Engine",
        description:
          "Statistical analysis of agreement patterns across models for confidence scoring.",
      },
    ],
    metrics: { performance: 90, accessibility: 95, seo: 90 },
    techDetails: [
      "**Ensemble AI System:** Aggregates 3+ LLM providers for comprehensive decision analysis.",
      "**Bias Elimination:** Anonymization pipeline removes model-specific patterns and branding.",
      "**Production-Grade Evaluation:** Automated scoring system for output reliability and consistency.",
      "**Domain-Specific Weighting:** Dynamic model weighting based on topic expertise.",
    ],
    image: "/multi-agent-framework.png",
    link: "#",
    linkText: "In Planning - Coming Soon",
  },
  {
    slug: "d-gix-geospatial-indexing",
    type: "dev",
    title: "D-GIX - Custom Geospatial Indexing System",
    description:
      "Research project designing an optimized spatial data querying system for location-based services. D-GIX enhances backend performance for mapping applications through novel indexing algorithms that reduce query latency for proximity-based searches.",
    projectGoal:
      "Develop a geospatial indexing system that outperforms existing solutions (Geohash, S2) for specific use cases in location-based services and proximity queries.",
    techStack: [
      "Spatial Algorithms",
      "PostgreSQL",
      "PostGIS",
      "Python",
      "Performance Optimization",
    ],
    techStackDetails: [
      {
        name: "Spatial Indexing Algorithms",
        description:
          "Novel approach to hierarchical spatial decomposition optimized for urban environments.",
      },
      {
        name: "PostgreSQL & PostGIS",
        description:
          "Implementation using PostgreSQL extensions for geospatial operations and benchmarking.",
      },
      {
        name: "Performance Analysis",
        description:
          "Comprehensive benchmarking against Geohash, S2, and H3 indexing systems.",
      },
    ],
    metrics: { performance: 92, accessibility: 90, seo: 85 },
    techDetails: [
      "**Optimized Query Performance:** 30% faster proximity queries compared to Geohash in urban scenarios.",
      "**Hierarchical Structure:** Multi-resolution indexing supporting zoom-level optimizations.",
      "**Research Paper in Progress:** Co-authoring academic paper on novel indexing approach.",
      "**Real-World Application:** Designed for integration with Polyhistor travel platform.",
    ],
    image: "/dgix-image.jpeg",
    link: "https://thepolyhistor-my.sharepoint.com/:b:/r/personal/apps_thepolyhistor_com/Documents/Polyhistor%20Data%20Room/Polyhistor%20Research/Polyhistor_DGIX_Research_Paper.pdf?csf=1&web=1&e=IbxHkB",
    linkText: "Read Research Paper",
  },
  {
    slug: "aura-fashion-app",
    type: "design",
    title: "Aura: Mobile Fashion App & Design System",
    description:
      "A high-fidelity prototype for 'Aura,' a modern mobile fashion app, designed to provide a seamless and visually engaging shopping experience. The project is built upon a comprehensive, component-based design system created from the ground up in Figma.",
    projectGoal:
      "The goal was to design a mobile fashion app that feels intuitive, personal, and inspiring. We aimed to solve the common user frustrations of cluttered interfaces and difficult navigation in e-commerce apps by creating a clean, component-driven design system.",
    techStack: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    designProcess: [
      "User Research & Persona Development",
      "Wireframing & Low-Fidelity Prototypes",
      "Component-Based Design System in Figma",
      "High-Fidelity Interactive Prototyping",
      "Usability Testing & Iteration",
    ],
    metrics: {
      reusability: 95,
      consistency: 100,
      usability: 95,
    },
    techDetails: [
      "End-to-End UI/UX Design in Figma",
      "Comprehensive Design System",
      "Component-Based Architecture",
      "Advanced Interactive Prototyping",
      "Auto Layout & Variants",
    ],
    image: "/aura_ecommerce.png",
    link: "https://www.figma.com/design/WQBf7omrPKXxs4mPQy3TGn/E-Commerce?node-id=6-9&t=ezpLlzIhGDmygKin-1",
    linkText: "View Project in Figma",
    screenGallery: [
      {
        title: "Home Screen",
        imageUrl: "/aura_home.png",
        description:
          "The home screen is designed for effortless discovery. It features a welcoming header, prominent category filters, and a curated product grid to minimize taps and guide users to relevant items quickly and elegantly.",
      },
      {
        title: "Product Description Screen",
        imageUrl: "/aura_description.png",
        description:
          "This screen provides a clean, focused view of the product. Key information like price, description, and color/size options are presented clearly, with a persistent 'Add To Cart' button to ensure a seamless path to purchase.",
      },
      {
        title: "Search & Filter Screen",
        imageUrl: "/aura_search.png",
        description:
          "The search experience is enhanced with multi-faceted filtering options (Category, Gender, Color). Sections for 'Previous' and 'Trending' searches help users find what they're looking for faster by reducing cognitive load.",
      },
      {
        title: "Favorites Screen",
        imageUrl: "/aura_favs.png",
        description:
          "The Favorites screen acts as a personal collection for the user. It maintains the same clean grid layout as the home screen for consistency, providing a simple and visually pleasing way to review saved items.",
      },
    ],
    componentGallery: [
      {
        title: "Header",
        imageUrl: "/aura-header-component.png",
        description:
          "The header provides a personalized welcome and houses the primary search bar, making the app's most common action immediately accessible.",
        designRationale:
          "Using a soft, blurred background gradient creates a modern, premium feel while ensuring the 'Welcome' text remains legible.",
      },
      {
        title: "Buttons",
        imageUrl: "/aura-button-component.png",
        description:
          "The primary button component features variants for different states like default, hover, and disabled to provide clear visual feedback.",
        designRationale:
          "A consistent corner radius and vertical padding are used across all buttons to maintain a cohesive visual language throughout the app.",
      },
      {
        title: "Text Input Field",
        imageUrl: "/aura-input-component.png",
        description:
          "Input fields were designed with clear states for placeholder, active, and filled text to guide the user.",
        designRationale:
          "This provides instant feedback, reducing user error and improving the usability of forms and search functions.",
      },
      {
        title: "Bottom Tab Bar",
        imageUrl: "/aura-bottombar-component.png",
        description:
          "The tab bar provides persistent navigation to the app's core sections: Home, Favorites, Search, Cart, and More.",
        designRationale:
          "Icons are universally understood, and their placement at the bottom of the screen follows established mobile UX patterns, making the app immediately intuitive for users.",
      },
      {
        title: "Item Card",
        imageUrl: "/aura-item-component.png",
        description:
          "The product item card displays essential information—image, name, price—with quick actions for adding to cart or favorites.",
        designRationale:
          "The design balances visual appeal with information density, allowing users to scan the product grid efficiently.",
      },
      {
        title: "Search Bar",
        imageUrl: "/aura-searchbar-component.png",
        description:
          "A simple, clean search bar with a recognizable magnifying glass icon and clear placeholder text.",
        designRationale:
          "Familiarity is key for search. This standard design reduces the learning curve and makes finding items straightforward.",
      },
      {
        title: "Like (Favorite) Icon",
        imageUrl: "/aura-like-component.png",
        description:
          "A binary state icon (outline for unselected, solid for selected) for favoriting items.",
        designRationale:
          "The change from outline to solid provides immediate, satisfying feedback that the user's action was successful.",
      },
    ],
  },
] satisfies Project[];
