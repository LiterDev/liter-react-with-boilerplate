/**
 *
 * FollowAjxButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

import axios from 'axios';

const styles = theme => ({
  followBox: {
    paddingRight: '16px',
    paddingTop: '22px',
  },
  buttonText: {
    width: '34px',
    height: '16px',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '12px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#1591ff',
  },
  unButtonText: {
    width: '34px',
    height: '16px',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '12px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#8fa6bb',
  },
});

/* eslint-disable react/prefer-stateless- */
class FollowAjxButton extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      followStatus: false,
      followId: null,
    }

    this.requestAjx = this.requestAjx.bind(this);
    this.handleSetFollow = this.handleSetFollow.bind(this);
    this.handleSetUnFollow = this.handleSetUnFollow.bind(this);

  }

  componentDidMount() {
    // const requestURL = `${process.env.API_URL}/following/exist/${this.props.followId}`;
    // const accessToken = localStorage.getItem('accessToken');
    // const token = `Bearer ${accessToken}`;
    // const options = {
    //   headers: {
    //     Accept: 'application/json;charset=UTF-8',
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     'Access-Control-Allow-Origin': '*',
    //     'Authorization': token,
    //   },
    // };
    // const data = {};
    // this.request(requestURL, data, options);
  }

  requestAjx = (method, sendType, requestURL, data, options) => {
    const self = this;
    axios({
      'method': sendType,
      'headers': options,
      'url': requestURL,
      'data': data,
    })
    .then( (response) {
      if(method == 'setFollow') {
        console.log(self);
        self.setState({
          'followStatus': 1
        });
      } else if(method == 'setUnFollow') {
        self.setState({
          'followStatus': false
        });
      }
      return response;
    })
    .catch( (error) { 
      console.log(error);
      return error;
    });

  }

  handleSetFollow(followId) {
    console.log("Set");
    const requestURL = `${process.env.API_URL}/follow`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token,
    };
    const data = JSON.stringify({
      'followId': followId
    });
    this.requestAjx('setFollow', 'POST', requestURL, data, options);
  }

  handleSetUnFollow(follodId) {
    console.log("UnSet");
    const requestURL = `${process.env.API_URL}/follow/${follodId}`;
    const accessToken = localStorage.getItem('accessToken');
    const token = `Bearer ${accessToken}`;
    const options = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': token,
    };
    const data = {};
    this.requestAjx('setUnFollow', 'DELETE', requestURL, data, options);
  }

  render() {
    const { classes } = this.props;
    const { followEmail, followId, followYn } = this.props;
    const { followStatus } = this.state;

    
    const userEmail = localStorage.getItem('username');
    const bSignIn = (userEmail)?true:false;

    if(!followStatus) {
      if(followYn > 0) {
        return (
          <div className={classes.followBox}>
            <Typography className={classes.unButtonText} onClick={() => { this.handleSetUnFollow(followId) }} >
              <FormattedMessage {...messages.unButtonTitle} />
            </Typography>
          </div>
        );
      }
      if(bSignIn && userEmail == followEmail) {
        return (
          <div className={classes.followBox}>
          </div>
        );
      }
      return (
        <div className={classes.followBox}>
          <Typography className={classes.buttonText} onClick={() => { this.handleSetFollow(followId) }} >
            <FormattedMessage {...messages.buttonTitle} />
          </Typography>
        </div>
      );
    } else {
      if(followStatus > 0) {
        return (
          <div className={classes.followBox}>
            <Typography className={classes.unButtonText} onClick={() => { this.handleSetUnFollow(followId) }} >
              <FormattedMessage {...messages.unButtonTitle} />
            </Typography>
          </div>
        );
      }
      return (
        <div className={classes.followBox}>
          <Typography className={classes.buttonText} onClick={() => { this.handleSetFollow(followId) }} >
            <FormattedMessage {...messages.buttonTitle} />
          </Typography>
        </div>
      );
    }
    return <div />
  }
}

FollowAjxButton.propTypes = {};

export default withStyles(styles)(FollowAjxButton);
