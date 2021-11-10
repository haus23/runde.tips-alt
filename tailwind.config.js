const formsPlugin = require('@tailwindcss/forms');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [formsPlugin],
};
