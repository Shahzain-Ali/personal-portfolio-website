import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        customsm: { min: '200px', max: '480px' },
        smm:{min:'480px', max: '640px' },
        sm: { min: '640px', max: '768px' },
        md: { min: '768px', max: '1024px' },
        lg: {min:  '1024px', max:  '1280px'},
        xl: {min: '1280px', max: '1536px'},
        '2xl': '1536px',
        },
      boxShadow:{
         primary: "0px 0px 5px gray",
         secondary: "2px 2px 5px gray",
         custom:"10px 10px 10px rgb(15, 14, 14),0px -0px 5px rgb(61,60,60)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
