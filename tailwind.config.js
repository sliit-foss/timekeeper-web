import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
          "borders": "var(--gray-borders)",
          "medium": "var(--gray-medium)",
          "light": "var(--gray-light)",
          "extra-light": "var(--gray-extra-light)",
          "extra-lighter": "var(--gray-extra-lighter)",
          "ultra-light": "var(--gray-ultra-light)"
        }
      },
      borderRadius: {
        primary: "20px",
        secondary: "10px"
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
        "xs": "360px",
        "xxl-mid": "1620px",
        "xxxl": "1700px"
      },
      transitionDuration: {
        medium: "300ms",
        long: "500ms"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [animate]
};
