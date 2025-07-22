import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        base: ["18px", "30px"], // size + line-height
      },
      colors: {
        darkblue: "#6A0DAD",
        blueCustom: "#2A2AFF",
        vilot: "#6A0DAD",
        dark_purple: "#5D5A88",
        light_blue: "#F9F9FF",
        head_grey: "#9795B5",
        purple1: "#6A0DAD",
        blueCustom: "#2A2AFF",
        vilottext: "#6A0DAD",
        orangecustom: "#AF6C2F",
        browncustom: "#6E250A",
        pinkcustom: "#C9153E",
        yellowcustom: "#B78A23",
        vilotcustom: "#A858D2",
        dartvilot: "#89006C",
        greencustom: "#239E05",
        overallbg: "#F9F9FF",
      },

      fontFamily: {
        sans: ["var(--font-sans)", "Tusker Grotesk", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        tusker: ["Tusker Grotesk", "sans-serif"],
        gilroy: ["Gilroy-Bold", "sans-serif"],
        anton: ["Impact"],
      },

      dropShadow: {
        "multi-layer": [
          "0px -0.977px 1.955px rgba(0, 0, 0, 0.10)",
          "0px -3.909px 3.909px rgba(0, 0, 0, 0.09)",
          "0px -8.795px 5.864px rgba(0, 0, 0, 0.05)",
          "0px -15.636px 6.841px rgba(0, 0, 0, 0.01)",
          "0px -25.409px 6.841px rgba(0, 0, 0, 0.00)",
        ],
      },
      textAlign: {
        justify: "justify",
      },
    },
    darkMode: "class",
    plugins: [heroui()],
  },
};

module.exports = config;
