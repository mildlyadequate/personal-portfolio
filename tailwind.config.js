module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'can-hover': {'raw': '(hover: hover)'},
      },
      fontSize: {
        clampTitle: "clamp(2.125rem, 7vw, 5rem)",
        clampSubtitle: "clamp(1.25rem, 3vw, 2.25rem)",
      },
      gridTemplateColumns: {
        about: "3fr 2fr",
      },
      colors: {
        themeBlack: "#07090D",
        themeBackground: "#171c28",
        themeBackgroundLight: "#1E2434", 
        themeAccent: "#09BC8A", // #57A773
        themeMild: "#8A99BC",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
