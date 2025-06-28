/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedadMedium: ['"estedad-medium"'],
        estedadRegular: ['"estedad-regular"'],
        estedadLight: ['"estedad-light"'],
        estedadBold: ['"estedad-bold"'],
      },
    },
  },
  plugins: [],
};
