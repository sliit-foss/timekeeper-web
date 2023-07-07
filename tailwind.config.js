/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "dark": "rgba(0, 41, 156, 1)",
          "medium": "rgba(0, 115, 230, 1)",
          "light": "rgba(17, 239, 227, 1)",
          "light-translucent": "rgba(17, 239, 227, 0.24)"
        },
        gray: {
          "medium": "rgba(0, 0, 0, 0.4)",
          "light": "rgba(0, 0, 0, 0.16)",
          "extra-light": "rgba(0, 0, 0, 0.1)",
          "ultra-light": "rgba(0, 0, 0, 0.03)"
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
        medium: "300ms"
      }
    }
  },
  plugins: []
};
