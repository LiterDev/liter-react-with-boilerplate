/**
 *
 * SignInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
// import { compose } from 'redux';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
// import { injectIntl } from 'react-intl';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  signupForm: {
    paddingTop: 66,
  },
  inputWrap: {
    position: 'relative',
    width: '100%',
    height: 44,
    borderRadius: 3,
    backgroundColor: '#fafafa',
    // border: 'solid 0.5px #eeeeee',
    textAlign: 'left',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    verticalAlign: 'middle',
    lineHeight: '100%',
    marginBottom: 8,
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },

  inputWrapError: {
    position: 'relative',
    width: '100%',
    height: 44,
    borderRadius: 3,
    backgroundColor: '#fafafa',
    // border: 'solid 0.5px #eeeeee',
    textAlign: 'left',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    verticalAlign: 'middle',
    lineHeight: '100%',
    marginBottom: 8,
    border: 'solid 0.5px #ff9393',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },

  inputWrapText: {
    height: 16,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#999999',
    // position: 'relative',
    // top: '50%',
    // transform: 'translateY(-50%)',
  },
  inputWrapWarn: {
    position: 'absolute',
    height: 12,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ff411f',
    right: 12,
    // position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  inputWrapInput: {
    height: 16,
  },
});
// const placeholderString = this.props.placeholder;
/* eslint-disable react/prefer-stateless-function */
class SignInput extends React.PureComponent {
  render() {
    const { classes, label, placeholder, error, type } = this.props;
    // console.log(placeholder);
    // console.log(placeholder.props.id);
    return (
      // <div>
      //   <FormattedMessage {...messages.header} />
      // </div>
      <div className={error ? classes.inputWrapError : classes.inputWrap}>
        <div className={classes.inputWrapText}>{label}</div>
        {/* <input
          type="text"
          placeholder={placeholder}
          className={classes.inputWrapInput}
        /> */}
        {error && <div className={classes.inputWrapWarn}>{error}</div>}

        <FormattedMessage id={placeholder.props.id}>
          {message => (
            <input
              type={type}
              // name="id"
              placeholder={message}
              className={classes.inputWrapInput}
            />
          )}
        </FormattedMessage>
      </div>
    );
  }
}

SignInput.propTypes = {
  label: PropTypes.object.isRequired,
  placeholder: PropTypes.object,
  error: PropTypes.object,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles)(SignInput);
// export default compose(
//   injectIntl,
//   withStyles(styles),
// )(SignInput);
