/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    fontFamily: {
      IRANYekanWeb: ["Font IRANYekanWeb"],
    },
    extend: {
      colors: {
        "main-green": "#158A77",
        "main-gray": "#798595",
        "main-text": " #030303",
        special: "#FFA80A",
        precell: "#55499B",
      },
      backgroundImage: {
        hero: "url('/public/cards/news/backGround.png')",
        beach:
          "url('/public/umbrella-chair-around-outdoor-swimming-pool-neary-sea-hotel-resort 2.png')",
          jungle:
          "url('/public/tropical-home-luxury-water-sky 2.png')",
          spot:
          "url('/public/spots/bgSpot.png')",
      },
      
    },
  },
  plugins: [],
};
