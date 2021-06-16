/* eslint-disable */
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
        height: 'height',
        width: 'width',
      },
    },
    maxHeight: {
      '100': '100px',
      '200': '200px',
      '300': '300px',
      '400': '400px',
      '500': '500px',
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
  },
  variants: {
    maxHeight: ['focus', 'hover'],
  },
  plugins: [],
}
