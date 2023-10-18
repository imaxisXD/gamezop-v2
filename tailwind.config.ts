import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        'navbar': '#212026',
        'fontcolor': '#9ba3af'
      },
    },
  },
  plugins: [],
}
export default config
