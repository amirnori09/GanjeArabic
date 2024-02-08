/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'yellow_custom': '#FDCB18',
      'primary_custom': '#5A4FCF',
      neutral: {
        100: '#f8f9fa',
        200: '#FFF'
      },
      body: {
        100: '#888',
        200: '#444',
        300: '#222',
        400: '#000'
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ['var(--font-dana)']
    },
  },
  plugins: [],
};
