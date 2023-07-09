/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "dark": "var(--primary-dark)",
          "medium": "var(--primary-medium)",
          "light": "var(--primary-light)",
          "light-translucent": "var(--primary-light-translucent)"
        },
        gray: {
          "medium": "var(--gray-medium)",
          "light": "var(--gray-light)",
          "extra-light": "var(--gray-extra-light)",
          "ultra-light": "var(--gray-ultra-light)"
        }
      },
      borderRadius: {
        primary: "20px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      fontFamily: {
        cabinet: ["Cabinet Grotesk Variable", "sans"],
        inter: ["Inter", "sans"],
        sf: ["SF Pro Display", "sans"]
      },
      screens: {
        xs: "360px"
      },
      transitionDuration: {
        medium: "300ms",
        long: "500ms"
      }
    }
  },
  plugins: []
};
