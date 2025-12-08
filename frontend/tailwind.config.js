/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // include your source files so Tailwind can scan for classes
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
