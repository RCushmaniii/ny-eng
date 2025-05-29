// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', ...defaultTheme.fontFamily.sans],
        // You can also define your 'Bruno Ace SC' here if you use it for specific headings via Tailwind classes
        // heading: ['Bruno Ace SC', ...defaultTheme.fontFamily.sans],
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
        'input-text-dark': 'var(--color-input-text-dark)',
      }
    },
  },
  plugins: [],
};
