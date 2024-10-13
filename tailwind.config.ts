import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '1.125rem', // 18 px
      base: '1.25rem', // 20 px
      xl: '1.5rem', // 24 px
      '2xl': '2rem', // 32 px
      '3xl': '2.5rem', // 40 px
      '4xl': '3.5rem', // 56 px
      '5xl': '8rem', // 128 px
    },
    extend: {
      borderRadius: {
        'sm': '15px',
        DEFAULT: '30px',
      },
      colors: {
        'white': '#ffffff',
        'gray': '#323232',
        'darkgray': '#1E1E1E',
        'blue': '#1473E6',
      },
    },
  },
  plugins: [],
};
export default config;
