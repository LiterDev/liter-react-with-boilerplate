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
import { Switch, Route, Redirect } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MyPage from 'containers/MyPage/Loadable';
import ReviewForm from 'containers/ReviewForm/Loadable';

import SlideTest from 'containers/SlideTest/Loadable';

import FollowActionPage from 'containers/FollowActionPage/Loadable';
import FollowingActionPage from 'containers/FollowingActionPage/Loadable';
import Reviews from 'containers/Reviews/Loadable';
// import Auth from 'containers/Auth/Loadable';

// import ReviewDetailPage from 'containers/ReviewDetailPage/Loadable';
import ReviewDetailResolver from 'containers/ReviewDetailResolver/Loadable';
import EmailValid from 'containers/EmailValid/Loadable';
// import ReviewFormEdit from 'containers/ReviewFormEdit/Loadable';

// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import { PrivateRoute, PrivateWalletRoute } from 'containers/Auth';
import SignUp from 'containers/SignUp/Loadable';
import SignIn from 'containers/SignIn/Loadable';
import { withStyles } from '@material-ui/core/styles';
import withRoot from 'withRoot';
import axios from 'axios';

import PrivateWalletRoute from 'components/PrivateWalletRoute';
import { showInfo, showSMessage } from './Message';
// import axios from 'axios';

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

// const requestURL = `${process.env.API_URL}/user/authInfo`;
function App(props) {
  // function App(props) {
  // const { classes, userinfo } = props;

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Helmet
        titleTemplate="%s - 세상의 모든 리뷰, LITER"
        defaultTitle="세상의 모든 리뷰, LITER"
      >
        {/* <meta name="description" content="A React.js Boilerplate application" />
        <script type="text/javascript" src={naverMapUrl} /> */}
      </Helmet>
      {/* <Header /> */}

      <Switch>
        <Route exact path="/" component={Reviews} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/mypage" component={MyPage} />
        <Route exact path="/follow" component={FollowActionPage} />
        <Route path="/follow/:userId" component={FollowActionPage} />
        <Route exact path="/following" component={FollowingActionPage} />
        <Route path="/following/:userId" component={FollowingActionPage} />
        <PrivateWalletRoute exact path="/review/write" component={ReviewForm} />
        <PrivateRoute path="/review/edit/:reviewId" component={ReviewForm} />
        <Route path="/review/:reviewId" component={ReviewDetailResolver} />        
        <Route path="/slide" component={SlideTest} />
        {/* <PrivateRoute path="/valid/:validString" component={EmailValid} /> */}
        <Route path="/valid" component={EmailValid} />

        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Auth /> */}
      {/* <Footer /> */}
    </div>
  );
}

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('accessToken') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

// const PrivateWalletRoute = ({
//   component: Component,
//   authenticated,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={props =>
//       authenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{ pathname: '/signin', state: { from: props.location } }}
//         />
//       )
//     }
//   />
// );

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

// axios.interceptors.request.use(
//   function(config) {
//     // const url = config.url;

//     const accessToken = localStorage.getItem('accessToken');
//     const token = `Bearer ${accessToken}`;
//     // config.headers.Authorization = token;

//     return config;
//   },
//   function(error) {
//     showSMessage(error.message, 'error');
//     return Promise.reject(error);
//   },
// );

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent

    // config.headers.AccessControlAllowOrigin =  '*';
    // config.headers.Accept = 'application/json';
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    console.log(error);
    console.log(error.status);
    // Do something with response error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  },
);
// axios.interceptors.response.use(
//   function(response) {
//     // requestSuccess();
//     return response;
//   },
//   function(error) {
//     console.log(error);
//     console.log(error.status)
//     console.log(error.response.status);
//     // console.log(error.response.data.code === '401012');
//     if (error.response.status === 401) {
//       // doRefreshToken();

//       deleteOAuthToken();

//       browserHistory.push('/');
//     } else if (error.response.data.code === '2003002') {
//       showSMessage('Server connection is lost', 'error');
//       browserHistory.push('/');
//     }
//     return Promise.reject(error);
//   },
// );

export const doRefreshToken = () => {
  const authUrl = `${process.env.API_URL}/auth/claimAccessToken`;
  const refreashToken = localStorage.getItem('refreashToken');
  const token = `Bearer ${refreashToken}`;
  // config.headers.Authorization = token;
  console.log('doRefreshToken');
  return axios({
    method: 'POST',
    url: authUrl,
    headers: {
      Authorization: token,
    },
  })
    .then(resp => {
      // if (resp.data.code === 201) {

      localStorage.setItem('accessToken', resp.accessToken);
      localStorage.setItem('refreshToken', resp.refreshToken);
      localStorage.setItem('username', resp.username);

      return resp.data;
      // }
    })
    .catch(err => {
      const error = JSON.parse(JSON.stringify(err)).response;
      console.log(error, error.data.code, error.data.code === 401013);
      if (error.data.code === 401013) {
        showSMessage('Login session expired', 'info');
      } else {
        showSMessage('Server connection is lost', 'error');
      }
      // deleteOAuthToken();
      browserHistory.push('/signin');
    });
};
// export default App;
export default withRoot(withStyles(styles)(App));
