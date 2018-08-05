/**
 *
 * Auth
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  // BrowserRouter as Router,
  Route,
  // Link,
  Redirect,
  // withRouter,
} from 'react-router-dom';
import { makeSelectAuth, makeAuthAcessValid } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { authAcessValid } from './actions';
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
// console.log(props.makeSelectAuth)

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

function Auth() {
  return <div>{/* <FormattedMessage {...messages.header} /> */}</div>;
}

Auth.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // authAcessValid: PropTypes.func,
  // auth: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  authAcessValid: makeAuthAcessValid(),
});

function mapDispatchToProps(dispatch) {
  return {
    authAcessValid: dispatch(authAcessValid()),
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
