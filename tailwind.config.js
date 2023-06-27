/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundClip: "text",
      colors: {
        gl: "#00299C",
        gr: "#0073E6"
      },
      fontFamily: {
        sf: ["SF Pro Display"],
        cabinet: ["Cabinet Grotesk Variable"],
        inter: ["Inter"]
      }
    },
    container: {
      center: true,
      screens: {
        lg: "1160px"
      }
    }
  },
  plugins: []
};
