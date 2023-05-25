/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}


// initialize tailwind at the root of your project using  npx tailwindcss init
// both the input and output files of the tailwindcss are made in the static directory in different folders 
//Add tailwindcss components in your input.css file from the tailwind website