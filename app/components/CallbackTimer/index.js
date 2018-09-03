/**
 *
 * Timer
 *
 */

import React from 'react';
import AccessTime from '@material-ui/icons/AccessTime';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Moment from 'react-moment';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class CallbackTimer extends React.PureComponent {

  constructor(props) {
    super(props);
    const unixTimeStamp = Number(localStorage.getItem(this.props.storageItemName));
    const curTimeStamp = parseInt(unixTimeStamp / 1000);
    const toTimeStamp = curTimeStamp + this.props.limitSeconds;
    this.state = {
      unixTime: unixTimeStamp,
      fromTime: curTimeStamp,
      curTickTime: curTimeStamp,
      toTime: toTimeStamp,
      tickTime: 0,
    };
  }

  tick() {
    const self = this;
    console.log("로컬 정보", localStorage.getItem(this.props.storageItemName));
    console.log("State 정보", this.state.unixTime);
    if(Boolean(localStorage.getItem(this.props.storageItemName))
      && this.state.unixTime != Number(localStorage.getItem(this.props.storageItemName))
      ) {
      const unixTimeStamp = Number(localStorage.getItem(this.props.storageItemName));
      const curTimeStamp = parseInt(unixTimeStamp / 1000);
      const toTimeStamp = curTimeStamp + this.props.limitSeconds;
      self.setState({'fromTime': curTimeStamp});
      self.setState({'unixTime': unixTimeStamp});
      self.setState({'toTime': toTimeStamp});      
      console.log("갱신 ------ ");
    } else {
      var dateObj = new Date();
      // var utcEpochSeconds = parseInt((dateObj.getTime() + (dateObj.getTimezoneOffset() * 60000)) / 1000);
      var localTimeDate = parseInt(dateObj.getTime() / 1000);
      console.log("@@@현재 Loal react 시간", localTimeDate);
      console.log("@@@서버 마감 시간", this.state.toTime);
      const timeDiff = this.state.toTime - localTimeDate;
      self.setState({'tickTime': timeDiff});
    }
  }

  getLimit(type) {

    // const curTickTime = new Date(this.state.curTickTime);
    const timeDiff = this.state.tickTime;
    console.log(timeDiff);
    if(timeDiff > 0) {
      switch (type) {
        case 'HOUR':
          return String(
            Math.floor(timeDiff / (60 * 60)),
          );
        case 'MINUTE':
          return String(
            Math.floor((timeDiff / 60) % 60),
          );
        case 'SECONDS':
          return String(
            Math.floor(timeDiff % 60),
          );
        default:
          return;
      }
    }    
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
    
  }
  componentWillUnmount() {
    this.setState({'unixTime': 0});
    clearInterval(this.timer);
  }

  render() {
    const { limitSeconds, storageItemName, items } = this.props;

    return (
      <div>
        <AccessTime />        
        {items.indexOf('H') > -1 && this.getLimit('HOUR')}
        {items.indexOf('H') > -1 && <FormattedMessage {...messages.hour} />}
        {items.indexOf('M') > -1 && this.getLimit('MINUTE')}
        {items.indexOf('M') > -1 && <FormattedMessage {...messages.minute} />}
        {items.indexOf('S') > -1 && this.getLimit('SECONDS')}
        {items.indexOf('S') > -1 && <FormattedMessage {...messages.seconds} />}
        <br />
      </div>
    );
  }
}

CallbackTimer.propTypes = {};

export default CallbackTimer;
