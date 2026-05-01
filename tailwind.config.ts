import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#BF9B5A",
        rose: "#C8506A",
        cream: "#FAF6F0",
        dark: "#0D0A0B",
      },
      fontFamily: {
        sans: ["var(--font-jost)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
