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
class Timer extends React.PureComponent {
  state = {
    sendEmailSuccessTime: Number(
      localStorage.getItem(this.props.storageItemName),
    ),
    seconds: Number(localStorage.getItem(this.props.storageItemName)),
    limitTime:
      Number(localStorage.getItem(this.props.storageItemName)) +
      this.props.limitSeconds * 1000,
  };

  // convertUTCDateToLocalDate(date) {
  //   // console.log(`date:::${date}`);
  //   // console.log(`date.getTimezoneOffset():::${date.getTimezoneOffset()}`);
  //   const newDate = new Date(
  //     date.getTime() + date.getTimezoneOffset() * 60 * 1000,
  //   );
  //   // console.log(`new date:::${newDate}`);

  //   // const offset = date.getTimezoneOffset() / 60;
  //   // const hours = date.getHours();

  //   // newDate.setHours(hours - offset);

  //   return newDate;
  // }

  tick() {
    const { seconds, sendEmailSuccessTime } = this.state;
    const { limitSeconds, storageItemName, returnLimit } = this.props;
    const tempSendEmailTime = Number(localStorage.getItem(storageItemName));
    const tempLimitTime = tempSendEmailTime + limitSeconds * 1000;
    const tempSeconds = seconds + 1000;
    if (sendEmailSuccessTime !== tempSendEmailTime) {
      console.log('reset');
      this.setState({
        sendEmailSuccessTime: tempSendEmailTime,
        seconds: tempSendEmailTime,
        limitTime: tempLimitTime,
      });
    } else {
      console.log('continue');
      this.setState({
        seconds: tempSeconds,
      });
      // console.log(tempLimitTime + 1000);
      // console.log(tempSeconds);
      // console.log(tempLimitTime - 1000);
      if (tempLimitTime > tempSeconds && tempSeconds >= tempLimitTime - 1000) {
        returnLimit();
      }
    }
  }

  getLimit(type) {
    // const localLimitTime = this.convertUTCDateToLocalDate(
    //   new Date(this.state.limitTime),
    // );
    const localLimitTime = new Date(this.state.limitTime);
    // console.log(`limitTime::: ${localLimitTime.getTime()}`);
    // console.log(`Date.now()::: ${Date.now()}`);
    // console.log(((localLimitTime - Date.now()) / 1000) % 60);
    switch (type) {
      case 'HOUR':
        return String(
          Math.floor((localLimitTime - Date.now()) / (60 * 60 * 1000)),
        );
      case 'MINUTE':
        return String(
          Math.floor(((localLimitTime - Date.now()) / (60 * 1000)) % 60),
        );
      case 'SECONDS':
        return String(Math.floor(((localLimitTime - Date.now()) / 1000) % 60));
      default:
        return (localLimitTime - Date.now()) / 1000;
    }
  }

  componentDidMount() {
    // console.log(Date.now());
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { seconds, sendEmailSuccessTime, limitTime } = this.state;
    const { limitSeconds, storageItemName, items } = this.props;
    return (
      <div>
        {/* input limitSeconds ::: {limitSeconds}
        <br />
        <br />
        storage-sucess ::: <br />
        <Moment
          format="YYYY-MM-DD hh:mm:ss"
          date={Number(localStorage.getItem(storageItemName))}
        />({Number(localStorage.getItem(storageItemName))})<br />
        <br />
        state - limitTime ::: <br />
        <Moment format="YYYY-MM-DD hh:mm:ss" date={limitTime} />({limitTime})
        <br />
        <br />
        state - sendEmailSuccessTime ::: <br />
        <Moment format="YYYY-MM-DD hh:mm:ss" date={sendEmailSuccessTime} />({
          sendEmailSuccessTime
        })<br />
        state - seconds ::: <br />
        <Moment format="YYYY-MM-DD hh:mm:ss" date={seconds} />({seconds})<br />
        <br />
        diff ::: <br /> */}
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

Timer.propTypes = {};

export default Timer;
