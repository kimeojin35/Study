/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      title1: "80px",
      title2: [
        "80px",
        {
          fontWeight: 700,
        },
      ],
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
