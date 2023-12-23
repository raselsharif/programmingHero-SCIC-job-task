/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image": "url('/src/assets/banner.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
