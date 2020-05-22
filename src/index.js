import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import PollutersUtil from './util/polluters.util';
import PoppinsLight from './fonts/Poppins-Light.ttf';

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
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'PoppinsLight, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [poppinsLightFont],
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
