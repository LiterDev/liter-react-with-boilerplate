/**
 *
 * Auth
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import axios from 'axios';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  // BrowserRouter as Router,
  Route,
  // Link,
  Redirect,
  // withRouter,
} from 'react-router-dom';
import makeSelectAuth from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   },
// };

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('username') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

export const PrivateWalletRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('username') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

const requestURL = `${process.env.API_URL}/user/authInfo`;

export function validAuth() {
  // console.log(props);
  const accessToken = localStorage.getItem('accessToken');
  // const refreshToken = localStorage.getItem('refreshToken');
  // console.log(accessToken);
  const token = `Bearer ${accessToken}`;

  return axios
    .get(requestURL, { headers: { Authorization: token } })
    .then(res => {
      // console.log(res);
      console.log(res.data.hasWallet);
      if (res.data.hasWallet) {
        return true;
      }
      return false;
    });
  // console.log(result);
  // return false;
  // console.log(hasWallet);
}
// const validAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   },
// };

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       validAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/login',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// );

function Auth() {
  return <div>{/* <FormattedMessage {...messages.header} /> */}</div>;
}

Auth.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Auth);
