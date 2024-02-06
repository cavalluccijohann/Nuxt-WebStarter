/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./**/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        main: withOpacity("--text-color"),
        accent: withOpacity("--accent-color"),
        secondary: withOpacity("--background-color"),
      },
      textColor: {
        main: withOpacity("--text-color"),
        accent: withOpacity("--accent-color"),
        secondary: withOpacity("--background-color"),
      },
      }
    },
};
