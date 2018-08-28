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
  PASSWORD_EMPTY: 500101,
  PASSWORD_VALID: 500100,
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
    500101: { code: 'passwordEmpty' },
    500100: { code: 'passwordValid' },
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
// USER_PASSWORD_IS_NOT_ALLOWED(500100, "Password is not valid"),
//     USER_PASSWORD_IS_EMPTY(500101, "Password is empty"),
//     USER_PASSWORD_PATTERN_IS_NOT_ALLOWED(500102, "Password pattern is not allowed."),
//     USER_PASSWORD_REPEAT_IS_EMPTY(500103, "Password is not valid"),
//     USER_PASSWORD_REPEAT_PATTERN_IS_NOT_ALLOWED(500104, "PasswordRepeat pattern is not allowed."),
//     USER_PASSWORD_IS_NOT_EQUALS(500105, "Password is not equals."),
//     USER_NAME_IS_EMPTY(500106, "Username is empty"),
//     USER_NAME_IS_ALREADY_EXISTS(500107, "Username is already exists"),
//     USER_EMAIL_IS_EMPTY(500108, "Email is empty"),
//     USER_EMAIL_IS_ALREADY_EXISTS(500109, "Email is already exists"),
//     USER_EMAIL_IS_NOT_VALID(500110, "Email is not valid"),
//     USER_PROFILE_IMAGE_IS_EMPTY(500111, "Profile Image is empty"),
//     USER_NICK_NAME_IS_EMPTY(500112, "User nick name is empty"),
//     USER_NICK_NAME_IS_ALREADY_EXISTS(500113, "User nick name is already exists"),

// USER_PASSWORD_IS_NOT_ALLOWED(500100, "Password is not valid"),
// USER_PASSWORD_IS_EMPTY(500101, "Password is empty"),
// USER_PASSWORD_PATTERN_IS_NOT_ALLOWED(500102, "Password pattern is not allowed."),
// USER_PASSWORD_REPEAT_IS_EMPTY(500103, "Password is not valid"),
// USER_PASSWORD_REPEAT_PATTERN_IS_NOT_ALLOWED(500104, "PasswordRepeat pattern is not allowed."),
// USER_PASSWORD_IS_NOT_EQUALS(500105, "Password is not equals."),
// USER_NAME_IS_EMPTY(500106, "Username is empty"),
// USER_NAME_IS_ALREADY_EXISTS(500107, "Username is already exists"),
// USER_EMAIL_IS_EMPTY(500108, "Email is empty"),
// USER_EMAIL_IS_ALREADY_EXISTS(500109, "Email is already exists"),

function ErrorMessages() {
  // const errCode = props.code;
  // console.log(`ErrorMessage:: ${errCode}`);
  return false;
  // return (
  //   <FormattedMessage {...messages[ErrorCodes.message[props.code].code]} />
  // );
}

ErrorMessages.propTypes = {};

export default ErrorMessages;
