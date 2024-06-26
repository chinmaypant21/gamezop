import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        primary: 'var(--app-text-color)'
      },
      colors: {
        gzp: {
          main : 'var(--app-main-color)',
          sec : 'var(--app-sec-color)',
        },
      },
      borderColor: {
        primary: 'var(--app-sec-color)'
      }
    },
  },
  plugins: [],
};
export default config;
