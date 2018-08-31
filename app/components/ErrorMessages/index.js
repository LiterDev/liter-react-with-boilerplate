/**
 *
 * ErrorCodes
 *
 */
/* default */
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
/* material-ui core */
/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const ErrorCodes = {
  PASSWORD_VALID: 500100,
  PASSWORD_EMPTY: 500101,
  PASSWORD_PATTERN_VALID: 500102,
  PASSWORD_REPEAT_EMPTY: 500103,
  PASSWORD_REPEAT_PATTERN_VALID: 500104,
  PASSWORD_NOT_EQUAL: 500105,
  EMAIL_EMPTY: 500108,
  EMAIL_VALID: 500110,
  EMAIL_EXISTS: 500109,
  NICK_NAME_EMPTY: 500112,
  NICK_NAME_IS_ALREADY_EXISTS: 500113,
  messages: {
    500100: { code: 'passwordValid' },
    500101: { code: 'passwordEmpty' },
    500102: { code: 'passwordPatternValid' },
    500103: { code: 'passwordRepeatEmpty' },
    500104: { code: 'passwordPatternValid' },
    500105: { code: 'passwordNotEqual' },
    500108: { code: 'emailEmpty' },
    500110: { code: 'emailValid' },
    500109: { code: 'emailExists' },
    500112: { code: 'usernameEmpty' },
    500113: { code: 'nicknameExists' },
  },
  // USER_NAME_EXISTE: 500302,
};
if (Object.freeze) Object.freeze(ErrorCodes);

function ErrorMessages(errCode) {
  // const errCode = props.code;
  // console.log(`ErrorMessage:: ${errCode}`);
  // console.log(`ErrorMessage:: ${ErrorCodes.messages[errCode].code}`);
  // console.log(
  //   <FormattedMessage {...messages[ErrorCodes.messages[errCode].code]} />,
  // );
  // return false;
  return <FormattedMessage {...messages[ErrorCodes.messages[errCode].code]} />;
}

ErrorMessages.propTypes = {};

export default ErrorMessages;
