import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        fontFamily:{
            sans: ["Inter" , "system-ui" , "Arial" , "sans-serif"]
        },
      colors: {
        pri: "#0F62FE",
        colorBG: "#F2F4F8" 
      },
    },
  },
  plugins: [daisyui],
};