/**
 *
 * FollowButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import messages from './messages';

const styles = theme => ({
  buttonText: {
    width: '34px',
    height: '16px',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
  },
  unButtonText: {
    width: '34px',
    height: '16px',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#8fa6bb',
  },
});

/* eslint-disable react/prefer-stateless-function */
class FollowButton extends React.PureComponent {

  onFollow = followId => {
    this.props.onViewFollow(followId);
  }

  handleSetFollow = (evt) => {
    evt.preventDefault();
    const { followId } = this.props;
    this.props.onFollow(followId);
  };

  handleSetUnFollow = (evt) => {
    evt.preventDefault();
    const { followId } = this.props;
    this.props.onUnFollow(followId);
  };

  render() {
    const { classes } = this.props;
    const { followId, followType, followYn } = this.props;

    if(followYn) {
      return (
        <div>
          <Typography className={classes.unButtonText}>
            <FormattedMessage {...messages.buttonTitle} />
          </Typography>
        </div>
      );  
    }
    return (
      <div>
        <Typography className={classes.buttonText}>
          <FormattedMessage {...messages.buttonTitle} />
        </Typography>
      </div>
    );
  }
}

FollowButton.propTypes = {};

export default withStyles(styles)(FollowButton);
