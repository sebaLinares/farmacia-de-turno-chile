import theme from 'styled-theming';

// Images
import twitterLight from '../assets/twitter-light.png';
import twitterDark from '../assets/twitter-dark.png';
import linkedinLight from '../assets/linkedin-light.png';
import linkedinDark from '../assets/linkedin-dark.png';
import githubLight from '../assets/github-light.png';
import githubDark from '../assets/github-dark.png';
import logoutLight from '../assets/signout-light.png';
import logoutDark from '../assets/signout-dark.png';

export const mainBackgroundColor = theme('mode', {
  light:
    'linear-gradient(45deg, hsla(0, 0%, 94%, 1) 13%, rgba(0, 0, 0, 0) 13%), linear-gradient(45deg, #fff 86%, hsla(0, 0%,94%, 1) 86%)',
  dark:
    'linear-gradient(45deg, hsla(180, 63%, 28%, 1) 13%, rgba(0, 0, 0, 0) 13%), linear-gradient(45deg, hsla(191, 66%, 21%, 1) 86%, hsla(180, 63%, 28%, 1) 86%);',
});

export const changeThemeButtonBackgroundColor = theme('mode', {
  light: 'hsla(180, 63%, 28%, 1)',
  dark: 'hsla(191, 66%, 21%, 1)',
});

export const menuBtnColor = theme('mode', {
  light: 'hsla(191, 80%, 35%, 1)',
  dark: 'hsla(0, 0%, 94%)',
});

export const sidenavMenuBackground = theme('mode', {
  light: 'hsla(0, 0%, 90%, 1)',
  dark: 'hsla(216, 45%, 11%, 1)',
});

export const githubImg = theme('mode', {
  light: `url(${githubLight})`,
  dark: `url(${githubDark})`,
});

export const linkedinImg = theme('mode', {
  light: `url(${linkedinLight})`,
  dark: `url(${linkedinDark})`,
});

export const twitterImg = theme('mode', {
  light: `url(${twitterLight})`,
  dark: `url(${twitterDark})`,
});

export const logoutIcon = theme('mode', {
  light: `url(${logoutLight})`,
  dark: `url(${logoutDark})`,
});

export const cardBackgroundColor = theme('mode', {
  light: '#fff',
  dark: 'hsla(216, 45%, 11%, 1)',
});

export const fontColor = theme('mode', {
  light: 'hsla(216, 45%, 11%, 1)',
  dark: '#fff',
});
