import type { Config } from 'tailwindcss'
const defautTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '540px',
      ...defautTheme.screens,
    },
    extend: {
      "keyframes": {
        "shimmer": {
          "100%": {
            "transform": "translateX(100%)",
          },
        },
      },
      colors: {
        'background': '#14181d',
        'navbar': 'rgba(19, 18, 23)',
        'fontcolor': '#9ba3af',
        'bordercolor': '#2c2b33',
      },
      backgroundImage: {
        "page-gradient":
          "radial-gradient(ellipse 129% 111% at -4% 17%,rgba(66,21,89, 0.3), transparent)",
        "section-gradient":
          "radial-gradient(50% 50% at 50% 50%,rgb(197 52 211 / 20%) 0%,rgba(171,171,171,0) 100%)",
        "newly-gradient":
          "radial-gradient(ellipse 129% 111% at -4% 17%,rgba(208, 177, 53, 0.14), transparent)",
        "randomgame-gradient":
          "radial-gradient(ellipse 129% 111% at -4% 17%,rgba(59, 130, 246, 0.14), transparent)",

      }


    },
  },
  plugins: [],
}
export default config
