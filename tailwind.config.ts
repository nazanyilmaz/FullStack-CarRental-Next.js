import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circle: "url('/bg-1.png')",
        triangle: "url('/bg-2.png')",
      },
      colors: {
        "light-gray": "#F6F7F9",
        "basic-blue": "#3563E9",
      },
    },
  },
  plugins: [],
} satisfies Config;
