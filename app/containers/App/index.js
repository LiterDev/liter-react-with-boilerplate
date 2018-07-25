/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { PrivateRoute } from 'containers/Auth';
import SignUp from 'containers/SignUp/Loadable';
import { withStyles } from '@material-ui/core/styles';
import withRoot from 'withRoot';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  // margin: 56px auto;
  display: flex;
  min-height: 100%;
  padding: 80px 16px;
  flex-direction: column;
`;
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
    min: {
      height: '100vh',
    },
  },
});

function App(props) {
  const { classes } = props;
  return (
    <AppWrapper className={classes.root}>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute path="/features" component={FeaturePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}

// export default App;
export default withRoot(withStyles(styles)(App));
