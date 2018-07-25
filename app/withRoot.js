import React from 'react';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import grey from '@material-ui/core/colors/grey';

// import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: grey[50],
//       main: grey[50],
//       dark: grey[50],
//     },
//     secondary: {
//       light: green[300],
//       main: green[500],
//       dark: green[700],
//     },
//   },
// });
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#999999',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
  },
  shadows: [0],
});

// Create a JSS instance with the default preset of plugins.
// It's optional.
const jss = create(jssPreset());

// The standard class name generator.
// It's optional.
const generateClassName = createGenerateClassName();

function withRoot(Component) {
  function WithRoot(props) {
    // JssProvider allows customizing the JSS styling solution.
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        {/* MuiThemeProvider makes the theme available down the React tree
          thanks to React context. */}
        <MuiThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </JssProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
