/**
 *
 * TimeAt
 *
 */

import React from 'react';

import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// Sets the moment instance to use.
Moment.globalMoment = moment;

// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'ko';

// Set the output format for every react-moment instance.
// Moment.globalFormat = 'D MMM YYYY';

// Set the timezone for every instance.
// Moment.globalTimezone = 'America/Los_Angeles';

// Use a <span> tag for every react-moment instance.
// Moment.globalElement = 'span';

/* eslint-disable react/prefer-stateless-function */
class TimeAt extends React.PureComponent {
  render() {
    return <Moment date={this.props.date} fromNow />;
  }
}

TimeAt.propTypes = {};

export default TimeAt;
