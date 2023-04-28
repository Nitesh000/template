/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#2D2424",
        semiDarkBrown: "#5C3D2E",
        brick: "#B85C38",
        pale: "#E0C097",
      },
    },
  },
  plugins: [],
};
