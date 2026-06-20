/** @type {import('tailwindcss').Config} */ // JSDoc type declaration
export default { // Export Tailwind configuration
  content: [ // Specify content paths
    "./index.html", // Include root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React source files
  ], // Close content array
  theme: { // Define theme object
    extend: { // Extend default theme
      colors: { // Define custom colors
        'brand-black': '#000000', // Set custom black color
        'brand-yellow': '#DCDD00', // Set custom brand yellow
      }, // Close colors object
      fontFamily: { // Define custom font families
        sans: ['Space Grotesk', 'Rajdhani', 'Roboto Mono', 'sans-serif'], // Set Space Grotesk as primary
      }, // Close fontFamily object
    }, // Close extend object
  }, // Close theme object
  plugins: [], // Define plugins array
} // Close default export
