import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        airbnb: "#FF385C",
        rausch: "#E51D4E",
        ink: "#222222",
        mute: "#6A6A6A",
        line: "#DDDDDD",
      },
      fontFamily: {
        cereal: [
          "Nunito Sans",
          "Circular",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.12)",
        search: "0 3px 12px rgba(0,0,0,0.10)",
        host: "0 6px 20px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        listing: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
