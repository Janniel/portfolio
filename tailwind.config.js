const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        'my-black': '#1c1b17',
        'my-white': '#faf9f5',
        'faye': '#bac55b',
      },
      fontFamily: {
        tasa: ["'TASA Orbiter', serif"],
        doto: ["'Doto', serif"],
        poppins: ["'Poppins', sans-serif"],
        poppinsBlack: ["'Poppins Black', sans-serif"],
      },

    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

