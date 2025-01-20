import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Utility Colors
        amber: {
          DEFAULT: '#F7934C',
        },
        'light-text': '#676767',
        granite: '#424542',
        crystal: '#FFFFFF',
        obsidian: {
          DEFAULT: '#121213',
          disabled: '#12121366',
        },
        // State Colors
        success: {
          DEFAULT: '#1FA412',
          aa: '#096E00',
        },
        warning: {
          DEFAULT: '#F9564F',
          aa: '#D52F2F',
        },
        // Surface Colors
        surface: {
          crystal: {
            DEFAULT: '#FFFFFF',
            60: '#FFFFFF99',
          },
          pearl: '#F2F2F2',
          'light-satin': '#CAC9C0',
          dark: '#121213',
        },
        // Supplementary Colors
        supplementary: {
          amber: {
            DEFAULT: '#F7934C',
            30: '#F7934C4D',
          },
          1: {
            DEFAULT: '#42776C',
            10: '#42776C1A',
          },
          2: '#7B4926',
          3: {
            DEFAULT: '#B33F62',
            20: '#B33F6233',
            10: '#B33F621A',
          },
          4: {
            DEFAULT: '#FBD1A2',
            40: '#FBD1A266',
          },
          5: '#8C9364',
          6: {
            DEFAULT: '#427393',
            10: '#4273931A',
          },
          7: '#3E2513',
        },
        // Stroke Colors
        stroke: {
          light: '#1212131A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

