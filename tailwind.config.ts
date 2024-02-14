import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'future': "url('../public/future.jpeg')",
        'star': "url('../public/stars.png')",
        'planet': "url('../public/planet.png')"

      },
    },
  },
  plugins: [
    function ({addUtilities}:any) {
      const newUtilities = {
        ".no-scrollbar::webkit-scrollbar":{
          display: "none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none"
        }
      }
      addUtilities(newUtilities)
    }
  ],
};
export default config;
