import type { Config } from 'tailwindcss'

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
        'main-yellow': '#FFC700',
        'main-gray': '#F7F7F7',
        'darker-yellow': '#E2B100',
        'light-yellow': '#FFF7E0',
        overlay: 'rgba(254, 242, 194, 0.50)'
      },
      boxShadow: {
        custom: '0 2px 10px 0 rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
}
export default config
