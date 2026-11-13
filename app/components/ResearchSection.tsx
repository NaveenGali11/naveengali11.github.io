import Link from "next/link";

const groups = [
    {
        title: "Research and Open Source",
        id: "research",
        entries: [
            {
                title: "D-GIX · Geospatial retrieval research",
                description: "Co-authored research at Polyhistor on spatial and semantic search across more than 3.55 million points of interest.",
                links: [{label: "Read the D-GIX research summary", href: "/project/d-gix-geospatial-indexing"}],
            },
            {
                title: "STAIR · Independent retrieval reproduction",
                description: "Compared four retrieval methods on one openly licensed textbook. BM25 led overall, while STAIR beat DSI on depth-2 sections and trailed it on depth-3 leaves.",
                details: "On the frozen set of 1,758 questions, with 129 candidate leaves and 86 represented gold leaves, Recall@1 was 0.7986 for BM25, 0.6553 for NV-Embed-v2, 0.4010 for DSI, and 0.3754 for STAIR. The reproduction follows the STAIR paper by Vineet Kumar and colleagues. The repository documents the split, checks, and LoRA implementation.",
                links: [
                    {label: "STAIR notebook and reproduction materials", href: "https://github.com/NaveenGali11/stair-rag-reproduction"},
                    {label: "Original STAIR paper", href: "https://arxiv.org/abs/2609.03874"},
                    {label: "Frozen STAIR results", href: "https://github.com/NaveenGali11/stair-rag-reproduction/blob/main/results/whole-child-results.json"},
                ],
            },
            {
                title: "PriviLAB · Open-source contribution",
                description: "Contributed to the source-only Developer Preview created by Andrew Tsintsiruk and built by Data Strategy Lab. Restricted live SDK use by default, added regression coverage with synthetic fixtures, and added contributor and repository checks.",
                links: [
                    {label: "PriviLAB repository", href: "https://github.com/DataStrategyLab/privilab"},
                    {label: "Live SDK restriction (PR #50)", href: "https://github.com/DataStrategyLab/privilab/pull/50"},
                    {label: "Contributor checks (PR #44)", href: "https://github.com/DataStrategyLab/privilab/pull/44"},
                ],
            },
        ],
    },
    {
        title: "More Work",
        id: "more-work",
        entries: [
            {
                title: "ShipSolid · Developer CLI",
                description: "A TypeScript and Node.js command-line tool that processes Semgrep findings, uses Claude to assist analysis, and generates PDF reports.",
                links: [{label: "View ShipSolid source", href: "https://github.com/NaveenGali11/ShipSolid"}],
            },
            {
                title: "Aura · Earlier design work",
                description: "A Figma prototype with mobile shopping screens and reusable component variants.",
                links: [{label: "View the Aura prototype screenshots", href: "/project/aura-fashion-app"}],
            },
        ],
    },
];

export const ResearchSection = () => (
    <>
        {groups.map(({title, id, entries}) => (
            <section key={id} id={id} className="py-12 sm:py-20 px-4 border-t border-rule scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">{title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {entries.map(entry => (
                            <article key={entry.title} className="bg-linen p-6 rounded-lg border border-rule">
                                <h3 className="text-xl font-bold text-forest mb-2">{entry.title}</h3>
                                <p className="text-ink">{entry.description}</p>
                                {entry.details && <p className="mt-2 text-sm text-muted">{entry.details}</p>}
                                <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
                                    {entry.links.map(({href, label}) => (
                                        <li key={href}>
                                            <Link href={href} target="_blank" rel="noopener noreferrer"
                                                  className="font-semibold text-forest underline decoration-forest/40 underline-offset-4 hover:decoration-current">
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        ))}
    </>
);
