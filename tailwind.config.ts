import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8F8F8",
        "surface-card": "#FFFFFF",
        "surface-subtle": "#F4F5F6",
        primary: {
          DEFAULT: "#292A2E",
          dark: "#101214",
        },
        secondary: "#64676D",
        muted: "#8A8D93",
        border: {
          DEFAULT: "#E8E8E8",
          subtle: "#F0F0F0",
          strong: "#D2D4D7",
        },
        percipere: {
          blue: "#0D5CE5",
          navy: "#0A2540",
          sky: "#EBF3FF",
          accent: "#0052CC",
          orange: "#E85D04",
          amber: "#F59E0B",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['var(--font-geist-sans)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        card: "0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
        hover: "0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        elevated: "0 12px 24px -4px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
