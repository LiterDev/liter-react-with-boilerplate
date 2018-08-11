/**
 *
 * PrivateWalletRoute
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import request from 'utils/request';

/* eslint-disable react/prefer-stateless-function */
class PrivateWalletRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticatedWallet: true,
      isAuthenticated: true,
      currentUser: null,
    };
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  getCurrentUser() {
    const requestURL = `${process.env.API_URL}/user/authInfo`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };
    return request(requestURL, options);
  }

  loadCurrentUser() {
    console.log('loadCurrentUser');
    this.getCurrentUser()
      .then(response => {
        console.log(response);
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isAuthenticatedWallet: response.hasWallet,
        });
      })
      .catch(error => {
        this.setState({
          currentUser: null,
          isAuthenticated: false,
          isAuthenticatedWallet: false,
        });
      });
  }

  componentWillMount() {
    this.loadCurrentUser();
  }

  render() {
    const { component: Component, ...rest } = this.props;
    // this.loadCurrentUser();
    // console.log(this.state.isAuthenticated);
    // console.log(this.state.isAuthenticatedWallet);
    if (!this.state.isAuthenticated) {
      return (
        <Route
          {...rest}
          render={props => (
            <Redirect
              to={{ pathname: '/signin', state: { from: props.location } }}
            />
          )}
        />
      );
    }
    if (!this.state.isAuthenticatedWallet) {
      return (
        <Route
          {...rest}
          render={props => (
            <Redirect
              to={{ pathname: '/signin', state: { from: props.location } }}
            />
          )}
        />
      );
    }

    return <Route {...rest} render={props => <Component {...props} />} />;

    // return (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.state.isAuthenticatedWallet ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{ pathname: '/signin', state: { from: props.location } }}
    //         />
    //       )
    //     }
    //   />
    // );
  }
}

PrivateWalletRoute.propTypes = {};

export default PrivateWalletRoute;
