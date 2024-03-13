import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pagesComponents/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
      },
      colors: {
        primary: '#8570fe',
        secondary: '#459ced',
        success: '#429482',
        warning: '#e55d57',
        background: '#d3d5da',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#8570fe',
            secondary: '#459ced',
            success: '#429482',
            warning: '#e55d57',
            background: '#d3d5da',
          },
        },
      },
    }),
  ],
};
export default config;
