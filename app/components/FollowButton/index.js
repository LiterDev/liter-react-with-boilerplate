/**
 *
 * FollowButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class FollowButton extends React.PureComponent {

  onFollow = followId => {
    this.props.onViewFollow(followId);
  }

  render() {
    const { classes } = this.props;
    const { followId } = this.props;

    return (
      <div>
        <div onClick={() => { this.onFollow(followId) } }>
          팔로우
        </div>
      </div>
    );
  }
}

FollowButton.propTypes = {};

export default FollowButton;
