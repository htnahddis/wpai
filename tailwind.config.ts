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
          DEFAULT: "#F8F8FA", // Secondary background per design.md
          subtle: "#F8F8FA",
          muted: "#E9E9EF",
        },
        primary: {
          DEFAULT: "#1B1466", // Percipere Indigo
          hover: "#140F4D",
          light: "#F0EFFF",
        },
        secondary: "#777783", // Supporting Grey
        muted: "#777783",
        border: {
          DEFAULT: "#E9E9EF", // Light Grey borders
          subtle: "#F0F0F5",
          strong: "#D6D6DE",
        },
        // Official Percipere.ai Design System Palette (docs/design.md)
        percipere: {
          indigo: "#1B1466", // Primary brand colour
          magenta: "#FF00B7", // Emphasis / signals
          cyan: "#00B7FF", // Connections / information
          white: "#FFFFFF", // Primary surface
          black: "#000000", // Brand neutral
          softWhite: "#F8F8FA", // Secondary background
          lightGrey: "#E9E9EF", // Borders and dividers
          darkText: "#191923", // Headings and body text
          supportingGrey: "#777783", // Secondary text
        },
        // Supporting semantic accents
        accent: {
          DEFAULT: "#FF00B7", // Magenta emphasis
          light: "#FFF0F9",
          dark: "#D60099",
        },
        cyan: {
          DEFAULT: "#00B7FF", // Cyan connectivity
          light: "#E6F8FF",
          dark: "#0095D1",
        },
      },
      fontFamily: {
        // Primary typeface: Helvetica Neue (docs/design.md)
        sans: [
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        // Mapped to Helvetica Neue so all headings and body render consistently
        serif: [
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontWeight: {
        light: "300",
        normal: "400", // 55 Roman
        medium: "500", // 65 Medium
        semibold: "600",
        bold: "700",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.015em",
        normal: "0em",
        wide: "0.04em",
        widest: "0.08em",
      },
      maxWidth: {
        container: "1240px",
        editorial: "680px",
        hero: "980px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(27, 20, 102, 0.03)",
        card: "0 1px 3px 0 rgba(27, 20, 102, 0.04), 0 1px 2px -1px rgba(27, 20, 102, 0.02)",
        preview: "0 20px 40px -15px rgba(27, 20, 102, 0.06), 0 0 0 1px #E9E9EF",
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
