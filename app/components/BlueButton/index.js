/**
 *
 * BlueButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  button: {
    // margin: theme.spacing.unit,
    backgroundColor: '#b7ddff',
    width: '100%',
    height: 44,
    borderRadius: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonComplete: {
    // margin: theme.spacing.unit,
    backgroundColor: '#1591ff',
    width: '100%',
    height: 44,
    borderRadius: 3,
  },
});

/* eslint-disable react/prefer-stateless-function */
class BlueButton extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick(e) {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  //   this.props.onClickFunc(e);
  // }
  render() {
    const { classes, btnName, onClickFunc, complete, btnType } = this.props;
    // console.log(btnType);
    return (
      <div>
        {btnType === 'submit' ? (
          <button
            type={btnType}
            className={complete ? classes.buttonComplete : classes.button}
            onClick={onClickFunc}
          >
            <div className={classes.buttonText}>{btnName}</div>
          </button>
        ) : (
          <button
            type={btnType}
            className={complete ? classes.buttonComplete : classes.button}
          >
            <div className={classes.buttonText}>{btnName}</div>
          </button>
        )}
      </div>
    );
  }
}

BlueButton.propTypes = {
  btnName: PropTypes.object.isRequired,
  onClickFunc: PropTypes.func,
  complete: PropTypes.bool.isRequired,
  btnType: PropTypes.string.isRequired,
};

export default withStyles(styles)(BlueButton);
