/*
  In this file we define out theme. It's available for both styled-components and Tailwind.
  Remember it needs to be compatible with tailwind
*/
/* eslint-disable @typescript-eslint/no-var-requires */
/* It's to much hassle right now to fix Tailwind and PostCSS */
// Modules
const variables = require('./variables');

// Creating spacing levels
const spacing = {};
for (let i = 0; i < variables.spacingLevels; i += 1) {
  spacing[i] = `${variables.spacingBase * i}px`;
}
// Adding 4px spacing because it's used in some places
spacing['0-8'] = `${variables.spacingBase * 0.8}px`;

const theme = {
  ...variables,
  spacing,
};

module.exports = theme;
