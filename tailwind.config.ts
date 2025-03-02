module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        "brand-blue-ui": "#313892",
        "brand-blue": "#152649",
        "brand-green": "#CDDA32",
        "brand-grey": "#CED2D7",
        "brand-info": "#E5F6FF",
        "brand-warning": "#FFFFCC",
        "brand-background": "#F9F9F9",
        "text-description": "#152649A3",
        "footer-title": "#333333",
        "header-text": "#7E7E7E",
        "text-light": "#999999",
        "sidebar-divider": "#E2E4E9",
        "social-media-background": "#E9E9E9",
        "form-placeholder": "#B4B9C4",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
