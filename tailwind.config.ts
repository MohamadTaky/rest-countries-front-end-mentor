import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        base: "rgb(var(--color-text) / <alpha-value>)",
        input: "rgb(var(--color-input) / <alpha-value>)",
      },
      colors: {
        base: "rgb(var(--color-background) / <alpha-value>)",
        "element-1": "rgb(var(--color-element-1) / <alpha-value>)",
        "element-2": "rgb(var(--color-element-2) / <alpha-value>)",
        "element-3": "rgb(var(--color-element-3) / <alpha-value>)",
      },
    },
    fontWeight: {
      light: "300",
      base: "600",
      bold: "800",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
