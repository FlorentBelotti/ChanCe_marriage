import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EDE8",
        surface: "#EDE0D8",
        accent: "#6B4F4F",
        cover: "#7A6472",
        body: "#3D2C2C",
        divider: "#C49A8A",
        overlay: "#FAF5F2",
      },
      fontFamily: {
        serifDisplay: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
