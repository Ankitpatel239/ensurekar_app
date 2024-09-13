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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flipVertical: {
          "0%": { transform: "rotateX(0deg)", opacity: "1" },
          "100%": { transform: "rotateX(180deg)", opacity: "0" },
        },
      },
      animation: {
        flip: "flipVertical 0.5s linear",
      },
    },
  },
  plugins: [],
};

export default config;
