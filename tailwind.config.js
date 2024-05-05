/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: "rgba(var(--space))",
        background: "rgba(var(--background))",
        fontPrimary: "rgba(var(--fontPrimary))",
        fontSecondary: "rgba(var(--fontSecondary))",
      },
    },
  },
  plugins: [],
};
