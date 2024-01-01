const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Red Hat Display Variable', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          'v-blue': '#77AEF4',
          'v-light-blue': '#D3E7FF',
          'v-purple': '#2B2A3F',
          'v-link': '#A3AED0',
          'v-gray': '#f2f1f9',
          'v-text-gray': '#384D67',
          'v-form-gray': '#f5f4fa',
          'v-icon-purple': '#A3AED0',
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

