/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        CabinetGroteskVariable: ["Cabinet Grotesk Variable", "sans"],
        Inter: ["Inter", "sans"],
        SFPProDisplay: ["SFP Pro Display", "sans"]
      }
    }
  },
  plugins: []
};
