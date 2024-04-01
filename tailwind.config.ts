import type { Config } from 'tailwindcss'
import { Roboto_Slab, Cairo } from 'next/font/google'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'local-image': 'url("/EllipseIconBG.svg")',
        'ellipse-yellow': 'url("/EllipseYellow.svg")',
        'custom-black-opacity': 'rgba(0,0,0,0.40)'
      },
      width: {
        '90px': '90px',
        '563px': '563px'
      },
      height: {
        '90px': '90px',
        '125px': '125px'
      },
      colors: {
        primary: '#B6163E', // primary color used on the website
        secondary: '#F7F7F7', // secondary color used on the website
        'blue-dark': '#264D70', // Header color used on our work (overview) & political strategypage
        'yellow-dark': '#E2B100', //
        'orange-dark': '#D06900', // color used on some headers and action buttons
        'green-dark': '#437859', // Header color used on about us page
        'green-light': '#A0C67F', // ToC Community Outreach bullet point color

        overlay: 'rgba(254, 242, 194, 0.50)'
      },
      boxShadow: {
        custom: '0 2px 10px rgba(0, 0, 0, 0.20)'
      },
      borderWidth: {
        '20': '20px'
      },
      fontFamily: {
        main: ['Cairo', 'sans-serif'],
        body: ['Roboto_Slab', 'serif'],
        h1: ['Cairo', 'sans-serif'],
        h2: ['Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
