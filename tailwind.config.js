module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "faded-white": "#ffffff46",
        "hero-gray": "#E5E5E5",
        "header-gray": "#C7C7C7",
        "text-gray": "#707070",
        "button-gray": "#4E575F",
        "line-break-gray": "#CCCCCC",
        "faq-gray": "#F2F2F2",
        "border-gray": "#D7D7D7",
        "query-box-red": "rgba(209,35,44,0.8)",
        "primary-blue": "#0051a0",
        "secondary-blue": "",
        "primary-orange": "#f19d39",
        "secondary-orange": "",
      },
    },
  },
  variants: {
    lineClamp: ["responsive", "hover"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
