export interface ProjectBase {
  slug: string;
  type: "design" | "dev";
  title: string;
  description: string;
  status: string;
  role?: string;
  featured?: boolean;
  projectGoal?: string;
  techStack: string[];
  techDetails: string[];
  results?: string[];
  image?: ProjectImage;
  coverLabel?: string;
  screenshots?: ProjectImage[];
  artifacts?: {href: string; label: string}[];
}

export interface ProjectImage {
  url: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export interface DesignScreen {
  title: string;
  image: ProjectImage;
  description: string;
}

export interface DesignComponent {
  title: string;
  image: ProjectImage;
  description: string;
  designRationale: string;
}

export interface DesignProject extends ProjectBase {
  type: "design";
  screenGallery: DesignScreen[];
  componentGallery: DesignComponent[];
}

export interface DevProject extends ProjectBase {
  type: "dev";
  techStackDetails?: {name: string; description: string}[];
}

export type Project = DesignProject | DevProject;

export const projects: Project[] = [
  {
    slug: "polyhistor-travel-platform",
    type: "dev",
    title: "Polyhistor · Location intelligence for an enterprise pilot",
    description: "I led a small team building neighborhood-insight pages and walkability, greenery, and noise APIs for Polyhistor’s first enterprise pilot.",
    role: "Software Engineer & Technical Lead",
    status: "Enterprise pilot",
    featured: true,
    projectGoal: "Polyhistor pivoted from consumer travel planning to enterprise location intelligence. The pilot needed a way to compare neighborhoods using consistent scores derived from urban data.",
    techStack: ["TypeScript", "React", "DuckDB", "PostGIS"],
    techDetails: [
      "Led the architecture and implementation with a small team. I built the TypeScript and React pages for exploring neighborhood insights and helped deliver the three scoring APIs.",
      "Replaced the Pandas ingestion path with disk-backed DuckDB and Parquet to process more than 3.55 million Overture Maps places.",
      "Deployed the pilot on Amazon EC2 using Docker.",
    ],
    techStackDetails: [
      {name: "PostgreSQL, PostGIS, and pgvector", description: "Combined spatial filters and vector search for contextual place retrieval."},
      {name: "Redis and Gunicorn", description: "Used Redis to cache query embeddings and configured Gunicorn and HTTP keep-alive to reduce repeat-query overhead."},
    ],
    image: {
      url: "/polyhistor-neighborhood.jpg", width: 1200, height: 800,
      alt: "Illustrated street map with shaded coverage areas in a fictional riverside neighborhood",
      caption: "Illustration of a fictional neighborhood. The pilot used place data to score walkability, greenery, and noise.",
    },
    coverLabel: "Illustration of a fictional neighborhood",
    artifacts: [
      {href: "https://www.thepolyhistor.com/", label: "Company site"},
      {href: "/project/d-gix-geospatial-indexing", label: "D-GIX research"},
    ],
  },
  {
    slug: "resumeforge",
    type: "dev",
    title: "ResumeForge · Local LaTeX editor and PDF compilation",
    description: "A local résumé workspace that compiles LaTeX to PDF and returns compiler logs to the editor.",
    role: "Project developer",
    status: "Local development project",
    featured: true,
    projectGoal: "Make it possible to edit LaTeX, preview the resulting PDF, and diagnose compilation errors in one workspace.",
    techStack: ["Monaco", "Express", "TeX Live", "Docker"],
    techDetails: [
      "The Monaco editor sends LaTeX to an Express API. A TeX Live service compiles it and returns the PDF or compiler logs.",
      "MongoDB persists projects, and Docker manages the services needed to run the workspace locally.",
      "The résumé and job-description comparison uses heuristic analysis.",
    ],
    image: {
      url: "/resumeforge-editor-preview.jpg", width: 1400, height: 933,
      alt: "Illustration of a LaTeX editor next to a compiled résumé preview",
      caption: "Illustration of the LaTeX editor and PDF preview using a fictional résumé.",
    },
    coverLabel: "Illustrative preview with sample data",
    artifacts: [{href: "https://github.com/NaveenGali11/Resumeforge", label: "View source"}],
  },
  {
    slug: "mattergate",
    type: "dev",
    title: "MatterGate · Permission-aware research demo",
    description: "A research workflow demo that checks document access before retrieval and routes cited drafts to human review.",
    role: "Demo developer",
    status: "Research demo with simulated roles and synthetic material",
    featured: true,
    projectGoal: "Show how a scoped research request can produce a cited draft while respecting document permissions and recording the run for review.",
    techStack: ["FastAPI", "SQLite FTS5", "NVIDIA Nemotron"],
    techDetails: [
      "FastAPI checks the simulated user’s scope before SQLite FTS5 retrieves documents. The documented generation workflow uses NVIDIA Nemotron via Nebius.",
      "An allowed request uses in-scope synthetic documents to generate a cited draft for human review. A blocked request stops before retrieval. A run receipt records the outcome.",
      "Selected source adaptations are credited to PriviLAB and Data Strategy Lab in the repository.",
    ],
    image: {
      url: "/mattergate-evidence-review.jpg", width: 1335, height: 890,
      alt: "MatterGate research brief alongside the authorized excerpts behind its citations",
      caption: "MatterGate shows the cited draft alongside the authorized evidence from the synthetic demo corpus.",
    },
    screenshots: [
      {
        url: "/mattergate-human-review.jpg", width: 1335, height: 890,
        alt: "MatterGate human review tab with an approved research draft",
        caption: "A simulated reviewer approves the research draft and records the decision.",
      },
      {
        url: "/mattergate-run-receipt.jpg", width: 1335, height: 890,
        alt: "MatterGate run receipt showing permission, retrieval, generation, and review results",
        caption: "The run receipt shows the permission decision, evidence selection, generation outcome, and human review.",
      },
    ],
    artifacts: [{href: "https://github.com/NaveenGali11/MatterGate", label: "View source"}],
  },
  {
    slug: "d-gix-geospatial-indexing",
    type: "dev",
    title: "D-GIX · Geospatial retrieval research",
    description: "Co-authored research on combining spatial and semantic retrieval across more than 3.55 million Overture Maps points of interest.",
    role: "Co-authored by Naveen Gali, Sagar Sujith Somepalli, and Mahendra Reddy Ippala at Polyhistor",
    status: "Research manuscript · May 6, 2026",
    projectGoal: "Measure how combining spatial and semantic signals affects place retrieval, latency, and serving costs. The research inferred density signals from place attributes.",
    techStack: ["PostgreSQL", "PostGIS", "pgvector", "Redis"],
    techDetails: [
      "Compared the full system with a spatial-only ablation on 70 curated queries and ran a separate 200-query stress test.",
      "Measured first-time queries with the embedding model already loaded. Repeat queries used Redis embedding caching and HTTP keep-alive.",
    ],
    results: [
      "On 70 curated queries, the full system achieved 0.97 Recall@10 and the spatial-only ablation achieved 0.20. The separate 200-query stress test reached 0.58 Recall@1.",
      "The manuscript reports medians of 116 ms for first-time queries and 19 ms for repeats, about 4× and 24× faster than Google Places under the study conditions. Google Places reached 0.86 Recall@1 on the curated set, compared with 0.73 for D-GIX. The manuscript’s table labels the latency column as an average.",
      "The cached heatmap endpoint completed 4,414 requests with zero failures in a 100-user, 60-second test. The separate full-API test encountered embedding timeouts.",
      "A historical cost model estimated 98.7% lower cost than Google Places Text Search at one million hypothetical monthly requests.",
    ],
    image: {
      url: "/dgix-recall.png", width: 1200, height: 630,
      alt: "Recall at 10 on 70 curated queries was 0.97 for the full system and 0.20 for the spatial-only ablation",
      caption: "Full-system and spatial-only retrieval on the 70 curated queries. Data from the May 2026 D-GIX manuscript.",
    },
    artifacts: [{href: "/project/polyhistor-travel-platform", label: "Polyhistor pilot case study"}],
  },
  {
    slug: "multi-agent-decision-framework",
    type: "dev",
    title: "Multi-Agent Anonymous Decision Framework",
    description: "An archived concept for comparing language-model responses with their model identities hidden during review.",
    status: "Archived concept",
    techStack: [],
    techDetails: [],
  },
  {
    slug: "aura-fashion-app",
    type: "design",
    title: "Aura · Mobile fashion app and design system",
    description: "An earlier Figma prototype for browsing fashion products, filtering search results, and saving favorites.",
    role: "Interface and design system",
    status: "Earlier design work · Figma prototype",
    projectGoal: "Design mobile shopping screens around reusable Figma components.",
    techStack: ["Figma", "Prototyping", "Design Systems"],
    techDetails: [
      "Created mobile layouts for product discovery, product details, search, and favorites.",
      "Used Auto Layout and component variants for controls such as buttons and input fields.",
    ],
    image: {
      url: "/aura_ecommerce.png", width: 2832, height: 1256,
      alt: "Aura mobile shopping screens",
    },
    screenGallery: [
      {
        title: "Product details",
        image: {url: "/aura_description.png", width: 390, height: 844, alt: "Aura product details screen"},
        description: "The screen groups the price, description, color and size options, and add-to-cart action with the product.",
      },
      {
        title: "Search and filters",
        image: {url: "/aura_search.png", width: 390, height: 844, alt: "Aura search and filters screen"},
        description: "Shoppers can filter by category, gender, and color and revisit previous or trending searches.",
      },
    ],
    componentGallery: [
      {
        title: "Button variants",
        image: {url: "/aura-button-component.png", width: 962, height: 928, alt: "Aura button component variants"},
        description: "The button component has default, hover, and disabled variants.",
        designRationale: "The variants share a corner radius and vertical padding.",
      },
    ],
  },
];
