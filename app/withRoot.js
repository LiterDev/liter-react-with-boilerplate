import React from 'react';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
// import grey from '@material-ui/core/colors/grey';

// import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Header from 'components/Header';

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
      indicator: '#292d39',
      
    },
    secondary: blue,
    // background: {
    //   paper: '#ffffff',
    //   default: '#ffffff',
    // },
  },
  // shadows: ['none'],
  shadows: Array(25).fill('none'),
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
    // const { appbarShow } = props;
    // const appbarShow = true;
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        {/* MuiThemeProvider makes the theme available down the React tree
          thanks to React context. */}
        <MuiThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* {appbarShow && <Header />} */}

          <Component {...props} />
        </MuiThemeProvider>
      </JssProvider>
    );
  }

  return WithRoot;
}

withRoot.propTypes = {
  appbarShow: PropTypes.bool,
};

export default withRoot;
