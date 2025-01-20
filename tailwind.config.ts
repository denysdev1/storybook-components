import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
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
        success: {
          DEFAULT: '#1FA412',
          aa: '#096E00',
        },
        warning: {
          DEFAULT: '#F9564F',
          aa: '#D52F2F',
        },
        surface: {
          crystal: {
            '60': '#FFFFFF99',
            DEFAULT: '#FFFFFF',
          },
          pearl: '#F2F2F2',
          'light-satin': '#CAC9C0',
          dark: '#121213',
        },
        supplementary: {
          '1': {
            '10': '#42776C1A',
            DEFAULT: '#42776C',
          },
          '2': '#7B4926',
          '3': {
            '10': '#B33F621A',
            '20': '#B33F6233',
            DEFAULT: '#B33F62',
          },
          '4': {
            '40': '#FBD1A266',
            DEFAULT: '#FBD1A2',
          },
          '5': '#8C9364',
          '6': {
            '10': '#4273931A',
            DEFAULT: '#427393',
          },
          '7': '#3E2513',
          amber: {
            '30': '#F7934C4D',
            DEFAULT: '#F7934C',
          },
        },
        stroke: {
          light: '#1212131A',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

