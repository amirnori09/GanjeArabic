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
      'white_custom': '#FFFFFF',
      neutral: {
        50: '#eee',
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
        'hero-bg': "url('/images/bghome.png')",
      },
    },
    fontFamily: {
      sans: ['var(--font-dana)']
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ['light'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    rtl: true
  },
};
