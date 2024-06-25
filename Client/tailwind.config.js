/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        background:"rgba(var(--background))",
        border:"rgba(var(--border))",
        card:"rgba(var(--card))",
        copy_primary:"rgba(var(--copy_primary))",
        copy_secondary:"rgba(var(--copy_secondary))",
        mytext1:"rgba(var(--mytext1))",
        mytext2:"rgba(var(--mytext2))",
        mytext3:"rgba(var(--mytext3))",
        



      }
    },
  },
  plugins: [],
}

