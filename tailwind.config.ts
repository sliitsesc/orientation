import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-haas': ['var(--font-neue-haas)'],
      },
      colors: {
        black: {
          background: "#131313",
        },
        purple: {
          100: "#7D61F2",
        },
        green: {
          100: "#DBFD51",
        },
        pink: {
          100: "#FFEAEA",
        },
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 40s linear infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': 'url("/grain_bg.png")',
      },
    },
  },
  plugins: [],
};
export default config;
