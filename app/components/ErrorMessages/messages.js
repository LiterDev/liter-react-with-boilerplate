/*
 * ErrorCodes Messages
 *
 * This contains all the text for the ErrorCodes component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  passwordValid: {
    id: 'app.components.ErrorCodes.passwordValid',
    defaultMessage: 'Password is not valid !',
  },
  passwordEmpty: {
    id: 'app.components.ErrorCodes.passwordEmpty',
    defaultMessage: 'Password is empty !',
  },
  passwordPatternValid: {
    id: 'app.components.ErrorCodes.passwordPatternValid',
    defaultMessage: 'Password pattern is not allowed. !',
  },
  passwordRepeatEmpty: {
    id: 'app.components.ErrorCodes.passwordRepeatEmpty',
    defaultMessage: 'Repeat Password is empty !',
  },
  passwordNotEqual: {
    id: 'app.components.ErrorCodes.passwordNotEqual',
    defaultMessage: 'Password is not equals.',
  },
  emailEmpty: {
    id: 'app.components.ErrorCodes.emailEmpty',
    defaultMessage: 'Email is empty',
  },
  emailValid: {
    id: 'app.components.ErrorCodes.emailValid',
    defaultMessage: 'Email is not valid',
  },
  emailExists: {
    id: 'app.components.ErrorCodes.emailExists',
    defaultMessage: 'Email is already exists !',
  },
  usernameEmpty: {
    id: 'app.components.ErrorCodes.usernameEmpty',
    defaultMessage: 'Username is empty !',
  },
  nicknameExists: {
    id: 'app.components.ErrorCodes.nicknameExists',
    defaultMessage: 'User nick name is already exists',
  },
});
