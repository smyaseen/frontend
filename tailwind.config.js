/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [nextui(), tailwindcssAnimated],
  theme: {
    extend: {},
  },
};
