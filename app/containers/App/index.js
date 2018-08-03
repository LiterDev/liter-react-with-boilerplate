/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MyPage from 'containers/MyPage/Loadable';
import ReviewForm from 'containers/ReviewForm/Loadable';

import SlideTest from 'containers/SlideTest/Loadable';

import FollowActionPage from 'containers/FollowActionPage/Loadable';
import FollowingActionPage from 'containers/FollowingActionPage/Loadable';
import Reviews from 'containers/Reviews/Loadable';
// import ReviewDetailPage from 'containers/ReviewDetailPage/Loadable';
import ReviewDetailResolver from 'containers/ReviewDetailResolver/Loadable';

// import Header from 'components/Header';
// import Footer from 'components/Footer';
import { PrivateRoute } from 'containers/Auth';
import SignUp from 'containers/SignUp/Loadable';
import SignIn from 'containers/SignIn/Loadable';
import { withStyles } from '@material-ui/core/styles';
import withRoot from 'withRoot';

// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   // margin: 56px auto;
//   display: flex;
//   min-height: 100%;
//   padding: 80px 0px;
//   flex-direction: column;
// `;
const styles = theme => ({
  root: {
    // textAlign: 'center',
    paddingTop: theme.spacing.unit * 8,
    // paddingTop: 64,
    minHeight: '100vh',
    // display: 'flex',
    width: '100%',
  },
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Helmet
        titleTemplate="%s - 세상의 모든 리뷰, LITER"
        defaultTitle="세상의 모든 리뷰, LITER"
      >
        <meta name="description" content="LITER application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Reviews} />
        <PrivateRoute path="/features" component={FeaturePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/mypage" component={MyPage} />
        <Route path="/follow" component={FollowActionPage} />
        <PrivateRoute exact path="/review/write" component={ReviewForm} />
        <Route path="/review/:reviewId" component={ReviewDetailResolver} />
        <Route path="/following" component={FollowingActionPage} />
        <Route path="/slide" component={SlideTest} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default App;
export default withRoot(withStyles(styles)(App));
