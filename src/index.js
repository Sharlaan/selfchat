import { deepOrange, lightBlue } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

// Default theme values: https://material-ui.com/customization/default-theme/
const customTheme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: deepOrange[400],
    },
    // text: {
    //   color: blueGrey[700],
    // },
  },
  overrides: {
    MuiCheckbox: {
      root: {
        '&$checked': {
          color: deepOrange[400],
        },
      },
      // boxColor: blueGrey[500],
    },
    // svgIcon: {
    //   color: blueGrey[500],
    // },
  },
});

render(
  <MuiThemeProvider theme={customTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
