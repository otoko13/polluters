import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PollutersUtil from './util/polluters.util';
import PoppinsLight from './fonts/Poppins-Light.ttf';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const poppinsLightFont = {
  fontFamily: 'PoppinsLight',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    local('PoppinsLight'),
    local('Poppins-Light'),
    url(${PoppinsLight}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'PoppinsLight, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [PoppinsLight],
      },
    },
  },
});

const polluters = PollutersUtil.getPolluters();

ReactDOM.render(
  // need to remove StrictMode tags as Material UI not caught up with latest React
  <ThemeProvider theme={theme}>
    <App polluters={polluters} />
  </ThemeProvider>,
  document.getElementById('root'),
);
