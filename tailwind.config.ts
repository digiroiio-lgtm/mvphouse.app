import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0066FF",
        "text-main": "rgba(0,0,0,0.9)",
        "text-muted": "rgba(0,0,0,0.6)",
        "card-border": "#E8E8E8",
      },
      boxShadow: {
        card: "0 20px 45px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
