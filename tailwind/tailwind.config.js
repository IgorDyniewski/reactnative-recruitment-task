/*
  In this file you can modify config for Tailwind.
*/
/* eslint-disable @typescript-eslint/no-var-requires */
/* It's to much hassle right now to fix Tailwind and PostCSS */
const theme = require('../config/theme');

const config = {
  content: [
    './screens/**/*.{jsx,tsx}',
    './ui-kit/**/*.{jsx,tsx}',
    './config/**/*.{js, json}',
  ],
  theme,
  plugins: [],
  // eslint-disable-next-line global-require
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};

module.exports = config;
