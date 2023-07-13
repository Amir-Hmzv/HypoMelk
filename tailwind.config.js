/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      IRANYekanWeb: ["Font IRANYekanWeb"],
    },
    extend: {
      colors: {
        "main-green": "#158A77",
        "main-gray": "#798595",
        "main-text": " #030303",
      },
    },
  },
  plugins: [],
};
