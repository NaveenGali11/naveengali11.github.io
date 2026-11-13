import type {Metadata} from "next";

const portfolioImage = {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Naveen Gali, full-stack software engineer",
};

export function portfolioMetadata({title, description, path, image = portfolioImage}: {
    title: string;
    description: string;
    path: string;
    image?: {url: string; alt: string; width?: number; height?: number};
}): Metadata {
    return {
        title,
        description,
        alternates: {canonical: path},
        openGraph: {
            title,
            description,
            url: path,
            siteName: "Naveen Gali | Portfolio",
            images: [image],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}
