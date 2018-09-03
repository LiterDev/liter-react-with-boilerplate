/**
 *
 * TimeAt
 *
 */

import React from 'react';

import Moment from 'react-moment';
import momentLocales from 'moment/min/moment-with-locales';
// import moment from 'moment';
// import 'moment-timezone';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// Sets the moment instance to use.
Moment.globalMoment = momentLocales;

// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'ko';

// Set the output format for every react-moment instance.
// Moment.globalFormat = 'D MMM YYYY';

// Set the timezone for every instance.
// Moment.globalTimezone = 'Etc/UCT';

// Use a <span> tag for every react-moment instance.
// Moment.globalElement = 'span';

// moment.tz.setDefault('Etc/UTC');

/* eslint-disable react/prefer-stateless-function */
class TimeAt extends React.PureComponent {
  render() {
    const tmp = new Date();
    const unixTimeStamp = parseInt(this.props.date - (this.props.date % 1000) / 1000);
    return (
      <Moment
        from={tmp.getTime()}
        // date={this.props.date + tmp.getTimezoneOffset() * 1000}
        date={unixTimeStamp}
      />
    );
  }
}

TimeAt.propTypes = {};

export default TimeAt;
