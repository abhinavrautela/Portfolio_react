module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pop' : ['Poppins', 'sans-serif'],
       
      }
    },
  },
  plugins: [
     require('tailwindcss'),
  ],
};
