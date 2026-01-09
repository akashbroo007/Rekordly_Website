/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#68ee9a",
        "primary-hover": "#4ade80",
        "background-light": "#ffffff",
        "background-dark": "#050505",
        "surface-dark": "#0f0f10",
        "surface-darker": "#0a0a0a",
        "surface-card": "#121214",
        accent: "#2e4a33",
        "accent-dark": "#1a1a1a",
        "border-dark": "#27272a",
        "text-dim": "#a1a1aa",
        "text-muted": "#a1a1aa",
        "accent-black": "#0a0a0a",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(104, 238, 154, 0.25)",
        "glow-lg": "0 0 50px -15px rgba(104, 238, 154, 0.35)",
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at center top, rgba(16, 185, 129, 0.15) 0%, rgba(5, 5, 5, 0) 60%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
