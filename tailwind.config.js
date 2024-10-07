/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        sourcecode: ['"Source Code Pro"', 'monospace'],
        inconsolata: ['Inconsolata', 'monospace'],
        // Add more fonts as needed
      },
    },
  },
  plugins: [],
};
