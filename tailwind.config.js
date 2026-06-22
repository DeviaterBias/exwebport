/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "Times New Roman", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        void: "#03050a",
        obsidian: "#070b12",
        blood: "#9d1024",
        ember: "#d53a3a",
        frost: "#dbeafe",
        silver: "#d8dde8",
      },
      boxShadow: {
        redglow: "0 0 48px rgba(207, 28, 49, 0.28)",
        blueglow: "0 0 52px rgba(94, 151, 255, 0.22)",
      },
      backgroundImage: {
        scanline:
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
