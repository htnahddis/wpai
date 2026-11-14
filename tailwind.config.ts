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
        surface: {
          DEFAULT: "#FBFBFC",
          subtle: "#F5F5F7",
          muted: "#EFEFEF",
        },
        primary: {
          DEFAULT: "#171717",
          dark: "#000000",
        },
        secondary: "#666666",
        muted: "#8E8E93",
        border: {
          DEFAULT: "#E5E5E5",
          subtle: "#EEEEEE",
          strong: "#D4D4D4",
        },
        auctor: {
          orange: "#FF4400", // The signature Auctor orange rule accent
          orangeLight: "#FFF5F0",
          dark: "#171717",
          gray: "#737373",
          light: "#FBFBFC",
          border: "#E5E5E5",
        },
        percipere: {
          blue: "#0D5CE5",
          navy: "#0A2540",
          orange: "#FF4400",
        },
      },
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Inter',
          'Roboto',
          'sans-serif',
        ],
        serif: [
          'Newsreader',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.015em",
        wide: "0.04em",
        widest: "0.08em",
      },
      maxWidth: {
        container: "1280px",
        auctor: "1200px",
        editorial: "680px",
        hero: "980px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)",
        preview: "0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04)",
      },
      animation: {
        "rule-expand": "ruleExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        ticker: "tickerMarquee 28s linear infinite",
      },
      keyframes: {
        tickerMarquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ruleExpand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
