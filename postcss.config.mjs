const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
        dark: "#1F2937",
        light: "#F9FAFB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
};

export default config;
