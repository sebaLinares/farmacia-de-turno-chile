const color = 'blue';
const theme_text = '#cccccc';
const label_theme = '#2d5a6b';
const label_text = theme_text;
const label_border = `1px solid ${theme_text}`;

const theme = {
  color, // I don't need color: color here because the names are the same
  'theme-text': theme_text,
  'label-theme': label_theme,
  'label-text': label_text,
  'label-border': label_border,
  font:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

export default theme;
