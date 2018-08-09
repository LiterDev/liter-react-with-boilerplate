/**
 *
 * Timer
 *
 */

import React from 'react';
import AccessTime from '@material-ui/icons/AccessTime';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Moment from 'react-moment';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Timer extends React.PureComponent {
  state = {
    sendEmailSuccessTime: Number(localStorage.getItem('sendEmailSuccessTime')),
    seconds: Number(localStorage.getItem('sendEmailSuccessTime')),
    limitTime:
      Number(localStorage.getItem('sendEmailSuccessTime')) + 2 * 60 * 60 * 1000,
  };

  convertUTCDateToLocalDate(date) {
    // console.log(`date:::${date}`);
    // console.log(`date.getTimezoneOffset():::${date.getTimezoneOffset()}`);
    const newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000,
    );
    // console.log(`new date:::${newDate}`);

    // const offset = date.getTimezoneOffset() / 60;
    // const hours = date.getHours();

    // newDate.setHours(hours - offset);

    return newDate;
  }

  tick() {
    const { seconds, sendEmailSuccessTime } = this.state;
    const tempSendEmailTime = Number(
      localStorage.getItem('sendEmailSuccessTime'),
    );
    if (sendEmailSuccessTime !== tempSendEmailTime) {
      // console.log('reset');
      this.setState({
        sendEmailSuccessTime: tempSendEmailTime,
        seconds: tempSendEmailTime,
        limitTime: tempSendEmailTime + 2 * 60 * 60 * 1000,
      });
    } else {
      // console.log('continue');
      this.setState({
        seconds: seconds + 1000,
      });
    }
  }

  getLimit(type) {
    const localLimitTime = this.convertUTCDateToLocalDate(
      new Date(this.state.limitTime),
    );
    // console.log(`limitTime::: ${localLimitTime.getTime()}`);
    // console.log(`Date.now()::: ${Date.now()}`);
    // console.log(((localLimitTime - Date.now()) / 1000) % 60);
    switch (type) {
      case 'HOUR':
        return Math.floor((localLimitTime - Date.now()) / (60 * 60 * 1000));
      case 'MINUTE':
        return Math.floor(((localLimitTime - Date.now()) / (60 * 1000)) % 60);
      case 'SECONDS':
        return Math.floor(((localLimitTime - Date.now()) / 1000) % 60);
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
    // const { seconds, sendEmailSuccessTime, limitTime } = this.state;
    return (
      <div>
        {/* state - limitTime ::: <br />
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
        storage-sucess ::: <br />
        <Moment
          format="YYYY-MM-DD hh:mm:ss"
          date={Number(localStorage.getItem('sendEmailSuccessTime'))}
        />({Number(localStorage.getItem('sendEmailSuccessTime'))})<br />
        <br />
        <br />
        utcChange - limitTime ::: <br />
        <Moment
          format="YYYY-MM-DD HH:mm:ss"
          date={this.convertUTCDateToLocalDate(new Date(limitTime))}
        />
        <br />
        utcChange - sendEmailSuccessTime ::: <br />
        <Moment
          format="YYYY-MM-DD HH:mm:ss"
          date={this.convertUTCDateToLocalDate(new Date(sendEmailSuccessTime))}
        />
        <br />
        stoNow ::: <br />
        <Moment format="YYYY-MM-DD hh:mm:ss" date={Date.UTC()} />
        <br />
        diff ::: <br /> */}
        <AccessTime />
        {this.getLimit('HOUR')}시
        {this.getLimit('MINUTE')}분
        {this.getLimit('SECONDS')}초
        <br />
      </div>
    );
  }
}

Timer.propTypes = {};

export default Timer;
