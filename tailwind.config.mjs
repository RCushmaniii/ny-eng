// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/astro/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  corePlugins: {
    // Prevent duplicate utility generation
    preflight: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', ...defaultTheme.fontFamily.sans],
        heading: ['Noto Sans KR', 'sans-serif'],
        display: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        'background-light': 'var(--color-background-light)',
        'background-dark': 'var(--color-background-dark)',
        headline: 'var(--color-headline)',
        'headline-light': 'var(--color-headline-light)',
        'headline-dark': 'var(--color-headline-dark)',
        eyebrow: 'var(--color-eyebrow)',
        'eyebrow-light': 'var(--color-eyebrow-light)',
        'eyebrow-dark': 'var(--color-eyebrow-dark)',
        'body-base': 'var(--color-body-base)',
        'body-light': 'var(--color-body-light)',
        'body-dark': 'var(--color-body-dark)',
        input: 'var(--color-input)',
        'input-light': 'var(--color-input-light)',
        'input-dark': 'var(--color-input-dark)',
        'input-text': 'var(--color-input-text)',
        'input-text-light': 'var(--color-input-text-light)',
        'input-text-dark': 'var(--color-input-text-dark)'
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-body-base)',
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-primary-light)',
              },
            },
            h1: { color: 'var(--color-headline)' },
            h2: { color: 'var(--color-headline)' },
            h3: { color: 'var(--color-headline)' },
            h4: { color: 'var(--color-headline)' },
            strong: { color: 'var(--color-headline)' },
          },
        },
      },
      // Container configuration
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
      // Animation configuration
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
