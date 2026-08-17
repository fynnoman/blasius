import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm off-whites - like light through parchment
        paper: {
          50: "#FBF9F5",
          100: "#F6F3EC",
          200: "#EDE8DD",
          300: "#DED7C6",
          400: "#C4BBA3",
        },
        // Warm near-black ink
        ink: {
          950: "#12100D",
          900: "#1C1A16",
          800: "#2A2721",
          700: "#3D3931",
          600: "#57524A",
          500: "#7A7469",
          400: "#948E82",
          300: "#B3AD9F",
          200: "#D0CABD",
          100: "#E5E0D3",
        },
        // Muted sage/sepia accent - dignified, calm
        sage: {
          900: "#2A362E",
          800: "#3B4B3E",
          700: "#556B58",
          600: "#6E8672",
          500: "#8AA08D",
          400: "#A9BAAC",
          300: "#C6D2C7",
          200: "#DDE5DD",
          100: "#EDF1ED",
          50: "#F6F8F6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        micro: "0.22em",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
