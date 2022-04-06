module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    variants: {
      // ...
      scrollbar: ['rounded']
  }
  },
  plugins: [require('tailwind-scrollbar')],
  

}
