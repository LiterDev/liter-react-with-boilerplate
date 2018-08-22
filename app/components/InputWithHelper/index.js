/**
 *
 * InputWithHelper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import TextField, { Input } from '@material/react-text-field';
import { FormattedMessage } from 'react-intl';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
    width: '100%',
    textAlign: 'left',
    position: 'relative',
    borderRadius: 3,
    // marginBottom: '0px !important',
  },
  textField: {
    width: '100%',
    // height: 44,
    backgroundColor: '#fafafa',
  },
  input: {
    backgroundColor: '#fafafa',
    borderBottomColor: 'rgba(0,0,0,0.0) !important',
    borderRadius: '3px !important',
    // height: 44,
  },
  ripple: {
    color: '#999999',
  },
  inputWrap: {
    width: '100%',
    borderRadius: '3px !important',
    // border: 'solid 0.5px #ff9393 !important',
  },
  inputWrapError: {
    width: '100%',
    borderRadius: '3px !important',
    border: 'solid 0.5px #ff9393 !important',
  },
  inputError: {
    width: '100%',
    // border: 'solid 0.5px #ff9393 !important',
    borderRadius: '3px !important',
    borderBottomColor: 'rgba(0,0,0,0.0) !important',
  },
  inputWrapWarn: {
    position: 'absolute',
    height: 12,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ff411f',
    right: 12,
    // position: 'relative',
    top: '42%',
    transform: 'translateY(-42%)',
  },
  inputOnFocus: {
    borderRadius: '3px !important',
    border: 'solid 0.5px #1591ff !important',
  },
});

/* eslint-disable react/prefer-stateless-function */
class InputWithHelper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      inputState: false,
      errorState: this.props.error,
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  handelBlur = e => {
    // console.log(e);
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  handleFocus = () => {
    // console.log(this.props.onFocusClear);
    console.log(this.states.inputState);
    if (this.props.onFocusClear) {
      this.setState({
        value: '',
      });
    }
    this.setState({
      inputState: true,
    });
  };
  // {e => this.setState({ value: e.target.value })
  render() {
    const { classes, placeholder, error, type, inputName } = this.props;
    const { inputState } = this.state;
    // console.log(placeholder.props.id);
    // const textField = new MDCTextField(
    //   document.querySelector('.mdc-text-field'),
    // );
    return (
      <div className={classes.root}>
        <FormattedMessage id={placeholder.props.id}>
          {message => (
            <TextField
              label={message}
              box
              className={classNames(
                error ? classes.inputWrapError : classes.inputWrap,
                inputState ? classes.inputOnFocus : '',
              )}
            >
              <Input
                value={this.state.value}
                onChange={e => this.handleChange(e)}
                onBlur={e => this.handelBlur(e)}
                onFocus={this.handleFocus}
                className={classNames(
                  classes.input,
                  this.state.input ? classes.inputOnFocus : '',
                )}
                type={type}
                name={inputName}
              />
            </TextField>
          )}
        </FormattedMessage>
        {error && <div className={classes.inputWrapWarn}>{error}</div>}
      </div>
    );
  }
}

InputWithHelper.propTypes = {
  placeholder: PropTypes.object.isRequired,
  error: PropTypes.any,
  type: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
};

// export default InputWithHelper;
export default withStyles(styles)(InputWithHelper);
