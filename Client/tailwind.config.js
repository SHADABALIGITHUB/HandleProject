/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        copy_primary: "rgba(var(--copy_primary))",
        copy_secondary: "rgba(var(--copy_secondary))",
        mytext: "rgba(var(--mytext))",
        btntext: "rgba(var(--btntext))",
        btnbackground: "rgba(var(--btnbackground))",
      }
    },
  },
  plugins: [
    
  ],
}

