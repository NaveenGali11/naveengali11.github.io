import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: "#F7F4ED",
        parchment: "#F0EBE0",
        linen: "#FFFCF6",
        ink: "#222720",
        muted: "#535A50",
        rule: "#D9D4C8",
        field: "#827C71",
        forest: {DEFAULT: "#285B46", deep: "#1B4534", pale: "#E3EBE1"},
      },
    },
  },
  plugins: [],
} satisfies Config;
