import theme from 'styled-theming';
import bgLight from '../assets/bg-light-transparent.png';
import bgDark from '../assets/bg-dark-transparent.png';

export const mainBackgroundImage = theme('mode', {
  light:
    'linear-gradient(45deg, hsla(0, 0%, 94%, 1) 13%, rgba(0, 0, 0, 0) 13%), linear-gradient(45deg, #fff 90%, hsla(0, 0%,94%, 1) 90%)',
  dark:
    'linear-gradient(45deg, hsla(180, 63%, 28%, 1) 13%, rgba(0, 0, 0, 0) 13%), linear-gradient(45deg, hsla(191, 66%, 21%, 1) 86%, hsla(180, 63%, 28%, 1) 86%);',
});

export const menuBtnColor = theme('mode', {
  light: 'hsla(191, 80%, 35%, 1)',
  dark: 'hsla(0, 0%, 94%)',
});

export const mainBackgroundColour = theme('mode', {
  light: 'hsla(0, 0%, 100%, 1)',
  dark: 'hsla(191, 80%, 35%, 1)',
});
