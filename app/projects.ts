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
        slug: "aura-fashion-app",
        type: "design", // Added type
        title: "Aura: Mobile Fashion App & Design System",
        description:
            "A high-fidelity prototype for 'Aura,' a modern mobile fashion app, designed to provide a seamless and visually engaging shopping experience. The project is built upon a comprehensive, component-based design system created from the ground up in Figma.",
        projectGoal: "The goal was to design a mobile fashion app that feels intuitive, personal, and inspiring. We aimed to solve the common user frustrations of cluttered interfaces and difficult navigation in e-commerce apps by creating a clean, component-driven design system.",
        techStack: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
        designProcess: [
            "User Research & Persona Development",
            "Wireframing & Low-Fidelity Prototypes",
            "Component-Based Design System in Figma",
            "High-Fidelity Interactive Prototyping",
            "Usability Testing & Iteration"
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
            "Auto Layout & Variants"
        ],
        image: "/aura_ecommerce.png",
        link: "https://www.figma.com/design/WQBf7omrPKXxs4mPQy3TGn/E-Commerce?node-id=6-9&t=ezpLlzIhGDmygKin-1",
        linkText: "View Project in Figma", // Added linkText
        screenGallery: [
            {
                title: "Home Screen",
                imageUrl: "/aura_home.png",
                description: "The home screen is designed for effortless discovery. It features a welcoming header, prominent category filters, and a curated product grid to minimize taps and guide users to relevant items quickly and elegantly."
            },
            {
                title: "Product Description Screen",
                imageUrl: "/aura_description.png",
                description: "This screen provides a clean, focused view of the product. Key information like price, description, and color/size options are presented clearly, with a persistent 'Add To Cart' button to ensure a seamless path to purchase."
            },
            {
                title: "Search & Filter Screen",
                imageUrl: "/aura_search.png",
                description: "The search experience is enhanced with multi-faceted filtering options (Category, Gender, Color). Sections for 'Previous' and 'Trending' searches help users find what they're looking for faster by reducing cognitive load."
            },
            {
                title: "Favorites Screen",
                imageUrl: "/aura_favs.png",
                description: "The Favorites screen acts as a personal collection for the user. It maintains the same clean grid layout as the home screen for consistency, providing a simple and visually pleasing way to review saved items."
            }

        ],
        componentGallery: [
            {
                title: "Header",
                imageUrl: "/aura-header-component.png",
                description: "The header provides a personalized welcome and houses the primary search bar, making the app's most common action immediately accessible.",
                designRationale: "Using a soft, blurred background gradient creates a modern, premium feel while ensuring the 'Welcome' text remains legible."
            },
            {
                title: "Buttons",
                imageUrl: "/aura-button-component.png",
                description: "The primary button component features variants for different states like default, hover, and disabled to provide clear visual feedback.",
                designRationale: "A consistent corner radius and vertical padding are used across all buttons to maintain a cohesive visual language throughout the app."
            },
            {
                title: "Text Input Field",
                imageUrl: "/aura-input-component.png",
                description: "Input fields were designed with clear states for placeholder, active, and filled text to guide the user.",
                designRationale: "This provides instant feedback, reducing user error and improving the usability of forms and search functions."
            },
            {
                title: "Bottom Tab Bar",
                imageUrl: "/aura-bottombar-component.png",
                description: "The tab bar provides persistent navigation to the app's core sections: Home, Favorites, Search, Cart, and More.",
                designRationale: "Icons are universally understood, and their placement at the bottom of the screen follows established mobile UX patterns, making the app immediately intuitive for users."
            },
            {
                title: "Item Card",
                imageUrl: "/aura-item-component.png",
                description: "The product item card displays essential information—image, name, price—with quick actions for adding to cart or favorites.",
                designRationale: "The design balances visual appeal with information density, allowing users to scan the product grid efficiently."
            },
            {
                title: "Search Bar",
                imageUrl: "/aura-searchbar-component.png",
                description: "A simple, clean search bar with a recognizable magnifying glass icon and clear placeholder text.",
                designRationale: "Familiarity is key for search. This standard design reduces the learning curve and makes finding items straightforward."
            },
            {
                title: "Like (Favorite) Icon",
                imageUrl: "/aura-like-component.png",
                description: "A binary state icon (outline for unselected, solid for selected) for favoriting items.",
                designRationale: "The change from outline to solid provides immediate, satisfying feedback that the user's action was successful."
            }
        ]
    },
    {
        slug: "momentum-design-system",
        type: "design", // Added type
        title: "Momentum: Mobile Design System & Prototype",
        description: "A comprehensive mobile design system built from scratch in Figma, used to create a high-fidelity, interactive application prototype. This project focuses on establishing a scalable and consistent design language for mobile applications.",
        projectGoal: "The primary goal was to develop a robust and reusable design system that accelerates the design and development process. By creating a library of well-defined components, variants, and styles, Momentum aims to ensure visual consistency and improve usability across all future mobile projects.",
        techStack: ["Figma", "Component Design", "Variants", "Auto Layout", "Prototyping"],
        designProcess: [
            "Foundational Style Definition (Colors, Typography, Spacing)",
            "Atomic Component Creation (Buttons, Inputs, Icons)",
            "Composite Component Assembly (Cards, Modals, Navbars)",
            "Interactive Prototyping and Animation",
            "Documentation and Style Guide Creation"
        ],
        metrics: {
            reusability: 100,
            consistency: 100,
            usability: 95,
        },
        techDetails: [
            "End-to-End UI/UX Design in Figma",
            "Comprehensive Design System Architecture",
            "Built and documented over 10+ core components",
            "Advanced prototyping with smart animations and transitions",
            "Utilized variants and component properties for scalability",
        ],
        image: "/design_system.png",
        link: "https://www.figma.com/design/xItX1Bg0sSv5Iirm0Igi2z/Design-System?m=auto&t=mQK8bZHSxTYs1emo-1",
        linkText: "View Project in Figma",
        screenGallery: [
            {
                title: "Home & Detail Screens",
                imageUrl: "/momentum-screens.png",
                description: "The core screens of the prototype application built using the Momentum design system. The Home screen features a clean, card-based layout for content discovery, while the Detail screen provides a focused view. Both screens utilize the system's navigation and button components for a consistent user flow."
            }
        ],
        componentGallery: [
            {
                title: "Core Components Showcase",
                imageUrl: "/momentum-components.png",
                description: "A selection of the fundamental components that form the building blocks of the Momentum design system. This includes buttons, input fields, cards, avatars, icons, and navigation elements.",
                designRationale: "Each component was designed with versatility and reusability in mind, featuring variants and properties that allow them to adapt to different contexts while maintaining a consistent visual identity."
            }
        ]
    },
    {
        slug: "smart-homes-ecommerce",
        type: "dev",
        title: "Smart Homes: AI-Powered E-Commerce Platform",
        description: "A full-stack e-commerce platform for smart home products, engineered with a robust backend, dual-database architecture, and advanced AI-powered features.",
        projectGoal: "To build a feature-rich e-commerce application that goes beyond standard CRUD, integrating modern technologies like AI and advanced search to enhance user engagement and provide intelligent customer support.",
        techStack: ["React", "Node.js", "MySQL", "MongoDB", "Elasticsearch", "OpenAI", "Docker"],
        techStackDetails: [
            {
                name: "React.js",
                description: "Built a dynamic and responsive user interface with a component-based architecture for a seamless shopping experience."
            },
            {
                name: "Node.js / Express.js",
                description: "Developed a robust RESTful API to handle user authentication, product management, and order processing."
            },
            {
                name: "MySQL & MongoDB",
                description: "Designed a dual-database system, using MySQL for transactional data and MongoDB for flexible storage of user reviews."
            },
            {
                name: "Elasticsearch",
                description: "Implemented a powerful semantic search engine for products and reviews, providing more intuitive and relevant results."
            },
            {
                name: "OpenAI",
                description: "Leveraged GPT and embedding models to create intelligent features like automated content generation and smart product recommendations."
            },
            {
                name: "Docker",
                description: "Containerized all backend services, ensuring a consistent and portable environment for development and deployment."
            }
        ],
        metrics: {performance: 98, accessibility: 100, seo: 100},
        techDetails: [
            "**AI-Powered Features:** Integrated OpenAI for dynamic product description generation, synthetic review creation, and AI-powered customer support with image analysis.",
            "**Advanced Semantic Search:** Leveraged Elasticsearch to implement semantic search for products and reviews, enabling more intuitive search results based on meaning.",
            "**Dual-Database Architecture:** Utilized MySQL for core transactional data and MongoDB for unstructured data like user reviews, optimizing for performance and flexibility.",
            "**Full-Stack Implementation:** Developed a complete e-commerce workflow, including user authentication with JWT, cart management, and order processing.",
            "**Data Processing Pipeline:** Created Jupyter Notebooks for data preprocessing, generating AI content, and pushing embeddings to Elasticsearch."
        ],
        image: "/code.jpg",
        link: "https://github.com/NaveenGali11/smart-homes",
        linkText: "View on GitHub",
    },
    {
        slug: "homvery-home-services",
        type: "dev",
        title: "Homvery: Tech-Enabled Home Services in Tier 2 & 3 Cities",
        description: "A dual mobile and web platform designed to simplify household services through scalable architecture, regional customization, and integrated technician workflows.",
        projectGoal: "To develop a robust service delivery ecosystem tailored for underserved Indian cities, leveraging modern technologies for real-time coordination, flexible content management, and seamless scalability.",
        techStack: ["React.js", "Node.js", "Strapi CMS", "DynamoDB", "Firebase", "Microsoft App Center"],
        techStackDetails: [
            {
                name: "React.js",
                description: "Built intuitive and responsive user interfaces for customer and admin dashboards with dynamic rendering and component reuse."
            },
            {
                name: "Node.js / Express.js",
                description: "Created scalable APIs for service booking, technician dispatch, user authentication, and feedback management."
            },
            {
                name: "Strapi CMS",
                description: "Enabled flexible content delivery and admin control panels for managing services, vendors, and regional content."
            },
            {
                name: "DynamoDB",
                description: "Implemented highly available NoSQL storage for technician data, booking histories, and real-time job queues."
            },
            {
                name: "Firebase",
                description: "Used for push notifications, analytics, and real-time communication between users and technicians."
            },
            {
                name: "Microsoft App Center",
                description: "Managed app distribution, crash reporting, and performance monitoring across platforms."
            }
        ],
        metrics: {
            performance: 95,
            accessibility: 97,
            seo: 92
        },
        techDetails: [
            "**Customer & Technician Apps:** Built with responsive UIs and synchronized workflows to streamline service execution.",
            "**Strapi-Powered CMS:** Allowed non-tech admins to manage services, content, and updates without backend dependencies.",
            "**Real-Time Coordination:** Firebase and Node.js powered instant technician assignments, status updates, and customer interactions.",
            "**Scalable NoSQL Backend:** DynamoDB ensured fast read/write operations for real-time dispatch and booking activity.",
            "**Cross-Platform Monitoring:** Microsoft App Center enabled seamless rollout and debugging of updates to both apps."
        ],
        image: "/homvery.png",
        link: "https://homvery.com",
        linkText: "Visit Homvery"
    }
] satisfies Project[];