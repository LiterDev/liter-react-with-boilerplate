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
import { browserHistory } from 'react-router';
// import styled from 'styled-components';
import { Switch, Route, Redirect} from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MyPage from 'containers/MyPage/Loadable';
import UserGrade from 'components/UserGrade';
import ReviewForm from 'containers/ReviewForm/Loadable';

import SlideTest from 'containers/SlideTest/Loadable';

import FollowActionPage from 'containers/FollowActionPage/Loadable';
import FollowingActionPage from 'containers/FollowingActionPage/Loadable';
import Reviews from 'containers/Reviews/Loadable';
// import Auth from 'containers/Auth/Loadable';

// import ReviewDetailPage from 'containers/ReviewDetailPage/Loadable';
import ReviewDetailResolver from 'containers/ReviewDetailResolver/Loadable';
import EmailValid from 'containers/EmailValid/Loadable';
import About from 'components/About/Loadable';
// import ReviewFormEdit from 'containers/ReviewFormEdit/Loadable';

// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import { PrivateRoute, PrivateWalletRoute } from 'containers/Auth';
import SignUp from 'containers/SignUp/Loadable';
import SignIn from 'containers/SignIn/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import * as utils from 'utils/commonFunc';
import { withStyles } from '@material-ui/core/styles';
import withRoot from 'withRoot';
import axios from 'axios';

import ReviewsMyLike from 'containers/ReviewsMyLike/Loadable';

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

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    const requestURL = `${process.env.API_URL}/user/authInfo`;
    const token = `Bearer ${accessToken}`;
    axios({
      method: 'GET',
      url: requestURL,
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    }).then(resp => {
      // console.log(resp.data);
      // localStorage.setItem('accessToken', resp.data.accessToken);
      // localStorage.setItem('refreshToken', resp.data.refreshToken);
      localStorage.setItem('username', resp.data.username);
      localStorage.setItem('userNickName', resp.data.userNickName);
      localStorage.setItem(
        'profileImageSmallUrl',
        resp.data.profileImageSmallUrl,
      );
      localStorage.setItem('hasWallet', resp.data.hasWallet);
      localStorage.setItem('validStatus', resp.data.validStatus);
      localStorage.setItem('literCube', resp.data.literCube);
    });
  }

  return (
    <div className={classes.root}>
      <Helmet
        titleTemplate="세상의 모든 리뷰, LITER - %s"
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
        <Route path="/usergrade" component={UserGrade} />
        <Route exact path="/follow" component={FollowActionPage} />
        <Route path="/follow/:userId" component={FollowActionPage} />
        <Route exact path="/following" component={FollowingActionPage} />
        <Route path="/following/:userId" component={FollowingActionPage} />
        <PrivateRoute
          exact
          path="/review/write"
          component={ReviewForm}
          // authenticated={this.state.isAuthenticatedWallet}
        />
        <Route path="/review/edit/:reviewId" component={ReviewForm} />
        <Route path="/review/:reviewId" component={ReviewDetailResolver} />
        <Route path="/following" component={FollowingActionPage} />
        {/* <PrivateRoute exact path="/review/write" component={ReviewForm} /> */}
        {/* <PrivateRoute path="/review/edit/:reviewId" component={ReviewForm} /> */}
        <Route path="/review/:reviewId" component={ReviewDetailResolver} />
        <Route path="/slide" component={SlideTest} />
        {/* <PrivateRoute path="/valid/:validString" component={EmailValid} /> */}
        <PrivateRoute path="/valid" component={EmailValid} />
        <Route path="/about" component={About} />
        <Route path="/profile/:userId" component={ProfilePage} />
        {/* <ModalRoute path="/hello" component={ReviewsMyLike} /> */}
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

//     // config.headers.Authorization = token;
//     console.log(config);
//     console.log(config.method);

//     const url = config.url;
//     console.log(url);
//     if (url.includes('/engagement') && config.method === 'post') {
//       console.log('engagement!!!');

//       validHasWallet(config);
//       throw new axios.Cancel('Operation canceled by the user.');
//       // const valisResult = validHasWallet(config);
//       // console.log(valisResult);
//     }
//     return config;
//   },
//   function(error) {
//     // showSMessage(error.message, 'error');
//     return Promise.reject(error);
//   },
// );
// const validHasWallet = config => {
//   const requestURL = `${process.env.API_URL}/user/authInfo`;
//   const accessToken = localStorage.getItem('accessToken');
//   const token = `Bearer ${accessToken}`;

//   return axios({
//     method: 'GET',
//     url: requestURL,
//     headers: {
//       Accept: 'application/json;charset=UTF-8',
//       'Content-Type': 'application/json;charset=UTF-8',
//       'Access-Control-Allow-Origin': '*',
//       Authorization: token,
//     },
//   })
//     .then(resp => {
//       console.log(resp);
//       console.log(resp.data);
//       if (!resp.data.hasWallet) {
//         console.log('aaaaa');
//         alert('지갑인증이 필요한 서비스 입니다');
//         browserHistory.push('/mypage');
//         // return new Promise(() => {});
//         const error = new Error();
//         error.statusCode = 407;
//         error.statusMessage = '지갑인증이 필요한 서비스 입니다';
//         // statusCode: number;
//         // statusMessage: string;

//         // return Promise.reject(error);
//         // return {
//         //   headers: {},
//         //   method: config.method,
//         //   url: ""
//         // };
//         // return false;
//         // return Promise.reject(resp.data.hasWallet);
//       }
//       return config;
//     })
//     .catch(err => {
//       // browserHistory.push('/');
//     });
// };
// Add a request interceptor
// axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent

//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   },
// );

axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // console.log(error);
    // console.log(error.status);
    // Do something with response error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    if (error.response.status === 401) {
      // doRefreshToken();
      // alert("토큰이 만료되었습니다.");
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        utils.removeLocalStorage();
      }
      // console.log(window.location.pathname);
      // console.log('axios interceptors.');
      if (window.location.pathname !== '/signin') {
        window.location.href = '/signin';
      }

      // browserHistory.push('/signin');
      // window.location.href = '/signin';
    }
    // console.log(error.config);
    return Promise.reject(error);
  },
);

// export default App;
export default withRoot(withStyles(styles)(App));
