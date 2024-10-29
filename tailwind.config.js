/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bump9: "bump9 3s linear infinite",
        worm9: "worm9 3s cubic-bezier(0.42,0.17,0.75,0.83) infinite",
      },
      keyframes: {
        bump9: {
          "0%, 42%, 46%, 51%, 55%, 59%, 63%, 67%, 71%, 74%, 78%, 81%, 85%, 88%, 92%, 100%":
            {
              transform: "translate(0, 0)",
            },
          "44%": {
            transform: "translate(1.33%, 6.75%)",
          },
          "53%": {
            transform: "translate(-16.67%, -0.54%)",
          },
          "61%": {
            transform: "translate(3.66%, -2.46%)",
          },
          "69%": {
            transform: "translate(-0.59%, 15.27%)",
          },
          "76%": {
            transform: "translate(-1.92%, -4.68%)",
          },
          "83%": {
            transform: "translate(9.38%, 0.96%)",
          },
          "90%": {
            transform: "translate(-4.55%, 1.98%)",
          },
        },
        worm9: {
          "0%": {
            strokeDashoffset: "10",
          },
          "25%": {
            strokeDashoffset: "295",
          },
          "100%": {
            strokeDashoffset: "1165",
          },
        },
      },
    },
  },
  plugins: [],
};
