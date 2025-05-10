import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm:"500px",
        sm:"600px",
        md:"690px",
        lg:"988px",
        xl:"1078px",
        xxl:"1265px",
      },
      colors: {
        textGray: "#71767B",
        textYellow: "#FACC15",
        textYellowLight: "#FCF259",
        textGrayLight: "#E7E9EA",
        borderGray: "#2f3336",
        InputGray: "#202327",
        IconBlue: "#1D9BF0",
        IconYellow: "#F3C623",
        IconPink: "#f91880",


          
      },
    },
  },
  plugins: [],
} satisfies Config;
