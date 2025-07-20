export const projects = [
    {
        slug: "aura-fashion-app",
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
        title: "Momentum: Mobile Design System & Prototype",
        description:
            "A comprehensive mobile design system built from scratch in Figma, used to create a high-fidelity, interactive application prototype.",
        techStack: ["Figma", "Component Design", "Variants", "Auto Layout"],
        metrics: {
            reusability: 100,
            consistency: 100,
            usability: 95,
        },
        techDetails: [
            "End-to-End UI/UX Design in Figma",
            "Design System Architecture",
            "Component-Based Design (10+ Components)",
            "Advanced Prototyping & Animations",
            "Variant & Component Properties",
        ],
        image: "/design_system.png",
        link: "https://www.figma.com/design/xItX1Bg0sSv5Iirm0Igi2z/Design-System?m=auto&t=mQK8bZHSxTYs1emo-1",
        componentGallery: []
    },
    {
        slug: "smart-homes-ecommerce",
        title: "Smart Homes E-Commerce Application",
        description:
            "FullStack Smart Home Appliances E-Commerce application with OpenAi integration for customer support.",
        techStack: ["React", "Node.js", "OpenAI", "Docker", "MySQL"],
        metrics: {
            performance: 98,
            accessibility: 100,
            seo: 100,
        },
        techDetails: [
            "Full Stack Web Application",
            "Open Ai Customer Support",
            "Elastic Search",
            "MySql and Mongodb Combined Usage",
        ],
        image: "/code.jpg",
        link: "https://github.com/NaveenGali11/smart-homes",
        componentGallery: []
    },
    {
        slug: "homvery",
        title: "Homvery",
        description:
            "Real World Home Services Application with over 5000+ Users",
        techStack: ["React Native", "React", "Node.js", "Strapi CMS"],
        metrics: {
            performance: 95,
            accessibility: 98,
            seo: 100,
        },
        techDetails: [
            "Web and Mobile Applications",
            "Home Services Appointment booking",
            "Status Changings from the Representative App",
            "Payment Gateway Integration",
        ],
        image: "/homvery.png",
        link: "https://www.homvery.com/",
        componentGallery: []
    },
];