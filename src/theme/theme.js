import theme from 'styled-theming';
import bgLight from '../assets/bg-light-transparent.png';
import bgDark from '../assets/bg-dark-transparent.png';

export const mainBackgroundImage = theme('mode', {
  light: `url(${bgLight})`,
  dark: `url(${bgDark})`,
});

export const menuBtnColor = theme('mode', {
  light: 'hsla(191, 80%, 35%, 1)',
  dark: 'hsla(0, 0%, 94%)',
});

export const mainBackgroundColour = theme('mode', {
  light: 'hsla(0, 0%, 100%, 1)',
  dark: 'hsla(191, 80%, 35%, 1)',
});
