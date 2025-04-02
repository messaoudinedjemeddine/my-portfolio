module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables manual dark mode toggling via the "dark" class
  theme: {
    extend: {
      colors: {
        // Dark Mode Colors
        dark: {
          background: "#1E1E1E", // Background for dark mode
          text: "#E5E7EB", // Light gray text for dark mode
          card: "#121212", // Dark card background
        },
        primary: "#F7B733", // Yellow accent color
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        handwriting: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
