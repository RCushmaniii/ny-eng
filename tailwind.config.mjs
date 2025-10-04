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
        sans: ['NotoSansKR', ...defaultTheme.fontFamily.sans],
        heading: ['BrunoAceSC', 'sans-serif'],
        display: ['BrunoAceSC', 'sans-serif'],
      },
      colors: {
        // Primary colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        // Secondary colors
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },
        // Accent colors
        accent: 'var(--color-accent)',
        // Background colors
        background: {
          DEFAULT: 'var(--color-background)',
          light: 'var(--color-background-light)',
          dark: 'var(--color-background-dark)',
        },
        // Text colors
        headline: {
          DEFAULT: 'var(--color-headline)',
          light: 'var(--color-headline-light)',
          dark: 'var(--color-headline-dark)',
        },
        // Body text colors
        body: {
          base: 'var(--color-body-base)',
          light: 'var(--color-body-light)',
          dark: 'var(--color-body-dark)',
        },
        // Eyebrow colors
        eyebrow: {
          DEFAULT: 'var(--color-eyebrow)',
          light: 'var(--color-eyebrow-light)',
          dark: 'var(--color-eyebrow-dark)',
        },
      },
      typography: (theme) => ({
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
      }),
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
