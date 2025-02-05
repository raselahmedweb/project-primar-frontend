/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBg1: "#D9EAFD",
      },
      keyframes: {
        moveAndPause: {
          '0%': { transform: 'translateX(100%)' }, 
          '10%': { transform: 'translateX(0%)' },
          '90%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        moveAndPause: 'moveAndPause 12s ease-in-out', // Total 12 seconds
      },
    },
  },
  plugins: [],
};
