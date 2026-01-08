import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        DancingScript: ["Dancing Script", "cursive"],
    },
  },
},
  plugins: [],
};

export default config;
